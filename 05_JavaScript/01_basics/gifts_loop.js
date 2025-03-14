function gifts(total,friends){
    let giftsgiven = 0;
    for (let i=0; i<friends; i++){
        if (total>0){
            total --;
            giftsgiven ++ ;
        }
       
    }
    return giftsgiven

}
console.log(gifts(10,30))