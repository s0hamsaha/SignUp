const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('emailid');
const password = document.getElementById('password');
const password1 = document.getElementById('password1');
const modal_container = document.getElementById('modal_container');
const open = document.getElementById('open');
const close = document.getElementById('close');
const contain = document.getElementById('container');
let c = 0;
open.addEventListener('click',(e) => {
   
    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
    const password1val = password1.value.trim();
    if(usernameval === '')
    {
        setErrorFor(username, 'Username cannot be blank');
    }
    else{
        c++;
        setSuccessFor(username);
    }
    if(emailval === '')
    {
       
        setErrorFor(email, 'Email id cannot be blank');
    }
    else if(!validemail(emailval)){
        
        setErrorFor(email, 'Email id is not valid');
    }
    else{
        c++;
        setSuccessFor(email);
    }
    if(passwordval === '')
    {
       
        setErrorFor(password, 'Password cannot be blank');
    }
    else if(!validPassword(passwordval)){
        
        setErrorFor(password, 'Must be of 6-20 characters & contain atleast one numeric digit, one uppercase and one lowercase letter');
    }
    else{
        c++;
        setSuccessFor(password);
    }
    if(password1val !== passwordval)
    {
        
        setErrorFor(password1, 'Passwords donot match');
    }
    else if(password1val === '')
    {
        
        setErrorFor(password1, 'Password cannot be blank');
    }
    else{
        c++;
        setSuccessFor(password1);
    }
    if(c === 4)
    {
        e.preventDefault();
        var form_data={
            username: username.value,
            emailid: email.value,
            password: password.value
        }
        console.log(form_data);
        contain.className='container is_blurred';
        modal_container.classList.add('show');
        c=0;
    }
    else{
        e.preventDefault();
        c = 0;
    }
});
close.addEventListener('click',() =>
        {
        modal_container.classList.remove('show');
        contain.className='container';
        resetForm();
});
function resetForm(){
  form.reset();
  const user = document.getElementById('user');
  const em = document.getElementById('email');
  const pass = document.getElementById('pass');
  const pass1 = document.getElementById('pass1');
  user.classList.remove('success');
  em.classList.remove('success');
  pass.classList.remove('success');
  pass1.classList.remove('success');
}
 function setErrorFor(input, message){
     const formControl = input.parentElement;
     const small = formControl.querySelector('small');
     small.innerText = message;
     formControl.className = 'form-control error';
 }
 function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
 }
 function validemail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validPassword(password) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return re.test(password);
}