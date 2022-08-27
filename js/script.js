const btnEl= document.getElementById("btn");

btnEl.addEventListener("mouseover", (e)=>{
    y = e.pageY - btnEl.offsetTop ;
    x = e.pageX - btnEl.offsetLeft;
    btnEl.style.setProperty("--xIndex", x + "px" );
    btnEl.style.setProperty("--yIndex", y + "px" );

})
