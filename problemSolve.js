
//If this "null" method is the problem then the problem is solved like this.

const voucherBtn = document.querySelector('#voucher-btn');
const voucher = document.querySelector('#voucher');

if(voucher != null){
    voucher.addEventListener('click', ()=>{
        voucherBtn.classList.toggle('active');
    });
};