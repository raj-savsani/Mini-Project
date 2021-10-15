async function popularvideos() {
  let res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyDU699faiwdFwLpcWGeWVS3aMgvvdRf1w0&maxResults=20`
  );

  let data = await res.json();

  appendvideos(data);
}

let videos = document.getElementById("videos");

function appendvideos({ items }) {
  videos.innerHTML = null;

  items.forEach((v) => {
    let div = document.createElement("div");

    let yt = document.createElement("div");

    if (v.id.length === 11) {
      yt.innerHTML = `<iframe width="300" height="200" src="https://www.youtube.com/embed/${v.id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      div.style.marginTop = "20px";
    } else {
      yt.innerHTML = `<iframe width="300" height="200" src="https://www.youtube.com/embed/${v.id.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      div.style.marginTop = "20px";
    }

    let yttitle = document.createElement("h3");
    yttitle.textContent = v.snippet.title;
    div.append(yt, yttitle);
    videos.append(div);
  });
}

popularvideos();

async function search() {
  let query = document.getElementById("searchbar").value;

  let res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDU699faiwdFwLpcWGeWVS3aMgvvdRf1w0&maxResults=20&type=video&q=${query}`
  );

  let data = await res.json();

  appendvideos(data);
}
