var productId= window.location.search.split("=")[window.location.search.split("=").length-1]
let similarHeader= document.getElementById('header');
// let updateButton = document.getElementById('update-btn');

axios.get(`https://fakestoreapi.com/products/${productId}`)
.then((response)=>{
    displayDescriptionOfList(response.data)
    
     if (response.data.category) {
        fetchSimilarCategoryData(response.data.category);
      }
     
});

function displayDescriptionOfList(item){
    let descriptionList="";
    let updateList="";
updateList=`<div>
<a href="http://127.0.0.1:5500/New_product.html?id=${item.id}">
<button id="update-btn" class="updateProduct-btn">Update Product</button></a> 
</div>`
    // updateButton.style.display="block"
    descriptionList=`<div class="grid-container">
   
   <img class="imgBox" src="${item.image}">
    <div class="align"><h1 class="heading">${item.title}</h1>
        
        <p class="detail">${item.description}</p>
        <p class="price">$${item.price}</p> 
        <button class="cart-btn">Cart</button></div>
        
        
        </div>
         `

         document.getElementById('descriptions').innerHTML+=descriptionList;
         document.getElementById('updateData').innerHTML=updateList
}


function fetchSimilarCategoryData(categoryName) {
    axios
      .get(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((response) => {
        similarCategoryData(response.data)
      });
   
  }

  function similarCategoryData (item){
    let similarCategory="";
    item.filter((data)=>data.id !=productId).map((productItem)=>{
   
      similarHeader.style.display="block"
    similarCategory=`<div class="container col-md-3">
    <a href='http://127.0.0.1:5500/Product_detail.html?id=${productItem.id}'>
    <img id='image-btn' class='image-size' src="${productItem.image}">
    <h4 class="text">${productItem.title.length>17?`${productItem.title.substring(0,17)}`:productItem.title}</h4>
        <h4 class="font">$${productItem.price}</h4>  </a>
    <div>
    `
   return ( document.getElementById('categories').innerHTML+=similarCategory)
  })
  }

  
