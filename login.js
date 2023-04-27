let userInput = document.getElementById("txtInput");

function userInfo(){
    
    if(userInput.value === ""){
        alert("Please fill up your name first");
    }
    else{
        window.location.href = "userPass.html";
    }
}
