let productList=[];
let url= "https://fakestoreapi.com/products"

axios.get(url)
.then((response)=>{
    displayProductList(response.data)
     console.log(response)
     //console.log(json)
    
});
    
    function displayProductList(user){

      let tableList="";

      for (let i = 0; i < user.length; i++) {
        
        
     
        //productList.push(user)
        //console.log(productList)
      //   tableList +="<tr>";
      //   tableList +="<td>"+user[i].id+"</td>"
      //   tableList +="<td>"+user[i].title+"</td>"
      //   tableList +="<td>"+user[i].price+"</td>"
      //  // tableList +="<td>"+user[i].description+"</td>"
      //   tableList +="<td>"+user[i].category+"</td>"
      //   tableList +=`<td><a href='http://127.0.0.1:5500/Product_detail.html?id=${user[i].id}'><img id='image-btn' class='image-size' src="${user[i].image}"></a></td>`
      //  // tableList +="<td>"+user.ratings+"</td>"

      tableList =`<div class="container col-md-3">
        <a href='http://127.0.0.1:5500/Product_detail.html?id=${user[i].id}'>
        <div><img id='image-btn' class='image-size' src="${user[i].image}"></div>
        <h4 class="text">${user[i].title.length>17?`${user[i].title.substring(0,17)}`:user[i].title}</h4>
        <h4 class="font">$${user[i].price}</h4>  </a>
        </div>`
       // tableList +="<td>"+user.ratings+"</td>"

//console.log(user)
    
document.getElementById('box').innerHTML += tableList;
    }
  }
   




 
function getSelectValue(){
  //var selectedValue= document.getElementById('selection').value ;
  //console.log(selectedValue);
  
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


// // function viewImageDescription(){
// // alert("clicked")
 
// // }
// // document.getElementById('image-btn').addEventListener("click" , viewImageDescription)

document.getElementById('selection').addEventListener("change" , getSelectValue)


