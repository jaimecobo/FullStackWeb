function regexChecker(){
    var regName = /^[A-Z][a-zA-Z]{1,10}$/;
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    
    if(firstName.match(regName) && lastName.match(regName)){
        alert("Yay! Your inputs were all correct!");
    }
    else{
        alert("Oh no! Thats an invalid format!");
    }
}


