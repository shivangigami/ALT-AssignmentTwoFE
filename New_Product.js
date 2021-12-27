var productId= window.location.search.split("=")[window.location.search.split("=").length-1]


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

if (productId) {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
    .then(response =>  {
        editSelectedDataList(response.data)
        if (response.status === 200) {
           
        }
        else {
            
        }
    })
}
 

function editSelectedDataList(user){
    document.getElementById('heading-1').innerHTML="Update Product"
    document.getElementById('title').value=user.title;
    document.getElementById('price').value=user.price;
    document.getElementById('description').value=user.description;
    document.getElementById('images').value=user.image;
    document.getElementById('category').value=user.category;
    document.getElementById('btn').innerHTML="Update Product";
    //document.getElementById('show').style.display="block"
    document.getElementById('btn').addEventListener("click" , updateEditedData)
}

function updateEditedData (event){
event.preventDefault();
let { newTitle , newPrice , newImage , newCategory , newDescription}= inputNewProductData();
if (productId) {
    axios.put(`https://fakestoreapi.com/products/${productId}` ,
    {
        title:`${newTitle}` ,
        price:`${newPrice}` ,
        image: `${newImage}` ,
        description:`${newDescription}` ,
        category: `${newCategory}`
    })
 .then((response)=>{
    if (response.status === 200) {
        buttonClick();
        handlePopUpClose();
        console.log(response.data)
       }
 })
}
}

function validateInputProductData (event){
    event.preventDefault();
    let { newTitle , newPrice , newImage , newCategory , newDescription}= inputNewProductData();

if (newTitle=="") {
    document.getElementById('title-err').innerHTML="Enter Title"
}
else {
    document.getElementById('title-err').innerHTML=""
}
if (newPrice=="") {
    document.getElementById('price-err').innerHTML="Enter Price"
}
else {
    document.getElementById('price-err').innerHTML=""
}

if (newImage=="") {
    document.getElementById('img-err').innerHTML="Upload Image"
}
else {
    document.getElementById('img-err').innerHTML=""
}
if (newCategory=="") {
    document.getElementById('cate-err').innerHTML="Choose Category"
}
else {
    document.getElementById('cate-err').innerHTML=""
}

if (newDescription=="") {
    document.getElementById('des-err').innerHTML="Write about product"
}
 if (newTitle!=="" && newImage!=="" && newCategory!=="" && newDescription!=="" &&newPrice!=="") {
    
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
    buttonClick();
    handlePopUpClose();
    document.getElementById('show').style.display="block"
   }
   else {
       
   }
}).catch(err => {
   console.log(err)
});
 }
}

function buttonClick (){
    document.getElementById('title').value="";
    document.getElementById('price').value="";
    document.getElementById('description').value="";
    document.getElementById('images').value="";
    document.getElementById('category').value="";
if (productId) {
    document.getElementById('show').style.display="block";
    document.getElementById('edit-success-msg').innerHTML="Your product has been updated successfully !!!!!!!!"
}
   
}

var element = document.getElementById('btn')
 if (document.getElementById('btn')) {
    document.getElementById('btn').addEventListener("click" , validateInputProductData)
 }
 function handlePopUpClose() {
     console.log("hit")
    document.getElementById('button-click').addEventListener("click" ,function(e){
        e.preventDefault()
        window.location.href="/My_Product_List.html"
        document.getElementById('show').style.display="none"
    })
 }

 



