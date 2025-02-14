var ellist = Array.from(document.getElementsByClassName("item"));
ellist.forEach(el => {
    el.addEventListener("click", function(){
        var colourrandom="rgb(";
        for(var i=0;i<2;i++){
            colourrandom+=Math.floor(Math.random()*256)+",";
        }
        colourrandom+=Math.floor(Math.random()*256)+")";
        el.style.color=colourrandom;
    });
});
