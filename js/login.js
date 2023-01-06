function validateform(){
    var un="johnbrownoliver@gmail.com";
    var temppassword="rules";

    var username= document.login.username.value;
    var password= document.login.password.value;
if(username!=un){
    alert("invalid username");
    return false;
}
else if(password != temppassword){
    alert("invalid password");
    return false;

}
console.log("login")
    
};
