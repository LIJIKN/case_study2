function ajax(){
    //Creating an XHR Object
var xhttp = new XMLHttpRequest();
//Eventlistener
xhttp.onreadystatechange = function()
{
    //condition
    if( this.readyState==4&&this.status==200)
    {
        var response = JSON.parse(this.responseText);
        
        var output ="";
        
        for (var i=0;i<response.length;i++)
        if(response[i].completed==true)
        {
            output += "<input type=checkbox checked disable>" + "  "+response[i].title + "</input>" +"<br>";
        }
                        
          else 
          { 
               output += "<input type=checkbox id=check >" + "   "+  response[i].title +"</input >" +"<br>";
          }
        document.getElementById("demo").innerHTML= output;
    }
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
}