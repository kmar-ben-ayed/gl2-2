let color=document.querySelector('#color');
let size=document.querySelector('#number');
let font=document.querySelector('#select');
let text=document.querySelector('#test');

color.addEventListener('input',function(){
    text.style.color=color.value;
});
size.addEventListener('input',function(){
    text.style.fontSize=size.value+'px';
});
font.addEventListener('input',function(){
    text.style.fontFamily=font.value;
});