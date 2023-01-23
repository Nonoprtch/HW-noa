var appDiv = document.getElementById("main");
const user = {userFirstName :"noa", userName: "partouche", pass:"Noa.123456",};
init(); 
function init() {
    var loginSection = document.createElement("section");
    var userDiv = document.createElement("div");
    var userLabel = document.createElement("label");
    userLabel.innerText = "Enter your full name";
    var userInput = document.createElement("input");
    userLabel.append(userInput);
    userDiv.append(userLabel);
    loginSection.append(userDiv);

    userInput.addEventListener("input", checkUser)

    function checkUser() {
        if(userInput.value.includes(" ")){
            passDiv.style.display = "block";
        }else{
            passDiv.style.display = "none";
        }
    }
    var passDiv = document.createElement("div");
    var passLabel = document.createElement("label");
    passLabel.innerText = "Enter your password";
    var passInput = document.createElement("input");
    passLabel.append(passInput);
    passDiv.append(passLabel);
    loginSection.append(passDiv);
    passDiv.style.display = "none"

var btnDiv = document.createElement("div");
var btn = document.createElement("button");
btn.innerText = "Login Please";
btnDiv.append(btn);
loginSection.append(btnDiv);
btnDiv.style.display = "none";
appDiv.append(loginSection);

passInput.addEventListener("input", checkPass);
function checkPass() {
    if(passInput.value.includes(".") && passInput.value.length > 7){
        btnDiv.style.display = "block";
    }else{
        btnDiv.style.display = "none";
    }
    btn.addEventListener("click", login);
    }
    function login(){
        if(
            userInput.value.toLowerCase().replaceAll(" ", "") === user.userName && user.userFirstName && passInput.value === user.pass
        ){
            goToDashboard();
        }else{
            alert("Wrong credentials");
        }
    }
    function goToDashboard(){
        var section = document.createElement("section");
        var h1 = document.createElement("h1");
        h1.innerText = `Welcome, dear ${user.Name} ${user.userFirstName}`;
        section.append(h1);
        loginSection.remove();
        appDiv.append(section);
    }
}