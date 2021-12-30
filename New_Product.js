
var productId= window.location.search.split("=")[window.location.search.split("=").length-1]


function inputNewProductData(){
    
var newTitle= document.getElementById('title').value;
var newPrice= document.getElementById('price').value;
var newDescription = document.getElementById('description');
var newImage= document.getElementById('images').value;
var newCategory= document.getElementById('category').value;
return {
    newCategory , newDescription ,newImage ,newPrice ,newTitle 
}
 
}
function processingTime(loading , module=""){
    console.log(loading)
    if (loading) {
        console.log("first")
        document.getElementById('title').setAttribute("disabled" , true)
        document.getElementById('price').setAttribute("disabled" , true)
        document.getElementById('description').setAttribute("disabled" , true)
        document.getElementById('images').setAttribute("disabled" , true)
        document.getElementById('category').setAttribute("disabled" , true);
        document.getElementById('btn').innerHTML="Processing .....";
        document.getElementById('btn').style.color="white"
    }
    else {
        console.log("second")
      document.getElementById('title').removeAttribute("disabled" )
      document.getElementById('price').removeAttribute("disabled" )
      document.getElementById('description').removeAttribute("disabled")
      document.getElementById('images').removeAttribute("disabled" )
      document.getElementById('category').removeAttribute("disabled" );
      document.getElementById('btn').innerHTML=`${module} Product`
    }
}

function updateProduct()
 {  processingTime(true);
    axios.get(`https://fakestoreapi.com/products/${productId}`)
    .then(response =>  {
        if (response.status === 200) {
        editSelectedDataList(response.data)
            processingTime(false , "Update")
        }
       
    })
}
if (productId){
    updateProduct(productId);
    console.log("hello")
}


 

function editSelectedDataList(user){
    console.log('objec' ,user)
    document.getElementById('heading-1').innerHTML="Update Product"
    document.getElementById('title').value=user.title;
    document.getElementById('price').value=user.price;
    document.getElementById('description').value=user.description;
    document.getElementById('images').value=user.image;
    document.getElementById('category').value=user.category;
    document.getElementById('btn').innerHTML="Update Product";
    //document.getElementById('show').style.display="block"
   // document.getElementById('btn').addEventListener("click" , handleButtonClick)
}

if (productId) {
    document.getElementById('btn').addEventListener("click" , updateEditedData)
}
else {
    document.getElementById('btn').addEventListener("click" , validateInputProductData)

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
    document.getElementById('btn').innerHTML="Adding...."
    document.getElementById('btn').style.color="white"
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
    processingTime(false , "Add")
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

function updateEditedData (event){
    console.log("test")
    event.preventDefault();
    processingTime(true);
    let { newTitle , newPrice , newImage , newCategory , newDescription}= inputNewProductData();
    console.log(newTitle)
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

    processingTime(false,'Update');
           
            handlePopUpClose();
            console.log(response.data)
           }
     })
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
    document.getElementById('btn').innerHTML="Update Product"
    document.getElementById('btn').style.color="white"
}
   
}


 function handlePopUpClose() {
    document.getElementById('button-click').addEventListener("click" ,function(e){
        e.preventDefault()
        window.location.href="/My_Product_List.html"
        document.getElementById('show').style.display="none"
    })
 }

 



