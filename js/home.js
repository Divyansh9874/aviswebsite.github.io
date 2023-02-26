const navbar=document.querySelector('.navbar2');

window.addEventListener ('scroll',()=>{
    console.log(scrollY)
    if(scrollY>=100)
    {
        navbar.classList.add('bg');
    }
    else{
        navbar.classList.remove('bg');
    }
})