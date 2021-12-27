function inputForm(){
    var username= document.getElementById('name').value;
    var password=document.getElementById('password').value;
    
    return {
        username , password 
    }

   
}
function registerForm(){
    var name=document.getElementById('fname').value;
    var pass=document.getElementById('pw').value;
    var email=document.getElementById('email').value;
    return{
        name , pass , email
    }
}

    

    function validateLogin(event){
    event.preventDefault();
    let {username , password}= inputForm();

     if (username=="") {
        
        console.log("enter")
        document.getElementById('error1').innerHTML="**Enter username**"
    }

     if (password=="") {
       
       document.getElementById('error2').innerHTML="**Enter Password**"
    }

    if (username=='aricalotIntern' && password=='TEST@123') {
        window.location.href="/My_Product_list.html"
          username="";
          password="";
          document.getElementById('error1').innerHTML=""
          document.getElementById('error2').innerHTML=""
}
 else if (username!=="" && username!=='aricalotIntern') {
    username=""
    document.getElementById('error1').innerHTML="Incorrect Username"
}

 else if (password!=="" && password!=='TEST@123') {
    password=""
    document.getElementById('error2').innerHTML="Incorrect Password"
}}






function validateRegister(event){
    event.preventDefault();
    let {name , pass, email}= registerForm();
    
    if (email=="") {
        
        document.getElementById('error').innerHTML="**Enter email**"
    } 
    if (email!=="") {
        
        document.getElementById('error').innerHTML=""
    function checkEmail() {
        var validationEmail = /\S+@\S+\.\S+/;
        if (email.match(validationEmail)) {
            return true
        } else {
          document.getElementById("error_email").innerHTML = "**Email is incorrect**";
          return false
        }
      }
    }
     
    function checkUsername(){
     if (name=="") {
        
        document.getElementById('error3').innerHTML="**Enter username**"
    }
    else {
        return true
    }
}

     if (pass=="") {
      
       document.getElementById('error4').innerHTML="**Enter Password**"
    }
    if (pass!=="") {
        document.getElementById('error4').innerHTML=""
   
    function checkPassword() {
        var validationCharacters =
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if (pass.match(validationCharacters)) {
            return true
        } else {
          document.getElementById(
            "error_password"
          ).innerHTML = "**Password must contain  one number,one lower case, one upper case,one special and at least 8 characters.**"
        }
      }
    }
      //checkPassword();

      var inputUsername= checkUsername();
      var inputPassword= checkPassword();
      var inputEmail = checkEmail();

      if (inputUsername && inputPassword && inputEmail) {
        window.location.href="/Login_Page.html"
        name="";
        pass="";
        email="";
        document.getElementById('error').innerHTML=""
        document.getElementById('error3').innerHTML=""
        document.getElementById('error4').innerHTML=""

      }
      
    
}

function passwordVisibility(){
    
    var password=document.getElementById('password')
    var pass=document.getElementById('pw')
    if (password) {
        if (password.type=="password" ) {
            password.type="text";
            this.classList.add("fa-eye");
            this.classList.remove("fa-eye-slash")
        } else {
           password.type="password"
           this.classList.remove("fa-eye");
            this.classList.add("fa-eye-slash")
        }
    }
    

    if (pass) {
        if (pass.type=="password" ) {
            pass.type="text";
            this.classList.add("fa-eye");
            this.classList.remove("fa-eye-slash")
        } else {
           pass.type="password"
           this.classList.remove("fa-eye");
           this.classList.add("fa-eye-slash")
        }
    }
   
}



if (document.getElementById('login_btn')) {
document.getElementById('login_btn').addEventListener("click" , validateLogin);
}

if (document.getElementById('submit_btn')) {
    document.getElementById('submit_btn').addEventListener("click" , validateRegister);
}
if (document.getElementById('eye')) {
    document.getElementById('eye').addEventListener("click" , passwordVisibility)
}



