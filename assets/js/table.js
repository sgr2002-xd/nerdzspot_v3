
'use strict';

let phone = [
        {
            id:"1",
            p_name:"Xiaomi Redmi Note 12 Pro+",
            brand:"Xiaomi",
            ram:"12GB",
            dhits:"23,613"
        },
        {
            id:"2",
            p_name:"Samsung Galaxy S22 Ultra 5G",
            brand:"Samsung",
            ram:"12GB",
            dhits:"22,587"
        },
        {
            id:"3",
            p_name:"Samsung Galaxy A53 5G",
            brand:"Samsung",
            ram:"12GB",
            dhits:"20,359"
        },
    ]

const myContent = document.querySelector(".myContent");

window.addEventListener("DOMContentLoaded", function () {
  const showInHtml = phone.map((project, index) => {
    return `
    
              
    <tr class="table-row" >
                  
                  <td class="table-data">
                    // <button class="add-to-fav" aria-label="Add to favourite" data-add-to-fav>
                    //   <ion-icon name="star-outline" aria-hidden="true" class="icon-outline"></ion-icon>
                    //   <ion-icon name="star" aria-hidden="true" class="icon-fill"></ion-icon>
                    // </button>
                  </td>
                  
                  <th class="table-data rank" scope="row">${project.id}</th>
                  
                  <td class="table-data">
                    <div class="wrapper">
                      <!-- <img src="./assets/images/coin-1.svg" width="20" height="20" alt="Bitcoin logo" class="img"> -->
                      
                      <h3>
                        <a href="#" class="coin-name">${project.p_name} <span class="span">BTC</span></a>
                      </h3>
                    </div>
                  </td>

                  <td class="table-data last-price">${project.brand}</td>

                  <td class="table-data last-update green">${project.ram}</td>

                  <td class="table-data market-cap">${project.dhits}</td>

                  <!-- <td class="table-data">
                    <img src="./assets/images/chart-1.svg" width="100" height="40" alt="profit chart" class="chart">
                  </td> -->

                  <td class="table-data">
                    <button class="btn btn-outline">Trade</button>
                  </td>

     </tr>
        `;
  })

  myContent.innerHTML = showInHtml;
})