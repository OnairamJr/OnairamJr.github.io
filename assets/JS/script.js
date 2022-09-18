const btn = document.querySelector('button');
const scm = document.querySelector('#scm');
const sva = document.querySelector('#sva');
const rtd = document.querySelector('#roteador');
const igpm = document.querySelector('#igpm');
const p = document.querySelector('p');

let calc = () => {
    let percscm = (12/100) * scm.value;
    let attscm = Number(scm.value) - Number(percscm.toFixed(2));
    let percigpm = (Number(attscm) + Number(sva.value) + Number(rtd.value)) * igpm.value/100;

    let total = (Number(attscm) + Number(sva.value) + Number(rtd.value)) + percigpm;
    
    p.innerHTML = `Valor Atualizado: R$ ${total.toFixed(2)}.`;
};

let keyEnter = (event) => {
    if (event.key === 'Enter') {
        calc();
    }
};

btn.addEventListener('click', calc);

igpm.addEventListener('keypress', keyEnter);