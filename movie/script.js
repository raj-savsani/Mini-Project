async function searchMovie(movie_name) {
    let res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=47d425944b3d5114339b9ddd5176a122&language=en-US&query=${movie_name}&page=1`);

    let data = await res.json();
    // console.log('data:', data)

    return data;
  }

  let movie_search = document.getElementById("search-movie");

  function appendMovie(movies) {
    // movie_search.style.visibility = "visible"
    movie_search.innerHTML = null;

    if (movies === undefined) {
      return false;
    }

    movies.forEach((movi) => {
      let div = document.createElement("div");
      div.setAttribute("class", "movie-list");
      div.onclick = () => {
        showDetails(movi);
      };

      let img = document.createElement("img");
      img.src = "https://image.tmdb.org/t/p/w500" + movi.poster_path;

      let div1 = document.createElement("div");

      let p1 = document.createElement("p");
      p1.innerText = movi.original_title;

      let p2 = document.createElement("p");
      p2.innerText = "Release Date :   " + movi.release_date;

      let p3 = document.createElement("p");
      p3.innerText = "Rating :   " + movi.vote_average + "/10";

      div1.append(p1, p2, p3);
      div.append(img, div1);
      movie_search.append(div);
    });
  }

  async function main() {
    let name = document.getElementById("search").value;

    // if(name.length<3){
    //     return false;
    // }

    let res = await searchMovie(name);

    appendMovie(res.results);
  }

  let TimerId;

  function debounce(func, delay) {
    if (TimerId) {
      clearTimeout(TimerId);
    }

    TimerId = setTimeout(() => {
      func();
    }, delay);
  }

  let movie_details = document.getElementById("movie-details");

  function showDetails(movi) {
    // console.log("abscd");
    movie_details.innerHTML = null;
    let img = document.createElement("img");
    img.src = "https://image.tmdb.org/t/p/w500" + movi.poster_path;

    let div1 = document.createElement("div");

    let p1 = document.createElement("h2");
    p1.innerText = movi.original_title;

    let p2 = document.createElement("p");
    p2.innerText = "Release Date :   " + movi.release_date;

    let p3 = document.createElement("p");
    p3.innerText = "Rating :   " + movi.vote_average + "/10";

    let p4 = document.createElement("p");
    p4.innerText = movi.overview;
    div1.append(p1, p2, p3, p4);
    movie_details.append(img, div1);
  }

  async function popularmovies() {
    let res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=47d425944b3d5114339b9ddd5176a122&language=en-US&page=1&region=IN`
    );

    let data = await res.json();

    appendPopular(data.results);
  }

  let popular_movies = document.getElementById("popular-movies");

  function appendPopular(movi) {
    popular_movies.innerHTML = null;

    movi.forEach((pop) => {
      let div = document.createElement("div");
      div.setAttribute("class","popular-list")
      div.onclick = () => {
        showDetails(pop);
      };

      let img = document.createElement("img");
      img.src = "https://image.tmdb.org/t/p/w500" + pop.poster_path;

      let p1 = document.createElement("h3");
      p1.innerText = pop.title;

      let p2 = document.createElement("p");
      p2.innerText = "Release Date :   " + pop.release_date;

      let p3 = document.createElement("p");
      p3.innerText = "Rating :   " + pop.vote_average + "/10";

      div.append(img, p1, p2, p3);
      popular_movies.append(div);
    });
  }
  popularmovies();

let login_register = document.getElementById("login-register");
login_register.addEventListener("click",()=>{
  document.querySelector(".modal").style.display = "flex";
})

function cl(){
  document.querySelector(".modal").style.display = "none";
}

function reg(){
  document.querySelector(".reg-div").style.display = "block";
 document.querySelector(".log-div").style.display = "None";
 document.getElementById("register-btn").style.backgroundColor = "rgb(107, 83, 83)"
 document.getElementById("register-btn").style.color = "blanchedalmond";
 document.getElementById("login-btn").style.backgroundColor = "rgb(240, 240, 240)"
  document.getElementById("login-btn").style.color = "black";
}
function log(){
  document.querySelector(".log-div").style.display = "block";
  document.querySelector(".reg-div").style.display = "none";
  document.getElementById("login-btn").style.backgroundColor = "rgb(107, 83, 83)"
  document.getElementById("login-btn").style.color = "blanchedalmond";
  document.getElementById("register-btn").style.backgroundColor = "rgb(240, 240, 240)"
  document.getElementById("register-btn").style.color = "black";
}



function signup(e){
  e.preventDefault();
  
  let form = document.getElementById("signup-form");

  let user_data={
    name:form.name.value,
    email:form.email.value,
    password:form.password.value,
    username: form.username.value,
    mobile: form.mobile.value,
    description: form.description.value,
  };

  user_data = JSON.stringify(user_data);

  fetch('https://masai-api-mocker.herokuapp.com/auth/register',{
    method:"POST",
    body:user_data,
    headers: {
      "Content-Type": "application/json",
    },
  })

  .then((res)=>{
    return res.json();
  })

  .then((res)=>{
    let p = document.getElementById("reg-msg");
    let msg = res.message;
    let err = res.error;
    if(err == false){
      p.textContent = msg;
      p.style.color = "green";
    }else{
      p.textContent = msg;
      p.style.color = "red";
    }
    console.log('res:', res)
  })
  .catch((err)=>{
    let p = document.getElementById("reg-msg");
    let msg = err.message;
    p.textContent = msg;
    p.style.color = "red";
  console.log('err:', err)
  })
}

function login(e){
  e.preventDefault();

  let form = document.getElementById("login-form");
  
  let user_data = {
    username: form.user.value,
    password: form.pass.value,
  }

  let data_to_send = JSON.stringify(user_data);

  fetch('https://masai-api-mocker.herokuapp.com/auth/login',{
    method:"POST",
    body:data_to_send,
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((res)=>{
    return res.json();
  })
  .then((res)=>{
    let p = document.getElementById("log-msg");
    if(res.error == false){
      p.textContent = "Login Successful";
      p.style.color = "green";
      setTimeout(cl,1500);
    }else{
      p.textContent = res.message;
      p.style.color = "red";
    }
    console.log('res:', res)
    fetchMydata(user_data.username,res.token);
  })
  .catch((err)=>{
    let p = document.getElementById("log-msg");
    let msg = err.message;
    p.textContent = msg;
    p.style.color = "red";
    console.log("e",err);
  })
}

function fetchMydata(username,token){
  fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${token}`
    },
  })
  .then((res)=>{
    return res.json();
  })
  .then((res)=>{
    let replace = document.getElementById("login-register");
    let name = res.name;
    if(res.name){
      replace.textContent = res.name;
      replace.style.backgroundColor = "#FFC107";
    }
    console.log('res:', res)
  })
  .catch((err)=>{
    console.log('err:', err)
  })
}
