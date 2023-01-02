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
    col5:"3227 mAh",
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
    col5:"2815 mAh",
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
      document.getElementById('btn-phone').focus();
      document.getElementById('btn-phone').style.outline='None';
      table_view(phone_t);
      
      break;

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
              <button onclick="window.location.href='${project.link}';" class="btn btn-outline">Buy</button>
            </td>

        </tr>
  `
}).join('')
myContent.innerHTML = showInHtml;
}




/**Trend TAB */
let news =[
  {
    id:"1",
    pic:"./assets/images/cybersecurity.png",
    heading:"news",
    year:"2022",
    title:"Cyber Security Latest News",
    loc:"./cybersecurity_news.html"
  },
  {
    id:"2",
    pic:"./assets/images/globe.png",
    heading:"news",
    year:"2022",
    title:"Global News",
    loc:"./global_news.html"
  }
]
let software =[
  {
    id:"1",
    pic:"./assets/images/editing.png",
    heading:"softwares",
    year:"2022",
    title:"Editing Softwares",
    loc:"./softwares.html"
  },
  // {
  //   id:"2",
  //   pic:"./assets/images/globe.png",
  //   heading:"news",
  //   year:"2022",
  //   title:"Global News",
  //   loc:"./global_news.html"
  // }
]
function mini_nav_select(id){
  switch(id) {
    case 1:
      console.log("News");
      trend_view(news);
      
      break;
    case 2:
      console.log("Softwares");
      trend_view(software);
     
      break;
    
    default:
      document.getElementById('btn-news').focus();
      document.getElementById('btn-news').style.outline='None';
      trend_view(news);
      break;

      // code block
  }

}
const myContent2 = document.querySelector(".myContent2");
function trend_view(val){
  const showInHtml = val.map((project, index) => {
    return `

    <li>
    <div class="trend-card" onclick="window.location='${project.loc}'">

      <div class="card-title-wrapper">
        <img src="${project.pic}" width="24" height="24" alt="pic">

        <a href="#" class="card-title">
         ${project.heading} <span class="span">${project.year}</span>
        </a>
      </div>

      <data class="card-value" value="46168.95">${project.title}</data>

    </div>
  </li>
  `

}).join('')
myContent2.innerHTML = showInHtml;
}


let edit_software=[
  {
      id:"1",
      p_name:"Adobe Illustrator",
      col3:"Adobe",
      col4:"1.9 GB",
      link:"https://getintopc.com/?s=illustrator",
      pic:"./assets/images/illustrator.png"
  },
  {
      id:"2",
      p_name:"Adobe Photoshop",
      col3:"Adobe",
      col4:"2.2 GB",
      link:"https://getintopc.com/?s=photoshop",
      pic:"./assets/images/photoshop.png"
  },
  {
      id:"3",
      p_name:"Adobe After Effects",
      col3:"Adobe",
      col4:"2.4 GB",
      link:"https://getintopc.com/?s=adobe+after+effects",
      pic:"./assets/images/after-effects.png"
  },
  {
      id:"4",
      p_name:"Adobe Premiere Pro",
      col3:"Adobe",
      col4:"512 GB",
      link:"https://getintopc.com/?s=premiere+pro",
      pic:"./assets/images/premiere.png"
  },
  {
      id:"5",
      p_name:"Adobe Media Encoder",
      col3:"Adobe",
      col4:"630 MB",
      link:"https://getintopc.com/?s=media+encoder",
      pic:"./assets/images/media-encoder.png"
  },
  {
      id:"6",
      p_name:"Adobe Lightroom",
      col3:"Adobe",
      col4:"1.3 GB",
      link:"https://getintopc.com/?s=lightroom",
      pic:"./assets/images/lightroom.png"
  },
  {
      id:"7",
      p_name:"Adobe InDesign",
      col3:"Adobe",
      col4:"890 MB",
      link:"https://getintopc.com/?s=InDesign",
      pic:"./assets/images/indesign.png"
  },
  {
      id:"8",
      p_name:"Sony Vegas Pro",
      col3:"Sony",
      col4:"701 MB",
      link:"https://getintopc.com/?s=sony+vegas+pro",
      pic:"./assets/images/sony-vegas.png"
  },
  {
      id:"9",
      p_name:"CorelDRAW Graphics Suite",
      col3:"Corel Corp",
      col4:"78 MB",
      link:"https://getintopc.com/?s=CorelDRAW+Graphics+Suite+2022+Free+Download",
      pic:"./assets/images/corel.png"
  },
]

const edit_soft = document.querySelector(".edit_softwares");
function edit_soft_view(val){
  const showInHtml = edit_software.map((project, index) => {
    return `

    <tr class="table-row">

              <td class="table-data">
                <button class="add-to-fav" aria-label="Add to favourite" data-add-to-fav>
                  <ion-icon name="star-outline" aria-hidden="true" class="icon-outline"></ion-icon>
                  <ion-icon name="star" aria-hidden="true" class="icon-fill"></ion-icon>
                </button>
              </td>

              

              <td class="table-data">
                <div class="edit_items">
                  <img src="${project.pic}" width="20" height="20" alt="logo" class="img">

                  <h3>
                    <a href="#" class="coin-name">${project.p_name} <span class="span"></span></a>
                  </h3>
                </div>
              </td>

              <td class="table-data last-price">${project.col3}</td>

              <td class="table-data last-update green">${project.col4}</td>
              <td class="table-data">
                <button class="btn btn-outline">Download</button>
              </td>

            </tr>
  `

}).join('')
edit_soft.innerHTML = showInHtml;
}
/** HomeWork Solutions */




function ques_ans_view(val){
  const ques_ans = document.querySelector(".homework_sol");
  let ques=[
    {
      id:"1",
      ques:"What is your name?",
      ans:"SGR"
    },
    {
      id:"2",
      ques:"What is your name?",
      ans:"SGR"
    },
    {
      id:"2",
      ques:"What is your name?",
      ans:"SGR"
    },
    
    
  
  ]
  const showInHtml = ques.map((project, index) => {
    return `

    <details itemscope itemprop="mainEntity" >
        <summary itemprop="name">${project.ques}</summary>
          <div class="details-expanded" itemscope itemprop="acceptedAnswer" >
          <p>${project.ans}</p>
        </div>
      </details>
  `

}).join('')
ques_ans.innerHTML = showInHtml;
}
/**Like Button */
let count=16745;
var button = document. getElementById('like');
button. onclick = function() {
count += 1;
display(count);

};
function display(){
  button. innerHTML = "Likes: " + count;
}



var myElement = document.getElementById('image'),
    imgList = [
  "/Users/sgr/Development/Blogs/nerdzspot_v3/assets/images/memoji1.png",
  "/Users/sgr/Development/Blogs/nerdzspot_v3/assets/images/memoji2.png",
];
function changeImage (myElement, imgList) {
  setInterval(function(){
    randomImage = Math.floor( Math.random() * imgList.length);
    myElement.style.backgroundImage = "url('" + imgList[randomImage] + "')";
  }, 1000);
}
changeImage(myElement, imgList);

