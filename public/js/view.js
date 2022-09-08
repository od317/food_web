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
        ht2=`
      <h1 class='view_title'>${e2.recipe.label}</h1>
      <img src="${e2.recipe.image}" class="img-fluid">
      `;
      return;
      }
      });
      document.querySelector('.container').innerHTML=ht2;
}