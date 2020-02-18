var ul = document.getElementById('list')
var li; 




var addButton = document.getElementById('add')
addButton.addEventListener('click', addItem)

let  removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem)

let totallyRemove = document.getElementById('totalremove')
totallyRemove.addEventListener('click', removeEverything)


// let elements = document.createElement('p')
// let nodeP = document.createTextNode('enter your text here')
// elements.appendChild(nodeP)
// document.querySelector('#input').appendChild(elements)


function addItem (){
    var input = document.getElementById('input')
    var item = input.value
    ul = document.getElementById('list')
    var textNode = document.createTextNode(item)
    

    if(item === '') {
        return false
        // 
    } else {
         // declare li
          li = document.createElement('li')


         // declare input
        var checkbox = document.createElement('input')
         checkbox.type = 'checkbox';
         checkbox.setAttribute('id','check')

         // declare label
       var label = document.createElement('label') ;


        // now join them to form a complete element

       ul.appendChild(label);
       li.appendChild(checkbox);
       label.appendChild(textNode);
       li.appendChild(label) ;
       ul.insertBefore(li, ul.childNodes[0]);
       setTimeout(() => {
        li.className = 'visual';
       }, 2*100);

       input.value = '';

    }

}

function removeItem(){
     li = ul.children
     for (let index = 0; index< li.length; index++) {
         console.log(li[index])
        while (li[index] && li[index].children[0].checked) {
             ul.removeChild(li[index])
            
        }
     }
}


function removeEverything(){
    li = ul.children
    for ( let i=0 ;i<li.length;i++) {
        while (li[i] && li[i]) {
            ul.removeChild(li[i])
        }
    }
}