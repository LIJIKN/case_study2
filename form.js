

const form = document.getElementById("forms");

function validate(callback)

{
    var username=document.getElementById("username");
    var password=document.getElementById("password");
    // var error=document.getElementById("error");
if(username.value.trim()==""){
  error.innerHTML="User name can not be empty";
  return false;
}
   else if( password.value.trim()==""){
     error.innerHTML="Password cannot be empty";
     return false;
   }
  
  callback(validate)
  }
  function login(validate)
  {
    if(username.value!=="admin" || password.value!=="12345")

    {
      error.innerHTML="Incorrect User name or Password";
      error.style.color="red";
      return false;
    
         
     }
     else{
       return validate(login);
     }
    }
            form.addEventListener("submit", function(event)
             {
              if(!validate(login)){
                event.preventDefault();
              }
              
            });


          
      
      
            
      
    