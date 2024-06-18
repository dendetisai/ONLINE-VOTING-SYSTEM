let submit=document.getElementById("submit")
console.log(submit);

submit.onclick=function(e) {
    e.preventDefault()
    
    let First name =document.getElementById("sure name").value
    console.log(user);

    let Last name=document.getElementById("first name").value
    console.log(password);

    let gender=document.getElementsByTagName("radio").value
    console.log(radio);

    let DOB=document.getElementsByTagName("DOB").value
    console.log(dob);

    let gender=document.getElementsByTagName("Radio operant value of the command").value
    console.log(radio);


    if(user === ""){
        span[0].style.display="block"
    }
    else if( password === ""){
        span[1].style.display="block"
    }

}