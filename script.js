const inicioNav = document.getElementById("inicio_nav")
const formularioNav = document.getElementById("formulario_nav")
const clearButton = document.getElementById("clear_button")

inicioNav.addEventListener("click",()=>{document.getElementById("formulario_section").style="display:none";
                                         document.getElementById("inicio_section").style="display:flex"})


formularioNav.addEventListener("click",()=>{document.getElementById("inicio_section").style="display:none";
                                            document.getElementById("formulario_section").style="display:flex"})

clearButton.addEventListener("click",()=>{document.querySelectorAll("input").forEach(input =>input.value='')})

