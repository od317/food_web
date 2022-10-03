const app_id="88246266";
const app_key="5c9709930f9269a830346c8b35d0e3ca";
const s=document.querySelector("#search_form2");
const searchfor = document.querySelector(".search-for-rec");
const flitersnum = document.querySelector(".flitersnum");
let searchq="";
let Dish='';
let diet='';
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
  searchfor.innerHTML=""; 
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



let flitersButtons= [{},{},{},{}];

let flitersBut = document.querySelector('.flitersBut');

let dish = document.querySelectorAll('.dish');

dish.forEach(e=>{
  e.addEventListener('click',()=>{
    Dish="dishType="+e.innerText;
    console.log(Dish);
    flitersButtons[0]=[e.innerText,`<button class="${e.innerText}">${e.innerText}<span class="x">x</span></button>`];
    addfliter();


  })
})

let health = document.querySelectorAll('.Health');

health.forEach(e=>{
  e.addEventListener('click',()=>{
    Health="Health="+e.innerText;
    console.log(Health);
    flitersButtons[1]=[e.innerText,`<button class="${e.innerText}">${e.innerText}<span class="x">x</span></button>`];
    addfliter();

  
  })
  
})


let mealType = document.querySelectorAll('.mealType');

mealType.forEach(e=>{
  e.addEventListener('click',()=>{
     MealType="mealType="+e.innerText;
     console.log(MealType);
     flitersButtons[2]=[e.innerText,`<button class="${e.innerText}">${e.innerText}<span class="x">x</span></button>`];
     addfliter();

   
  })

})

let Diet = document.querySelectorAll('.Diet');

Diet.forEach(e=>{
  e.addEventListener('click',()=>{
     diet="Diet="+e.innerText;
     console.log(diet);
     flitersButtons[3]=[e.innerText,`<button class="${e.innerText}">${e.innerText}<span class="x">x</span></button>`];
     addfliter();
  })
  

})

function flitersfunc(but){
  but.forEach(b=>{
    if(b.length!=null){
     document.querySelector(`.${b[0]}`).addEventListener('click',()=>{
      for(let i=0;i<4;i++){
      if(flitersButtons[i].length!=null&&flitersButtons[i][0]===b[0]){
        flitersButtons[i]={};
      }
     }
     console.log(flitersButtons); 
     addfliter();
    });
    }
  })
  
}

function addfliter(){

  flitersnum.innerHTML="";
     flitersButtons.forEach(f=>{
      
      if(f.length!=null){
      flitersnum.innerHTML+=f[1];
      }
    })
    flitersfunc(flitersButtons);
    flitersup();
    console.log(searchq,'\n dish: '+Dish,'\n diet: '+diet,'\n health: '+Health,'\n mealtype: '+MealType)
}

function flitersup(){
  Dish = flitersButtons[0].length ==null ? "": "dishType="+flitersButtons[0][0];
  Health = flitersButtons[1].length ==null ? "": "Health="+flitersButtons[1][0];
  MealType = flitersButtons[2].length ==null ? "": "mealType="+flitersButtons[2][0];
  diet = flitersButtons[3].length ==null ? "": "Diet="+flitersButtons[3][0];
}


//fetchapi(`https://api.edamam.com/search?q=pizza&app_id=${app_id}&app_key=${app_key}&to=50&imageSize=LARGE`);
