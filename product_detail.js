var productId= window.location.search.split("=")[window.location.search.split("=").length-1]

axios.get(`https://fakestoreapi.com/products/${productId}`)
.then((response)=>{
    displayDescriptionOfList(response.data)
     console.log(response)
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
