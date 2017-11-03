// show login form
function displayContainer(){
    var menu = document.querySelector(".container");
    var icon = document.getElementById('icon2');

    if(icon.classList.contains("active")){
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }

}

// add active class
document.querySelector('.center').addEventListener('click', function(e){ 
    e.preventDefault();
    var elems = document.querySelector(".active");
    if(elems !==null){
     elems.classList.remove("active");
    }

    if(e.target.tagName.toLowerCase() == 'a'){
        e.target.className += " active";
    } else {
        e.target.parentNode.className += " active";
    }

    displayContainer();
    
});
 
// check label function
function setFocusClass (input, isSet = false) {
    
    if(input && input.value &&  input.value !='')
         isSet = true;
    
    if(isSet) {
        input.parentNode.classList.add('input-focused');
    } else {
        input.parentNode.classList.remove('input-focused');
    }
    
    
    //console.log([input.id, isSet, input.value]);
}
    
/*for password field*/
var input_password = document.getElementById("password");
var input_email = document.getElementById("email");
    
setFocusClass(input_password);
    
input_password.addEventListener("change", function () {
    setFocusClass(input_password);
    setFocusClass(input_email);
}, true);
    
input_password.addEventListener("focus", function () {
    setFocusClass(input_password, true);
}, true);
    
input_password.addEventListener("blur", function() {
    setFocusClass(input_password);
}, true);
    
/*for email field*/
    setFocusClass(input_email);
    
input_email.addEventListener("change", function () {
setFocusClass(input_email);
}, true);
    
input_email.addEventListener("focus", function () {
    setFocusClass(input_email, true);
}, true);
    
input_email.addEventListener("blur", function() {
setFocusClass(input_email);
}, true);
    


// email validation example to pass regex: zygimantas@zkairys.com
function emailValidation(){
    
    var email = document.getElementById('email');
    var errorEmail = document.querySelector(".invalid-crediantials-error");
    if(email.value === '' || ( !email.value.match('^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$') )) {
        errorEmail.style.display = "block";
        email.classList.add("erorr");
        return true;
    } else {
        errorEmail.style.display = "none";
        email.classList.remove("erorr");
        return false;
    }   
};

// password validation exapmpel to pass regex: Zygimantas10$
function passwordValidation(){
    
    var password = document.getElementById('password');
    var errorpassword = document.querySelector(".invalid-crediantials-error");
    if(password.value === '' || ( !password.value.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})') )) {
        errorpassword.style.display = "block";
        password.classList.add("erorr");
        return true;
    } else {
        errorpassword.style.display = "none";
        password.classList.remove("erorr");
        return false;
        
    }   
};



// run function on login click
document.getElementById('submit').addEventListener('click', function(e){
    e.preventDefault();
    emailValidation();
    passwordValidation();
    showSpinner();

});


// check if validations passed
function showSpinner(){
    var form = document.getElementById("form");
    var spiner = document.querySelector(".spiner");
    if(emailValidation() || passwordValidation() ){
        console.log('zk');
        form.style.display = "block";
    } else {
        console.log('zk2');
        form.style.display = "none";
        spiner.style.display = "block";
        
        
    }

}