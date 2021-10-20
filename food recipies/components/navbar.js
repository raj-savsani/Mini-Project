function navbar(){
    return `<h1><a href="/">Foodie</a></h1>
    <div class="searchbar">
      <input type="text" id="query" />
      <button id="srch">
        <img
          src="https://img.icons8.com/material-outlined/24/000000/search.png"
        />
      </button>
    </div>
    <div class="options">
      <h3><a href="RecipesOfDay.html">Recipe Of The Day</a></h3>
      <h3><a href="latest.html">Latest Recipe</a></h3>
    </div>`
}

export default navbar;