const btn = document.querySelector('button');
const scm = document.querySelector('#scm');
const paramout = document.querySelector('#paramout');
const noggin = document.querySelector('#noggin');
const rtd = document.querySelector('#roteador');
const igpm = document.querySelector('#igpm');
const p = document.querySelector('p');

let calc = () => {
    let percscm = (12/100) * scm.value;
    let attscm = Number(scm.value) - Number(percscm.toFixed(2));
    let percigpm = (Number(attscm) + Number(paramout.value) + Number(noggin.value) + Number(rtd.value)) * igpm.value/100;

    let total = (Number(attscm) + Number(paramout.value) + Number(noggin.value) + Number(rtd.value)) + percigpm;
    
    p.innerHTML = `Valor Atualizado: R$ ${total.toFixed(2)}.`;
};

(function() {
    let input = document.getElementsByTagName('input');

    for (i = 0; i < input.length; i++) {
        input[i].addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                calc();
            }
        })
    }
})();

calc();

btn.addEventListener('click', calc);