let userName = document.getElementsByClassName("user")[0];
let pass = document.getElementsByClassName("password")[0];
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
  if(userName.value === "Admin" && pass.value === "TheMaster"){
    alert("Welcome!");
    }else if (pass.value === "" || pass.value === null || pass.keycode == "27"){
      alert("Canceled " + " Wrong password")
    }else if(userName.value === '' || userName.value === null) {
      alert( 'Canceled' );
    } else {
      alert("I don't know you");
    };    
});
