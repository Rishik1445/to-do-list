var input =document.querySelector('input');
var btn =document.querySelector('button');
var addtxt=document.querySelector('.addtxt');
console.log(addtxt)

//var str =0;
btn.addEventListener('click',function(){
    let paragraph = document.createElement('p');
    paragraph.textContent=input.value;
    paragraph.classList.add('text-style')
    addtxt.appendChild(paragraph);
    
    input.value='';
    paragraph.addEventListener('click',function(){
    paragraph.style.textDecoration="line-through";})
    paragraph.addEventListener('dblclick',function(){
    addtxt.removeChild(paragraph)
    
    })

    
})