const header_top=document.getElementById('header_top')
window.addEventListener('scroll' , ()=>{
    let scrollTop=window.scrollY
    if(  scrollTop > 50 ){
        header_top.classList.add('active')
    }else{
        header_top.classList.remove('active')
    }
})