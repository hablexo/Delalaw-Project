const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e=>{
  e.preventDefault();
  checkinputs();
});

function checkinputs(){
 const usernamevalue = username.value.trim();
 const emailvalue = email.value.trim();
 const passwordvalue = password.value.trim();
 const password2value = password2.value.trim();

 if(usernamevalue === ''){
  errorocure(username, "user name can't be blank");
 }
 else{
  success(username);
 }
 if(emailvalue === ''){
  errorocure(email, 'email can not be blank');
 }
 else{
  success(email);
 }
 if(passwordvalue === ''){
  errorocure(passwordvalue, 'password cannot be nlank')
 }
 else{
  success(passwordvalue);
 }
}


function errorocure(input, message){
  const formcontrol = input.parentElement;
  const small = formcontrol.querySelector('small');
  small.innerText = message;
  formcontrol.className = 'info error'; 
}
function success(input){
  const formcontrol = input.parentElement;
  formcontrol.className = 'info success';
}