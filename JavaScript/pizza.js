let numberofguest= 4;

let pizzasize;

if(numberofguest<=2){
    pizzasize= "Small"
}else if(numberofguest<=5){
    pizzasize= "Medium"
}else{
    pizzasize= "Large"
}

console.log(pizzasize);