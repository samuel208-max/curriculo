// Animação do texto "Sobre mim"
let Sobremim_h3 = document.querySelector('#sobre-mim h3')
let textoSobremim = Sobremim_h3.textContent;
Sobremim_h3.textContent = ""; // Limpa o texto antes de animar

textoSobremim.split('').forEach((item, index) => {
    setTimeout(() => {
        Sobremim_h3.textContent += item
    }, 100 * index); // 50ms por letra
})

let Sobremim_p = document.querySelector('#sobre-mim p');
let textoOriginal = Sobremim_p.textContent;
Sobremim_p.textContent = ""; // Limpa o texto antes de animar

textoOriginal.split('').forEach((item, index) => {
    setTimeout(() => {
        Sobremim_p.textContent += item;
    }, 30 * index); // 50ms por letra
});


window.addEventListener('DOMContentLoaded', () => {
    const cabecalhoperfil = document.querySelectorAll('#cabecalho #cabecalho-perfil');
    cabecalhoperfil.forEach((item, i) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-100px)';

        setTimeout(() => {
            item.style.transition = 'opacity 1s ease, transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 300); // atraso entre cada item   
        })
    })

window.addEventListener('DOMContentLoaded', () => {
    const cabecalhocontato = document.querySelectorAll('#cabecalho #cabecalho-contato');
    cabecalhocontato.forEach((item, i) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(100px)';

        setTimeout(() => {
            item.style.transition = 'opacity 1s ease, transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 500)
    })
})



window.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('#boxes #box1 .box');
    boxes.forEach((box, i) => {
        box.style.opacity = '0';
        box.style.transform = 'translateX(-100px)';

        setTimeout(() => {
            box.style.transition = 'opacity 1s ease, transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)';
            box.style.opacity = '1';
            box.style.transform = 'translateY(0)';
        }, 300 * i); // atraso entre cada box
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('#boxes #box2 .box');
    boxes.forEach((box, i) => {
        box.style.opacity = '0';
        box.style.transform = 'translateX(200px)';
        setTimeout(() => {
            box.style.transition = 'opacity 1s ease, transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)';
            box.style.opacity = '1';
            box.style.transform = 'translateY(0)';
        }, 300 * i); // atraso entre cada box
    });
})