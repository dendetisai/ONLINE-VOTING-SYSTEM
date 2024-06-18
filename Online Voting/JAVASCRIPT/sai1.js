let submit=document.getElementById("submit")
console.log(submit);

submit.onclick=function(e) {
    e.preventDefault()
    
    let user =document.getElementById("user").value
    console.log(user);

    let password=document.getElementById("password").value
    console.log(password);

    let span=document.getElementsByTagName("span")
    console.log(span);
    
    let radio=document.getElementById("password").value
    console.log(radio);

    if(user === ""){
        span[0].style.display="block"
    }
    else if( password === ""){
        span[1].style.display="block"
    }

}