const item = document.querySelector('.item');
const cards = document.querySelectorAll('.card');
item.addEventListener('dragstart',DragStart);
item.addEventListener('dragend',DragEnd);
function DragStart(){
    item.classList.add('effect')
    setTimeout(()=>{
        item.classList.add('hide')
    }, 0)
}
function DragEnd(){
    item.classList.remove('effect')
    item.classList.remove('hide')
}
for(card of cards){
    card.addEventListener('dragenter',DragEnter)
    card.addEventListener('dragover',DragOver)
    card.addEventListener('dragleave',DragLeave)
    card.addEventListener('drop',Drop)
    
}
function DragEnter(event){
    event.target.classList.add('back')
}
function DragOver(event){
    setTimeout(()=>{
        event.target.classList.remove('back')
    },300)
    event.preventDefault()
}
function DragLeave(event){  
  
}
function Drop(event){
    event.target.append(item)
}