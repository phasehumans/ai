
const todoinput = document.getElementById('todo-input');        //select kara kispar action perform karna hai
const addbtn = document.getElementById('add-btn');
const todoItemsContainer = document.getElementById('todo-items-container');


addbtn.addEventListener('click', () => {        //event listener added and 2 para -- kab karna hai aur kya karna as fuction() / () =>
    const value= todoinput.value;
    console.log(`value return`, value)

    const li = document.createElement('li');         //.createELement ne ek list create kare
    li.innerText = value;       //<li>{value}</li> ---> par abhi li hawa meh hai

    const delBtn = document.createElement('button');        //btn create kara
    delBtn.innerText = "X";

    li.appendChild(delBtn);     //btn(child) --> li(parent)

    // delBtn event listner
    delBtn.addEventListener('click',() =>{
        li.remove();        //li ko remove kardo
    })
    
    todoItemsContainer.appendChild(li);      //li ko appendChild(as a child add karo) in container(parent)
    todoinput.value= '';        //input ke value ko empty kardo

    
        
    
});