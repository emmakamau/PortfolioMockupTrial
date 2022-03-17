/*code the contact us section */

function submitBtn(){
  let fname=document.getElementById("fname").value;
  let email1=document.getElementById("email1").value;
  let textarea1=document.getElementById("exampleFormControlTextarea1").value;

  if(fname !="" && email1!="" && textarea1 !=""){

    alert("Email submitted. Thank you for Reaching out to us.")

  }
  else{
    alert("Fill all the empty fields");
  }
}