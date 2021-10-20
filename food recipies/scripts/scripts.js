async function getData(url) {
  let res = await fetch(url);

  let data = await res.json();

  return data.meals;
}

function append(data, container) {
  container.innerHTML = null;
  data.forEach(
    ({
      strMeal,
      strCategory,
      strArea,
      strInstructions,
      strMealThumb,
      strYoutube,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
    }) => {
      let main_div = document.createElement("div");

      let img = document.createElement("img");
      img.src = strMealThumb;

      let name = document.createElement("h3");
      name.textContent = strMeal;

      let cat = document.createElement("p");
      cat.textContent = "Category: " + strCategory;

      let area = document.createElement("p");
      area.textContent = "Area: " + strArea;

      let Ingredient = document.createElement("p");
      Ingredient.textContent =
        "Ingredient: " +
        strIngredient1 +
        " " +
        strIngredient2 +
        " " +
        strIngredient3 +
        " " +
        strIngredient4 +
        " " +
        strIngredient5 +
        " " +
        strIngredient6;

      let Instructions = document.createElement("p");
      Instructions.textContent = strInstructions;

      main_div.append(img, name, cat, area, Ingredient, Instructions);

      container.append(main_div);
    }
  );
}

export { getData, append };
