let form=document.getElementById("form");
let input=document.getElementById("emailinput");
let errortext=document.getElementById("redtext")
form.addEventListener("submit",function(event){
 event.preventDefault()
 if(!input.value.match(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/))
 {
    errortext.style.display="flex"
 }  
 if(input.value.match(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/))
 {
    errortext.style.display="none"
 }    
})
