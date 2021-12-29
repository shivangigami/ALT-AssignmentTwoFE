let productList=[];
let url= "https://fakestoreapi.com/products";

var logout= document.getElementById('logout');
var login= document.getElementById('login')

axios.get(url)
.then((response)=>{
    displayProductList(response.data)
    
});
    
    function displayProductList(user){

      let tableList="";

      for (let i = 0; i < user.length; i++) {
      tableList =`<div class="container col-md-3">
        <a href='http://127.0.0.1:5500/Product_detail.html?id=${user[i].id}'>
        <div><img id='image-btn' class='image-size' src="${user[i].image}"></div>
        <h4 class="text">${user[i].title.length>17?`${user[i].title.substring(0,17)}`:user[i].title}</h4>
        <h4 class="font">$${user[i].price}</h4>  </a>
        </div>`

document.getElementById('box').innerHTML += tableList;
    }
  }
   
function getSelectValue(){
 
  if (this.value=="jewelery") {
    document.getElementById('box').innerHTML =""
    axios.get('https://fakestoreapi.com/products/category/jewelery')
    .then((response)=>{
      displayProductList(response.data)
    })
  }

  if (this.value=="mensclothing") {
    document.getElementById('box').innerHTML =""
    axios.get("https://fakestoreapi.com/products/category/men's clothing")
    .then((response)=>{
      displayProductList(response.data)
    })
  }

  if (this.value=="electronics") {
    document.getElementById('box').innerHTML =""
    axios.get("https://fakestoreapi.com/products/category/electronics")
    .then((response)=>{
      displayProductList(response.data)
    })
  }

  if (this.value=="womensclothing") {
    document.getElementById('box').innerHTML =""
    axios.get("https://fakestoreapi.com/products/category/women's clothing")
    .then((response)=>{
      displayProductList(response.data)
    })
  }
}

function displayNavigationList(){
 
 switch (document.getElementById('product-nav').style.display) {
  case "":
    document.getElementById('product-nav').style.display="block"
    break;

  case "none":
  document.getElementById('product-nav').style.display="block"
  break;

 case "block":
  document.getElementById('product-nav').style.display="none"
  break;

  default:
    document.getElementById('product-nav').style.display="none"
    break;
}
}


document.getElementById('selection').addEventListener("change" , getSelectValue)

document.getElementById('hamburger').addEventListener("click" , displayNavigationList)


