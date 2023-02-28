var btn = document.createElement("button")
btn.innerText = "click"

btn.addEventListener("click to password", function () {
fetch(
    "https://s3-eu-west-1.amazonaws.com/dev.appdrag.com/promises-password-177813/password.json"
    
    )
.then((result) => {
if(result.ok){
    return result.text();
}
throw new error (result.status);
})
.then((data) => {
    console.log(data);

})
.catch((err) =>{
    console.log("i fell in the catch !!")
    console.log(err);
});
});

document.getElementById("main").append(btn);



function r(){
    return Math.random()* 2000 + 500;
}
function password(){
    var code  = prompt("Enter youre password: ");
    var obj = {};
    obj.status = 200;
    obj.code = "getProducts123";
    password(obj)
    .then(products)
    .then((response) => {
    alert("This is the code: " + response.code);
    })
    .catch((err) => {
        var message = `the error code is: ${err.status}. The reason is ${err.error}`;
        alert(message);
    })
    .finally(()=>{
        alert("you did a good job, here is ice cream")
    })
}

function products (response){
    return new Promise((resolve, reject)=>{
        console.log("calling the pass ...")
        setTimeout(()=>{
            var obj = {};
            if(response.status == 200) {
                if(response.code == getProducts123){
                    obj.status = 200;
                    obj.code = MyProducts;
                    resolve(obj);
                }else{
                    obj.error = "Wrong password !!";
                    obj.status = 401;
                    reject(obj);
                }
            }else{
                obj.error = "Error in password";
                obj.status = 400;
                reject(obj);
            }r();
        })
    })
}