var productId= window.location.search.split("=")[window.location.search.split("=").length-1]
let similarHeader= document.getElementById('header')

axios.get(`https://fakestoreapi.com/products/${productId}`)
.then((response)=>{
    displayDescriptionOfList(response.data)
     console.log(response)
     if (response.data.category) {
        fetchSimilarCategoryData(response.data.category);
      }
     
     //console.log(json)
    
});

function displayDescriptionOfList(item){
    let descriptionList="";
    descriptionList=`<div class="grid-container">
   <img class="imgBox" src="${item.image}">
    <div class="align"><h1 class="heading">${item.title}</h1>
        
        <p class="detail">${item.description}</p>
        <p class="price">$${item.price}</p> 
        <button class="cart-btn">Cart</button></div>
        
        
        </div>
         `

         document.getElementById('description').innerHTML+=descriptionList;
}


function fetchSimilarCategoryData(categoryName) {
    axios
      .get(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((response) => {
        similarCategoryData(response.data)
        console.log("similar datas", response.data);
      });
   
  }

  function similarCategoryData (item){
    let similarCategory="";
    
    for (let i = 0; i < item.length; i++){
      similarHeader.style.display="block"
    similarCategory=`<div class="container col-md-3">
    <a href='http://127.0.0.1:5500/Product_detail.html?id=${item[i].id}'>
    <img id='image-btn' class='image-size' src="${item[i].image}">
    <h4 class="text">${item[i].title.length>17?`${item[i].title.substring(0,17)}`:item[i].title}</h4>
        <h4 class="font">$${item[i].price}</h4>  </a>
    <div>
    `
    document.getElementById('categories').innerHTML+=similarCategory;
  }}
