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
        tableList +="<tr>";
        tableList +="<td>"+user[i].id+"</td>"
        tableList +="<td>"+user[i].title+"</td>"
        tableList +="<td>"+user[i].price+"</td>"
        tableList +="<td>"+user[i].description+"</td>"
        tableList +="<td>"+user[i].category+"</td>"
        tableList +="<td><img class='image-size' src="+user[i].image+"></td>"
       // tableList +="<td>"+user.ratings+"</td>"

//console.log(user)
    
document.getElementById('tablebody').innerHTML = tableList;
    }
  }
   




 
function getSelectValue(){
  //var selectedValue= document.getElementById('selection').value ;
  //console.log(selectedValue);
  
  if (this.value=="jewelery") {
    document.getElementById('tablebody').innerHTML =""
    axios.get('https://fakestoreapi.com/products/category/jewelery')
    .then((response)=>{
      displayProductList(response.data)
    })
  }

  if (this.value=="mensclothing") {
    document.getElementById('tablebody').innerHTML =""
    axios.get("https://fakestoreapi.com/products/category/men's clothing")
    .then((response)=>{
      displayProductList(response.data)
    })
  }

  if (this.value=="electronics") {
    document.getElementById('tablebody').innerHTML =""
    axios.get("https://fakestoreapi.com/products/category/electronics")
    .then((response)=>{
      displayProductList(response.data)
    })
  }

  if (this.value=="womensclothing") {
    document.getElementById('tablebody').innerHTML =""
    axios.get("https://fakestoreapi.com/products/category/women's clothing")
    .then((response)=>{
      displayProductList(response.data)
    })
  }
}


document.getElementById('selection').addEventListener("change" , getSelectValue)
// document.getElementById("search-btn").addEventListener("click" , searchProductList)
// function checkProductListExistOrNot (searchList){
//   let searchResult=productList.filter(function(user){
//     return (
//       user.id===searchList ||
//       user.title===searchList ||
//       user.price=== searchList||
//       user.description=== searchList ||
//       user.category=== searchList
//     )
//   })
//   return searchResult;
// }

// function searchProductList(){
//   const searchBar= document.getElementById("mySearch").value;
//   const searchList= searchBar.toLowerCase();
//   let searchResult =checkProductListExistOrNot(searchList);
//   if (searchResult.length > 0) {
//     document.getElementById('tablebody').innerHTML = "";
//     displayProductList(searchList)
//   } else {
//     alert("No data found");
//   }
// }

