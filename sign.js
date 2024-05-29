let email = 'pelmen@mail.ru'; 
let password = 'pelmen'; 
 
function validate(){ 
    let emailcheck = document.getElementById("email"); 
    let passwordcheck = document.getElementById("password"); 
    let link = document.getElementById("link"); 
    if( emailcheck.value == email && passwordcheck.value == password){ 
        window.open('index.html');
    }
    else{ 
        alert("У вас пароль и почта не верны, ввидите занова (ツ)") 
    } 
}