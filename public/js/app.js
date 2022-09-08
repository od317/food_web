const app_id="88246266";
const app_key="5c9709930f9269a830346c8b35d0e3ca";
const s=document.querySelector("#search_form");
let searchq="";
const health=`https://api.edamam.com/search?q=onion&app_id=${app_id}&app_key=${app_key}&health=alcohol-free&to=50`;
fetchapi(`https://api.edamam.com/search?q=onion&app_id=${app_id}&app_key=${app_key}&to=40`);
if(s!=null){
s.addEventListener('submit',(e)=>{
    e.preventDefault();
    searchq=e.target.querySelector("input").value;
    const url=`https://api.edamam.com/search?q=${String(searchq)}&app_id=${app_id}&app_key=${app_key}&to=50`;
    fetchapi(url);
})
}

async function fetchapi(url){
  document.querySelector('.please_wait').innerHTML=`<div class="temp">Please Wait<ion-icon name="restaurant-outline"></ion-icon></div>`;
   const response=await fetch(url);
   const data=await response.json();
   innerh(data.hits);
}

async function innerh(res){
  if(res.length==0)
  {
    document.querySelector('.please_wait').innerHTML="No results found";
    document.querySelector('.search_res').innerHTML="";
  
  }
  else{
    let ht="";
    res.forEach(e => {
      ht+=` <div class="card res_card" >
      <img src="${e.recipe.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${e.recipe.label}</h5>
        <p class="card-text"></p>
        <a href="/recipe/${e.recipe.label}" class="btn btn-primary" id="b">View recipe</a>
      </div>
      </div>`
    });
    if(document.querySelector('.search_res')!=null){
      document.querySelector('.please_wait').innerHTML=``;
      document.querySelector('.search_res').innerHTML=ht;
    }
  }
}




