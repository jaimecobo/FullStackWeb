let myObj;
let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        myObj = JSON.parse(this.responseText);
        document.getElementById("name").innerHTML = myObj.name;
        document.getElementById("birthdate").innerHTML = myObj.birthdate;
    }
}
newRequest.open("GET", "einstein.json", true);
newRequest.send();


function bioButton(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            $("#iframe").attr("src", myObj.bio);
        }
    };
    xhttp.open("GET", "einstein.json", true);
    xhttp.send();
}
