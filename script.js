

//header
const search = document.querySelector(".search-bar");
const bar = document.querySelector(".src");
const barRemove = document.querySelector("#search-bar-remove")
if(bar != null){
    bar.onclick = () =>{
        search.classList.toggle('active');
        nave.classList.remove('active');
        searchbox.value = v;
    }

}

const heading = document.querySelector('#heading')
const searchbox = document.querySelector('#searchbox');
let v = "";
        
if(barRemove != null){
    barRemove.onclick = () =>{
        search.classList.remove('active');
        searchbox.value = v;
    }
}


function searchItem() {
    const searchBox = document.querySelector("#searchbox").value.toUpperCase();
    const productList = document.querySelector("#row");
    const product = document.querySelectorAll("#col");
    const pname = document.getElementsByTagName("h5");
    for(var i = 0; i < pname.length; i++){
        let match = product[i].innerHTML.toUpperCase().indexOf(searchBox) >= 0;

        if(match){
            product[i].style.display = "";

        }else{
            product[i].style.display = "none";

        }
    }

}
let nave = document.querySelector(".nav");
document.querySelector('.mmn').onclick = () =>{
    nave.classList.toggle('active');
    search.classList.remove('active');

}

// down to up
const scrol = document.querySelector('.scrol');

// window scroll remove out line
window.onscroll = () =>{
    nave.classList.remove('active');
    search.classList.remove('active');
    searchbox.value = v;
    if(scrol != null){
        scrol.style.display = 'inline-block';
    }
     
}
// header end

//home
//If this "null" method is the problem then the problem is solved like this.
const voucherBtn = document.querySelector('#voucher-btn');
const voucher = document.querySelector('#voucher');

if(voucher != null){
    voucher.addEventListener('click', ()=>{
        voucherBtn.classList.toggle('active');
    });
};


// voucher
//slider snd slider rood map
const slides = document.querySelector('.sales-contant');
const images = document.querySelectorAll('.sales-contant .sales-item');

const prevBtn = document.querySelector('.left'); //btn
const nextBtn = document.querySelector('.right'); //btn

let currentIndex = 0;

function showSlide(index) {
    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = index;
    };

    if(slides != null){
         slides.style.transform = `translateX(${-currentIndex * 275}px)`;
    };
   
};

if(nextBtn != null){
    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });
};

if(prevBtn != null){
    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });
};

// Optional: Auto-slide every 1 seconds
setInterval(() => {
    showSlide(currentIndex + 1);
}, 2000);


const browse = document.querySelector('.browes-contantant');
const box = document.querySelectorAll('.browes-contantant .box');


let currentA = 0;
function browss(a){
    if (a >= box.length) {
        currentA = 0;
    }else if(a < 0){
        
        currentA = creatorBox.length - 1;
    }else{
        currentA = a;
    }

    if(browse != null){
        browse.style.transform = `translateX(${-currentA * 176}px)`;
    }

};

// Optional: Auto-slide every 2 seconds
setInterval(()=>{
    browss(currentA + 1)
}, 2000);



//about
const creator = document.querySelector('.creator-items');
const creatorBox = document.querySelectorAll('.creator-items .creator-box');

let about = 0;
function aboutSlides(b){
    if (b >= creatorBox.length) {
        about = 0;
    }else if(b < 0){
        about = creatorBox.length - 1;
    }else{
        about = b;
    }

    if(creator != null){
        creator.style.transform = `translateX(${-about * 377}px)`;
    };
    
}

const creatorLeft = document.querySelector('#creator-left');
const creatorRight = document.querySelector('#creator-right');
if(creatorLeft != null){
    creatorLeft.addEventListener('click', ()=>{
        aboutSlides(about + 1);
    });
};

if(creatorRight != null){
    creatorRight.addEventListener('click', ()=>{
        aboutSlides(about - 1);
    });
};

setInterval(()=>{
    aboutSlides(about + 1)
}, 5000);




