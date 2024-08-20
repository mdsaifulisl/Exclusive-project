
//document.addEventListener('DOMContentLoaded', () => {

   
    
    
   

    document.addEventListener('DOMContentLoaded', () => {
        let card = JSON.parse(localStorage.getItem('card')) || [];
        
        localStorage.removeItem('card');

        console.log(card);
        const cartItemsContainer = document.querySelector('#cart-itemss');

        card.forEach(allitems => {
            const crestelemant = document.createElement('div');
            crestelemant.classList.add('elemants');
            crestelemant.setAttribute('data-id', allitems.id);


            const img = document.createElement('img');
            img.src = allitems.image;
            
            const title = document.createElement('h4');
            title.innerHTML = allitems.title;

            const input = document.createElement('input');
            input.type = "number";
            input.value = '1';
        
            const amount = document.createElement('h5');
            amount.innerHTML = `Totle : ${ allitems.amount} `;


            const button = document.createElement('button');
            button.classList.add('remove-item', 'fa-solid', 'fa-xmark');
            //button.innerHTML = 'remove';



            crestelemant.appendChild(img);
            crestelemant.appendChild(title);
            crestelemant.appendChild(input);
            crestelemant.appendChild(amount);
            crestelemant.appendChild(button);


            input.addEventListener('input', () => {
                const inputValue = parseFloat(input.value);
                const total = inputValue * allitems.amount;
                amount.innerText = `Total: ${total.toFixed(2)}`;
            });

            button.addEventListener('click', () => {
                crestelemant.remove();
            });

            cartItemsContainer.appendChild(crestelemant);
            
            
        });

    });   
       
        



   
  