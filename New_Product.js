function inputNewProductData(){
    
var newTitle= document.getElementById('title').value;
var newPrice= document.getElementById('price').value;
var newDescription = document.getElementById('description').value;
var newImage= document.getElementById('images').value;
var newCategory= document.getElementById('category').value;
return {
    newCategory , newDescription ,newImage ,newPrice ,newTitle 
}

}

function validateInputProductData (event){
    event.preventDefault();
    let { newTitle , newPrice , newImage , newCategory , newDescription}= inputNewProductData();

if (newTitle=="") {
    document.getElementById('title-err').innerHTML="Enter Title"
}
if (newPrice=="") {
    document.getElementById('price-err').innerHTML="Enter Price"
}

if (newImage=="") {
    document.getElementById('img-err').innerHTML="Upload Image"
}

if (newCategory=="") {
    document.getElementById('cate-err').innerHTML="Choose Category"
}

if (newDescription=="") {
    document.getElementById('des-err').innerHTML="Write about product"
}
 if (newTitle!=="" && newImage!=="" && newCategory!=="" && newDescription!=="" &&newPrice!=="") {
    document.getElementById('show').style.visibility="visible"
axios.post('https://fakestoreapi.com/products' ,
{
    title:`${newTitle}` ,
    price:`${newPrice}` ,
    image: `${newImage}` ,
    description:`${newDescription}` ,
    category: `${newCategory}`
})
.then(response =>  {
   if (response.status === 200) {
      
   }
   else {
       
   }
}).catch(err => {
   console.log(err)
});
 }
}

var element = document.getElementById('btn')
 if (document.getElementById('btn')) {
    document.getElementById('btn').addEventListener("click" , validateInputProductData)
 }





