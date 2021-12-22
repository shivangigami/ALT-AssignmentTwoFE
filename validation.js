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

    if (username=="" && password=="") {
        //alert("Enter something")
        document.getElementById('error1').innerHTML="**Enter username**"
        document.getElementById('error2').innerHTML="**Enter Password**"
    }

    else if (username=="") {
        //alert("Enter username")
        document.getElementById('error1').innerHTML="**Enter username**"
    }

    else if (password=="") {
       // alert("Enter password")
       document.getElementById('error2').innerHTML="**Enter Password**"
    }

    if (username==='aricalotIntern' && password==='TEST@123') {
        window.location.href="/Registration_page.html"
          
}
}





function validateRegister(event){
    event.preventDefault();
    let {name , pass, email}= registerForm();
    
    if (email=="") {
        //alert("Enter username")
        document.getElementById('error').innerHTML="**Enter email**"
    }
    function checkEmail() {
        var validationEmail = /\S+@\S+\.\S+/;
        if (email.match(validationEmail)) {
            return true
        } else {
          document.getElementById("error_email").innerHTML = "**Email is incorrect**";
        }
      }
      checkEmail();

     if (name=="") {
        //alert("Enter username")
        document.getElementById('error3').innerHTML="**Enter username**"
    }

     if (pass=="") {
       // alert("Enter password")
       document.getElementById('error4').innerHTML="**Enter Password**"
    }
    function checkPassword() {
        var validationCharacters =
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if (pass.match(validationCharacters)) {
        } else {
          document.getElementById(
            "error_password"
          ).innerHTML = "**Password must contain  one number,one lower case, one upper case,one special and at least 8 characters.**"
        }
      }
      checkPassword();
      return false;
    
}

function passwordVisibility(){
    // let {username ,password}= inputForm();
    // let {name , pass, email}= registerForm();
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



if (document.getElementById('login-btn')) {
document.getElementById('login_btn').addEventListener("click" , validateLogin);
}

if (document.getElementById('submit_btn')) {
    document.getElementById('submit_btn').addEventListener("click" , validateRegister);
}
if (document.getElementById('eye')) {
    document.getElementById('eye').addEventListener("click" , passwordVisibility)
}



