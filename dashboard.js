
let url= "https://fakestoreapi.com/products?limit=7"

axios.get(url)
.then(function(response){
    let json = response.data;
     //console.log(response)
     console.log(json)
    let tableList="";
    
    
    json.forEach((user) => {
      
        
        tableList +="<tr>";
        tableList +="<td>"+user.id+"</td>"
        tableList +="<td>"+user.title+"</td>"
        tableList +="<td>"+user.price+"</td>"
        tableList +="<td>"+user.description+"</td>"
        tableList +="<td>"+user.category+"</td>"
        tableList +="<td><img class='image-size' src="+user.image+"></td>"
       // tableList +="<td>"+user.ratings+"</td>"

console.log(user)
    
       
    })
    document.getElementById('tablebody').innerHTML = tableList;
})
.catch(function (error) {
  console.log(error);
})
.finally(function () {
  // always executed
});
