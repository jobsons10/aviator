

const start = function(){
    const divTrail = document.querySelector('.trail');
    const divPrize = document.querySelector('#prize');
    const divPreload = document.querySelector('#preload');
    const num = document.getElementById('num');
    const divLoading = document.querySelector('.loading');
    const button = document.querySelector('#button');
    const blur = document.querySelector('#blur');


    divTrail.classList.remove('hide-me');
    divPrize.classList.remove('hide-me');
    divPreload.classList.add('hide-me');
    divLoading.classList.remove('hide-me');
    button.classList.add('hide-me');
    
    var n = 1;
    window.setInterval(function(){
        if(n < 601){
        num.innerHTML = n;
        n++;
        }
    }, 23);

    window.setTimeout(function(){
        form.classList.remove('hide-me');
    }, 15000);
}