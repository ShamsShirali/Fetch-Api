"use strict";

getCategories();
getProducts();

async function getCategories() {
  let categoriesList = document.querySelector("#categories");
  const response = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await response.json();
  let list = "";
  categories.forEach((item) => {
    list += `<li class="dropdown-item"> ${item} </li>`;
  });
  categoriesList.innerHTML = list;
}

async function getProducts() {
  let productsList = document.querySelector("#products");
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  let product = "";
  products.forEach((item) => {
    product += `
        <div class="col mb-5">
        <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top img-fluid" src="${item.image}" alt="${item.title}" title="${item.title}" />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder"> ${item.title} </h5>
                    <!-- Product price-->
                   $ ${item.price}
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a onclick="Show(${item.id})" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-outline-dark mt-auto" href="#">View Products</a></div>
            </div>
        </div>
    </div>
        `;
  });
  productsList.innerHTML = product;
}

async function Show(id) {
  let modalDetail = document.querySelector("#modal-body");
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await response.json();
  modalDetail.innerHTML = `
    <div>
    <img  src="${product.image}" class="img-fluid card-img-top" />
    <p> ${product.description} </p>
    <p> Category : ${product.category} </p>
    
<div id="star" class="d-flex justify-content-center small text-warning mb-2">
</div>
    </div>
    `;

  let rate = Math.round(product.rating.rate);
  let stars = "";
  for (let i = 0; i < rate; i++) {
    stars += `<div class="bi-star-fill"></div>`;
  }
  document.querySelector("#star").innerHTML = stars;
}

let add=document.querySelector('#add');
// let arr=JSON.parse(localStorage.getItem("basket"));

// add.forEach((btn)=>{

//   btn.addEventListener("click", function (e) {

//     e.preventDefault();

//     let id=this.parentNode.getAttribute("data-id");

//     if(localStorage.getItem("basket")==null){
//       localStorage.setItem("basket",JSON.stringify([]));
//     }

//     arr=JSON.parse(localStorage.getItem("basket"));

//     let existProduct=arr.find((p)=>p.id==id);

//     if(existProduct==undefined){
//       arr.push({
//         id:id,
//         imgUrl:product.image,
//         name:product.category,
//         description:product.description,
//         price:product.price,
//         count:1
//       });
//     }
//     else{
//       existProduct.count++;
//     }

//     localStorage.setItem("basket", JSON.stringify(arr));
//     addBtn();
//   })
// })
let sum=0;

add.addEventListener('click',()=>{
  let bcount=document.querySelector('#countcard');
  
  // if(localStorage.getItem("basket")!=null){
  //   arr=JSON.parse(localStorage.getItem("basket"));

    

    // bcount.foreach((p)=>{
      sum++;
      bcount.innerHTML=sum;
    // });
  // }
});