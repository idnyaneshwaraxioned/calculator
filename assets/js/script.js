
const screen = document.querySelector('.screen');
let btn = document.querySelectorAll('.btn');
const clr = document.querySelector('.clear');
const del = document.querySelector('.delete');
const equal = document.querySelector('.equal');

btn.forEach(val => { val.addEventListener('click',()=> screen.value += val.textContent); });

equal.addEventListener('click',()=>{ 
    try { screen.value = eval(screen.value); }
    catch (err){ screen.value = `${screen.value} is not math expression`; };
});

clr.addEventListener('click',()=> screen.value="");

del.addEventListener('click',()=> screen.value = screen.value.slice(0,-1));