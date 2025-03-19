// features to add : edit task, delete task, dynmically add boards, 
// remove board, drag sorting, tasks in local storage, time on evry task, count of tasks


const addtaskBtn = document.getElementById('addtask-btn')
const todoBoard = document.getElementById('todo')
addtaskBtn.addEventListener('click',()=> {
    const input= prompt("what is task")

    // input is value || null

    if (!input) return

    const taskCard= document.createElement('p')
    taskCard.classList.add('item')
    taskCard.setAttribute('draggable',true);
    taskCard.innerText= input

    taskCard.addEventListener('dragstart', () =>{
        items.classList.add('flying')
    })
    taskCard.addEventListener('dragend', () =>{
        items.classList.remove('flying')
    })

    todoBoard.appendChild(taskCard)
} )



// const allBoards= document.getElementsByClassName('board')
const allBoards= document.querySelectorAll('.board')
const allItems= document.querySelectorAll('.item')


// jab bhi card ude toh class flying add karo, aur ruke toh remove
allItems.forEach(items => {
    items.addEventListener('dragstart', () =>{
        items.classList.add('flying')
    })
    items.addEventListener('dragend', () =>{
        items.classList.remove('flying')
    })
})

allBoards.forEach(board => {

    board.addEventListener('dragover', () =>{

        // console.log("kuch to gaya mere upar se")
        const flyingElmt= document.querySelector('.flying')

        board.appendChild(flyingElmt)       // appendChild is changing ref (parent change)

    })
})