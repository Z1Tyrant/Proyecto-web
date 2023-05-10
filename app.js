const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const warning = document.getElementById("warning")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warning = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(nombre,value,lenght < 3){
         warning += "El nombre no es valido <br>"
         entrar = true
        }
    console.log(regexEmail.test(email.value))
    if(regexEmail.test(email.value)){
        warning += "El email no es valido <br>"
        entrar = true
       }
    if(pass.value.lenght < 8){
        warning += "El password no es valido"
        entrar = true
    }
    if (entrar){
        parrafo.innerHTML = warning
    }

           
})