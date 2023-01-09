const start = function(){
    const divTrail = document.querySelector('.trail');
    const divPrize = document.querySelector('#prize');
    const divPreload = document.querySelector('#preload');
    const num = document.getElementById('num');


    divTrail.classList.remove('hide-me');
    divPrize.classList.remove('hide-me');
    divPreload.classList.add('hide-me');
    
    var n = 1;
    window.setInterval(function(){
        if(n < 601){
        num.innerHTML = n;
        n++;
        }
    }, 23);

}