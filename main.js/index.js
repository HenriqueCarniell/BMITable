const botao = document.getElementById('botao');
botao.addEventListener('click', () => {
    const nome = document.getElementById('name').value;
    const peso = Number(document.getElementById('weight').value);
    const altura = Number(document.getElementById('height').value);
    const res = document.getElementById('res');
    Condicao(nome, peso, altura, res);
});
function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}
let Condicao = (nome, peso, altura, res) => {
    if (nome == '') {
        res.style.backgroundColor = "red";
        res.style.height = '30px';
        res.textContent = 'Digite um nome valido';
    }
    else if (peso == 0 || altura == 0) {
        res.style.backgroundColor = "red";
        res.style.height = '30px';
        res.textContent = 'Digite um peso ou altura validos';
    }
    else {
        res.style.backgroundColor = "green";
        res.style.height = '30px';
        res.textContent = `${nome} seu IMC é ${calcularIMC(peso, altura)} `;
    }
};
