const app_id2="88246266";
const app_key2="5c9709930f9269a830346c8b35d0e3ca";
const id=document.querySelector('.view_title').textContent;
console.log(id);
const view_url=`https://api.edamam.com/search?q=${id}&app_id=${app_id2}&app_key=${app_key2}`;
fetch_api2(view_url);
async function fetch_api2(view_url){
      const response2=await fetch(view_url);
      const data2= await response2.json();
      const hits=data2.hits;
      let ht2=``;
      hits.forEach(e2 => {
      if(e2.recipe.label===id){
        let health='';
        let ingredientLines='';
        let ingredients='';
        let i =1;
        e2.recipe.healthLabels.forEach(h=>{
          health+=String(h)+'<br>';
        })
        e2.recipe.ingredientLines.forEach(h=>{
          ingredientLines+=String(h)+'';
         
        })
        e2.recipe.ingredients.forEach(h=>{
          ingredients+=String(h.text)+'<br>';
         
        })
        health=health.substring(0,health.length-1)+".";
        ingredientLines=ingredientLines.substring(0,ingredientLines.length-1)+".";
     ht2=`<div class="none"></div>
    <h3 class="color">${e2.recipe.label}</h3>
     <div class="d-flex flex-column info-contanier ">

     <div class="d-flex flex-row">
     <div class="row-info max-wi">

     <div class="d-flex justify-content-between mb-3  max-wiflex">
    <label class=""><div class="color">Chef:</div>${e2.recipe.source}</label>
    <label class=""><div class="color">foodCategory:</div>${e2.recipe.ingredients[0].foodCategory}</label> 
    </div>

    <div class="d-flex justify-content-between mb-3 max-wi max-wiflex">
    <label class=""> <div class="color">calories:</div>${String(e2.recipe.calories).substring(0,6)}</label>
    <label class=""><div class="color">totalWeight:</div>${String(e2.recipe.totalWeight).substring(0,6)}</label> 
    </div>

    <div class="d-flex justify-content-between mb-3 max-wi max-wiflex">
    <label class=""> <div class="color">mealType:</div>${String(e2.recipe.mealType)}</label>
    <label class=""><div class="color">dishType:</div>${String(e2.recipe.dishType)}</label> 
    </div>

    <div class="d-flex justify-content-between mb-3 max-wi max-wiflex">
    <label class=""> <div class="color">FAT:</div>${String(e2.recipe.totalNutrients.FAT.quantity).substring(0,6)}</label>
    </div>
    <br><br>

     <div class="mt-3 max-wi in-max"> <div class="color ">ingredients:</div>${ingredientLines} </div><br>
     <br><br>
     </div>
     <img src="${e2.recipe.image}" class="">
     </div>
     <div class="max-wi"><div class="color">health:</div>${health}</div> <br>
     </div>
     <br>
    <div class="min-wi">
     <div class="d-flex justify-content-between mb-3 min-wi max-wiflex">
     <label class=""><div class="color">Chef:</div>${e2.recipe.source}</label>
     <label class=""><div class="color">foodCategory:</div>${e2.recipe.ingredients[0].foodCategory}</label> 
     </div>
 
     <div class="d-flex justify-content-between mb-3 min-wi max-wiflex">
    <label class=""> <div class="color">calories:</div>${String(e2.recipe.calories).substring(0,6)}</label>
    <label class=""><div class="color">totalWeight:</div>${String(e2.recipe.totalWeight).substring(0,6)}</label> 
    </div>

    <div class="d-flex justify-content-between mb-3 min-wi max-wiflex">
    <label class=""> <div class="color">mealType:</div>${String(e2.recipe.mealType)}</label>
    <label class=""><div class="color">dishType:</div>${String(e2.recipe.dishType)}</label> 
    </div>

    <div class="d-flex justify-content-between mb-3 min-wi max-wiflex">
    <label class=""> <div class="color">FAT:</div>${String(e2.recipe.totalNutrients.FAT.quantity).substring(0,6)}</label>
    </div>

    <div class="mt-3 min-wi in-max"> <div class="color ">ingredients:</div>${ingredientLines} </div><br>
    <br><br>
    <div class="min-wi"><div class="color">health:</div>${health}</div> <br>
    
    </div>
     <br>
      `;
      return;
      }
      });
      document.querySelector('.view_body').innerHTML=ht2;
}