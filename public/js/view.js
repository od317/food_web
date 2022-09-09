const app_id2="88246266";
const app_key2="5c9709930f9269a830346c8b35d0e3ca";
console.log("shaker");
const id=document.querySelector('.view_title').textContent;
console.log(id);
const view_url=`https://api.edamam.com/search?q=${id}&app_id=${app_id2}&app_key=${app_key2}`;
fetch_api2(view_url);
async function fetch_api2(view_url){
      const response2=await fetch(view_url);
      const data2= await response2.json();
      const hits=data2.hits;
      let ht2="";
      hits.forEach(e2 => {
      if(e2.recipe.label===id){
        let health='';
        let ingredientLines='';
        e2.recipe.healthLabels.forEach(h=>{
          health+=String(h)+',';
        })
        e2.recipe.ingredientLines.forEach(h=>{
          ingredientLines+=String(h)+',';
        })
        health=health.substring(0,health.length-1)+".";
        ingredientLines=ingredientLines.substring(0,ingredientLines.length-1)+".";
        ht2=`
      <h1 class='view_title'>${e2.recipe.label}</h1>
      <div class="view-flex d-flex align-content-start flex-wrap">
      <img src="${e2.recipe.image}" class="img-thumbnail img-fluid"><br>
      <div class="info d-flex flex-row ">Chef: ${e2.recipe.source}<br>
 Category: ${e2.recipe.ingredients[0].foodCategory}<br><br>
       healthLabels: ${health}<br><br>
       ingredientLines: ${ingredientLines}
       <br><br>

       <div>
       </div>
       <div class=""></div>
      `;
      return;
      }
      });
      document.querySelector('.view_body').innerHTML=ht2;
}