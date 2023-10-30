function pages(){
let search = document.getElementById("search")
var val = document.querySelector('input').value;
const fval = val.toUpperCase();
  if(fval=='KAMAL' || fval=='KAMAL NAYAN'){
   window.location.assign("kamal.html")
  }
  else if(fval=='ABHISHEK RAI' || fval=='ABHISHEK')
  {
    window.alert("Not found");
    // window.location.assign("kamal.html")
  }
  else if(fval=='AAKARSH' || fval=='AAKARSH KUMAR')
  {
    window.alert("Not found");
    // window.location.assign("kamal.html")
  }
  else if(fval=='ANKIT')
  {
    window.alert("Not found");
    // window.location.assign("kamal.html")
  }
  else if(fval=='GURJANT')
  {
    window.alert("Not found");
    // window.location.assign("kamal.html")
  }
  else if(fval=='ROHIT')
  {
    window.alert("Not found");
    // window.location.assign("kamal.html")
  }
}
// function login(){
//   window.alert("Will be added soon")
// }