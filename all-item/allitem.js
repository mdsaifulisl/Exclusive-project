


document.querySelectorAll('.btns').forEach(button =>{
    button.addEventListener('click', (e) => {
        const itemsElement = e.target.closest('.boxs');
        const id = itemsElement.getAttribute('data-id');

        const image = itemsElement.querySelector('.item-img').src;
        const title = itemsElement.querySelector('.item-title').innerText;
        const amountTitle = itemsElement.querySelector('.amount').innerText;
        const amount = +amountTitle;

        const allitems = {
            id,
            image,
            title,
            amount
        }
        
        let card = JSON.parse(localStorage.getItem('card')) || [];



        const existingItemIndex = card.findIndex(card => card.id === id);
        if (existingItemIndex !== -1) {
            // Update the quantity of the existing item
            cartItems[existingItemIndex].amount += amount;
        } else {
            // Add the new item to the cart
            card.push(allitems);
        };

        
        
        localStorage.setItem('card', JSON.stringify(card));
       // window.location.href = '../card/carditem.html'
    });
}); 