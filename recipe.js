let serachbar = document.getElementById("getfoodname");
let serachbtn = document.getElementById("serachbtn");
let FoodName = document.getElementById("FoodName");
let preview = document.getElementsByClassName("result")[0];
serachbtn.addEventListener("click", () => {
    preview.innerHTML="";
    document.getElementsByClassName("error")[0].innerHTML="";
    console.log(serachbar.value);
    getRecipe();
});
function getRecipe() {
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${serachbar.value.trim()}`;
  fetch(url)
    .then((result) => {
      return result.json();
    })
    .then((result) => {
        i=0;
        
        for (let i = 0; i < result.meals.length; i++) {
            preview.innerHTML += `<div class="data">
            <h4 class="text-center">
            ${result.meals[i].strMeal}
            </h4>
            <div class="text-center">
                <img class="MealThumb" src="${result.meals[i].strMealThumb}" alt="foodImgage" ></img>
            </div>
            <p style="margin-top: 20px;">
            ${result.meals[i].strInstructions}
            </p>

        </div>`
        }
        // let Name = result.strMeal;
        // FoodName.innerHTML = `${Name}`;
    }).catch(()=>{
        document.getElementsByClassName("error")[0].innerHTML = " Food Not Found!!!";
    });
}

// async function getRecipe1(){
//     let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${serachbar.value.trim()}`;
//     let get = await fetch(url);
//     let result = await get.json();
//     i=0;
        
//     for (let i = 0; i < result.meals.length; i++) {
//         preview.innerHTML += `<div class="data">
//         <img class="MealThumb" src="${result.meals[i].strMealThumb}" alt="foodImgage" ></img>
//         <h4 class="text-center">
//             ${result.meals[i].strMeal}
//         </h4>
//         <p>
//         ${result.meals[i].strInstructions}
//         </p>

//     </div>`
//     }

// }
