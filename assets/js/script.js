'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);


// const tabs= document.querySelectorAll('[data-tab-target]')
// const tabContents = document.querySelectorAll('[data-tab-content]')
// tabs.forEach(tab =>{
//   tab.addEventListener('click',()=>{
//     const target =document.querySelector(tab.dataset.tabTarget);
//     tabContents.forEach(tabContent => {tabContent.classList.remove('active')
//     target.classList.toggle('active')
//   })
    
//   })
  
// })
/**
 * header active
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  if (window.scrollY > 300) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeHeader);

/**
 * Market tab toogle
 */


//  let prevButton = null;

//  const wrapper = document.getElementsByClassName("tab-btn");
 
//  wrapper.addEventListener('click', (e) => {
 
//    const isButton = e.target.nodeName === 'BUTTON'; 
   
//    if (!isButton) {
//      return;
//    }
   
//    e.target.classList.add('active'); // Add .active CSS Class
 
//    if(prevButton !== null) {
//      prevButton.classList.remove('active');  // Remove .active CSS Class
//    }
   
//    prevButton = e.target;
 
//  });




/**
 * toggle active on add to fav
 */

const addToFavBtns = document.querySelectorAll("[data-add-to-fav]");

const toggleActive = function () {
  this.classList.toggle("active");
}

addEventOnElem(addToFavBtns, "click", toggleActive);



/**
 * scroll revreal effect
 */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
      sections[i].classList.add("active");
    } else {
      sections[i].classList.remove("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);

let phone = [
  {
      id:"1",
      p_name:"iPhone 14 Pro Max",
      col3:"Apple",
      col4:"512GB",
      col5:"4323 mAh",
      link:"https://w3docs.com"
  },
  {
      id:"2",
      p_name:"Sony Xperia 10 IV",
      col3:"Sony",
      col4:"128GB",
      col5:"4500 mAh",
      link:"https://w3docs.com"
  },
  {
      id:"3",
      p_name:"Sony Xperia 1 IV",
      col3:"Sony",
      col4:"128GB",
      col5:"4500 mAh",
      link:"https://w3docs.com"
  },
  {
    id:"4",
    p_name:"Apple iPhone 13",
    col3:"Apple",
    col4:"12GB",
    col5:"nil",
    link:"https://w3docs.com"
  },
  {
    id:"5",
    p_name:"Apple iPhone 14",
    col3:"Apple",
    col4:"512GB",
    col5:"3279 mAh",
    link:"https://w3docs.com"
  },
  {
    id:"6",
    p_name:"Samsung Galaxy S22 Ultra",
    col3:"Samsung",
    col4:"256GB",
    col5:"5000 mAh",
    link:"https://w3docs.com"
  },
  {
    id:"7",
    p_name:"Sony Xperia 5 IV",
    col3:"Sony",
    col4:"256GB",
    col5:"5000 mAh",
    link:"https://w3docs.com"
  },
  {
    id:"8",
    p_name:"Apple iPhone 12",
    col3:"Apple",
    col4:"256GB",
    col5:"nil",
    link:"https://w3docs.com"
  },
  {
    id:"9",
    p_name:"Oppo Find X5 Pro",
    col3:"Oppo",
    col4:"256GB",
    col5:"5000 mAh",
    link:"https://w3docs.com"
  },
  {
    id:"10",
    p_name:"OnePlus 10 Pro",
    col3:"OnePlus",
    col4:"256GB",
    col5:"5000 mAh",
    link:"https://w3docs.com"
  },

]
let laptop = [
  {
    id:"1",
    p_name:" MacBook Air(M2)",
    col3:"Apple",
    col4:"512GB",
    col5:"14 hours",
    link:"https://w3docs.com"
  },
  {
      id:"2",
      p_name:"MacBook Pro(M1 Pro)",
      col3:"Apple",
      col4:"512GB",
      col5:"17 hours",
      link:"https://w3docs.com"
  },
  {
    id:"3",
    p_name:"MacBook Air(M1)",
    col3:"Apple",
    col4:"256GB",
    col5:"15 hours",
    link:"https://w3docs.com"
  },
  {
    id:"4",
    p_name:"Spectre x360 14",
    col3:"HP",
    col4:"1TB",
    col5:"10 hours",
    link:"https://w3docs.com"
  },
  {
    id:"5",
    p_name:"ROG Zephyrus G15(15')",
    col3:"Asus",
    col4:"1TB",
    col5:"14 hours",
    link:"https://w3docs.com"
  },
  {
    id:"6",
    p_name:"Zenbook Pro Duo 14",
    col3:"Asus",
    col4:"1TB",
    col5:"16 hours",
    link:"https://w3docs.com"
  },
  {
    id:"7",
    p_name:"ROG Zephyrus G14",
    col3:"Asus",
    col4:"1TB",
    col5:"10 hours",
    link:"https://w3docs.com"
  },
  {
    id:"8",
    p_name:"LG Gram 17",
    col3:"Asus",
    col4:"512GB",
    col5:"20 hours",
    link:"https://w3docs.com"
  },
  {
    id:"9",
    p_name:"Dell XPS 13",
    col3:"Dell",
    col4:"512GB",
    col5:"12 hours",
    link:"https://w3docs.com"
  },
  {
    id:"10",
    p_name:"Chromebook Flip CX5",
    col3:"Asus",
    col4:"512GB",
    col5:"10 hours",
    link:"https://w3docs.com"
  },
]


let phone_t=phone;
let laptop_t=laptop;
// let soft_t=phone;
// let crypto_t=phone;
// let gaming_t=phone;
// let music_t=phone;
function funcselect(id){
  
  switch(id) {
    case 1:
      console.log("Phone");
      table_view(phone_t);
      
      break;
    case 2:
      console.log("Laptop");
      table_view(laptop_t);
      break;
    case 3:
      console.log("Softwares");
      table_view(soft_t);
      break;
    case 4:
      console.log("Cyber Threats");
      
      break;
    case 5:
      console.log("Gaming");
      
      break;
    case 6:
      console.log("Music");
      
      break;
    default:
      console.log("error");
      // code block
  }
}


const myContent = document.querySelector(".myContent");
function table_view(val){
    const showInHtml = val.map((project, index) => {

    return `

        <tr class="table-row" >

            <th class="table-data rank" scope="row">${project.id}</th>
            
            <td class="table-data">
              <div class="wrapper">
                <!-- <img src="./assets/images/coin-1.svg" width="20" height="20" alt="Bitcoin logo" class="img"> -->
                
                <h3>
                  <a href="#" class="coin-name">${project.p_name} <span class="span"></span></a>
                </h3>
              </div>
            </td>

            <td class="table-data last-price">${project.col3}</td>

            <td class="table-data last-update green">${project.col4}</td>

            <td class="table-data market-cap">${project.col5}</td>


            <td class="table-data">
              <button onclick="window.location.href='${project.link}';" class="btn btn-outline">Trade</button>
            </td>

        </tr>
  `
}).join('')
myContent.innerHTML = showInHtml;
}
  
