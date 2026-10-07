const inicioNav = document.getElementById("inicio_nav")
const formularioNav = document.getElementById("formulario_nav")
const clearButton = document.getElementById("clear_button")
const form = document.querySelector("form")

inicioNav.addEventListener("click",()=>{document.getElementById("formulario_section").style="display:none";
                                         document.getElementById("inicio_section").style="display:flex"})


formularioNav.addEventListener("click",()=>{document.getElementById("inicio_section").style="display:none";
                                            document.getElementById("formulario_section").style="display:flex"})

clearButton.addEventListener("click",()=>{document.querySelectorAll("input").forEach(input =>input.value='')})

form.addEventListener("submit",(e)=>{
    const nameInput = document.getElementById("name_input")
    const ciInput = document.getElementById("ci_input")
    const passwordInput = document.getElementById("password_input")
    const passwordConfirmInput = document.getElementById("password_confirm_input")
    const ciError = document.getElementById("ci_error")
    const passwordError = document.getElementById("password_error")
    const errorName = document.getElementById("empty_field_name")
    const emptyPasswordError = document.getElementById("empty_field_password")
    const caracteresError = document.getElementById('caracteres_error');

    errorName.style.display = "none"
    ciError.style.display = "none"
    emptyPasswordError.style.display ="none"
    passwordError.style.display = "none"
    caracteresError.style.display = 'none'

    if(nameInput.value == ''){
        errorName.style.display = "block"
        e.preventDefault()
    }

    if(ciInput.value.length !== 11){
        ciError.style.display = "block"
        e.preventDefault()
    }
    
    if(isNaN(ciInput.value)){
        ciError.style.display = 'none'
        caracteresError.style.display = 'block'
        e.preventDefault()

    }
    


    if(passwordInput.value.length == 0){
        emptyPasswordError.style.display ="block"
        e.preventDefault()
    }
    if(passwordInput.value !== passwordConfirmInput.value){
        passwordError.style.display = "block"
        e.preventDefault()
        
    }

})



