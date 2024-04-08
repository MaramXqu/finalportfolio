const backToTop =document.querySelector(".button-top");

window.addEventListener("scroll", scrollFunction);

function scrollFunction(){
    if (window.scrollY>200){
        backToTop.style.display="block";
    }
    else{
        backToTop.style.display="none";
    }


}

backToTop.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

