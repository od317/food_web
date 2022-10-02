const app_id="88246266";
const app_key="5c9709930f9269a830346c8b35d0e3ca";
const s=document.querySelector("#search_form2");
let searchq="";
let Dish='';
let diet='low-fat';
let Health='';
let MealType='';
const home_search_button=document.querySelector('.home-head-search-button-js');

let url='';

if(s!=null){
s.addEventListener('submit',(e)=>{
    e.preventDefault();
    searchq=e.target.querySelector("input").value;
    console.log(searchq);
    url=`https://api.edamam.com/search?q=${String(searchq)}&app_id=${app_id}&app_key=${app_key}&${Health}&${Dish}&${MealType}&${diet}&to=50`;
    fetchapi(url);
})
}

async function fetchapi(url){
  console.log(url);
  document.querySelector('.please_wait').innerHTML=`<div class="temp">Please Wait<ion-icon name="restaurant-outline"></ion-icon></div>`;
   const response=await fetch(url);
   const data=await response.json();
   innerh(data.hits);
}

async function innerh(res){
  if(res.length==0)
  {
    document.querySelector('.please_wait').innerHTML="<div>No results found</div>";
    document.querySelector('.search_res').innerHTML="";
  
  }
  else{
    let ht="";
    res.forEach(e => {
      ht+=` <div class="card res_card" >
      <img src="${e.recipe.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${e.recipe.label}</h5>
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






document.addEventListener("click", e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]")
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

  let currentDropdown
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle("active")
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove("active")
  })
})






let dish = document.querySelectorAll('.dish');

dish.forEach(e=>{
  e.addEventListener('click',()=>{
    Dish="dishType="+e.innerText;
    console.log(Dish);
  })
})

let health = document.querySelectorAll('.Health');

health.forEach(e=>{
  e.addEventListener('click',()=>{
    Health="Health="+e.innerText;
    console.log(Health);
  })
})


let mealType = document.querySelectorAll('.mealType');

mealType.forEach(e=>{
  e.addEventListener('click',()=>{
     MealType="mealType="+e.innerText;
     console.log(MealType);
  })
})

let Diet = document.querySelectorAll('.Diet');

Diet.forEach(e=>{
  e.addEventListener('click',()=>{
     diet="Diet="+e.innerText;
     console.log(diet);
  })
})



//fetchapi(`https://api.edamam.com/search?q=pizza&app_id=${app_id}&app_key=${app_key}&to=50&imageSize=LARGE`);
