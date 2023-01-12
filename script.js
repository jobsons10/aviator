

const start = function(){
    const divTrail = document.querySelector('.trail');
    const divPrize = document.querySelector('#prize');
    const divPreload = document.querySelector('#preload');
    const num = document.getElementById('num');
    const divLoading = document.querySelector('.loading');
    const button = document.querySelector('#button');
    const form = document.querySelector('#_form_14_');
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
        blur.classList.add('hide-me');
        const jsConfetti = new JSConfetti();
                jsConfetti.addConfetti({
                    emojis: ['💶', '🎁','💰','🎉', '💎'],
                })
                jsConfetti.addConfetti({
                    confettiColors: [
                        '#FFA200',
                        '#F42E03',
                        '#FFEC01',
                        '#ECE202',
                        '#16982B',
                        '#2001FF',
                        '#7CFF00'
                    ], 
                })
    }, 14310);
}