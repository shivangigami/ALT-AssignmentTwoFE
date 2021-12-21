function validateForm(){
    var username= document.getElementById('name').value;
    var password=document.getElementById('password').value;
    return {
        username , password
    }

   
}
document.getElementById('login_btn').addEventListener("click" , function(event){
    event.preventDefault();
    let {username , password}= validateForm();
    if (username && password) {
        console.log(username , password)
        if (username==='aricalotIntern' && password==='TEST@123') {

            alert("Entered Correctly");
            notValid = false;
}
         else
       { 
         alert("I'm sorry but the username and password you entered are incorrect, please try again.");
       }
        //     document.user_form.action = "Welcome.html";
        // }else
        // {
        //     alert("Username & password entered is not valid")
        // }
        //createNewUserInput(username , password)
    }
    else {
        alert("Field can't be empty")
    }
})

