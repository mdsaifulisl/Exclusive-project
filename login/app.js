





let signUpBtn = document.querySelector(".signupbtn");
let signInBtn = document.querySelector(".signinbtn");
let nameField = document.querySelector(".namefield");
let title = document.querySelector(".title");
let underLine = document.querySelector(".underline");
let text = document.querySelector('.text');

let texts = text.textContent;

 
signInBtn.addEventListener('click', ()=>{
    nameField.style.maxHeight = '0';
    title.innerHTML = 'Sign In';
    text.innerHTML = 'Lost Passwoed';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underLine.style.transform = 'translateX(35px)';
});

signUpBtn.addEventListener('click', ()=>{
    nameField.style.maxHeight = '60px';
    title.innerHTML = 'Sign Up';
    text.innerHTML = texts;
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underLine.style.transform = 'translateX(0px)';
});

 


