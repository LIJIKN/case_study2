function ajax(){
//Creating an XHR Object
var xhttp = new XMLHttpRequest();
//Eventlistener
xhttp.onreadystatechange = function(){
    //condition
    if( this.readyStatus==4&&this.readystatus==200){
        document.getElementById("demo").innerHTML= this.responseText;
    }
}
xhttp.open("GET","ajax.text",true);
xhttp.send();
}