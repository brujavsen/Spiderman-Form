const showPassword = document.getElementById('show-pass');
const inputUser = document.getElementById('login-user');
const inputPass = document.getElementById('login-pass');
const btnForm = document.getElementById('btn-form');
const form = document.getElementById('login-form');

//Change the color of body
function colorChange() {
    var bodyPage = document.body;
    bodyPage.style.backgroundColor = bodyPage.style.backgroundColor == "black" ? "crimson" : "black"; 
}

//Toggle button text
function btnChange(){
    const value = btnForm.getAttribute('value') == "Let's go" ? "Are you ready?" : "Let's go";
    btnForm.setAttribute("value", value);
}

//timer
var tmp = setInterval(()=>{
    colorChange();
    btnChange();
},2000);

console.log(inputUser.length);
form.addEventListener('submit', (e)=>{

    var existErr = false;
    if(inputUser.value == "" || inputPass.value == ""){
        alert("Please, fill in the empty boxes.\n Or Dracula will come for you")
        existErr = true;
    }

    if(existErr){
        e.preventDefault();
    }
})