// const checkBox = document.querySelector('#checkbox');
// checkBox.addEventListener("change", function(){
//     var password = document.querySelector('#password');

//     if (this.checked){
//         password.type = "text";
//     }else {
//         password.type = "password";
//     }

// });

const hrs = document.querySelector('.a');
const min = document.querySelector('.b');
const sec = document.querySelector('.c');



setInterval( () => {
    const date = new Date();

    hrs.innerHTML = (date.getHours() < 10 ? "0" : "") + date.getHours();
    min.innerHTML = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    sec.innerHTML = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();
}, 1000);