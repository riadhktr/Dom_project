let quantity=document.getElementsByClassName("quantity-num"); /* producuct quantity */
let totPrice=document.getElementsByClassName("product-price");  /* product price*/ 





/*Remove an article from list*/ 

let removecart = document.getElementsByClassName('trash-btn');
for (let i = 0; i < removecart.length; i++){
    let button = removecart[i];
    button.addEventListener('click', function (event) {
        let buttonclicked = event.target;
        buttonclicked.parentElement.parentElement.parentElement.parentElement.remove();
        totalPrice()
    })
   
};

/*add to favorite*/

let favcart = document.getElementsByClassName('like-btn');

for (let i = 0; i < favcart.length; i++){
    let favbtn = favcart[i];
    favbtn.addEventListener('click', function (event) {
       buttonclick = event.target;

        buttonclick.classList.toggle('is-active');
       
        
    })
  
};



/*counter decrement */

let minbtn = document.getElementsByClassName('decrement-btn');
for (let minus of minbtn) {
    minus.addEventListener('click', function () {
        if (minus.nextElementSibling.innerText > 0) {
    
            minus.nextElementSibling.innerText--;
        }
        totalPrice()
    })
  
}
var counter =0;
    /*conter increment */

let plusbtn = document.getElementsByClassName('increment-btn');


    for (let plus of plusbtn) {
    plus.addEventListener('click', function () {
        
    
        plus.previousElementSibling.innerText++;

        totalPrice()
     
    })
   
    }

    /* function of totale prices */
    function totalPrice(){
        
     
        let sum = 0;
        for(let i=0; i<totPrice.length; i++){
            sum += totPrice[i].innerText * quantity[i].innerText;
        
            document.getElementById("total-price").innerText = sum;
           
        }
        
    }

 





   



















  