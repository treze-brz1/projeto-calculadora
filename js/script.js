var nome = 'oliveira';
console.log(nome.length);
console.log(nome.slice(-1));

function calcular(tipo, valor){
    if(tipo === 'acao'){

        if(valor === 'c'){
            //Cleaning the display
            document.getElementById('resultado').value = '';
        }else if(
            valor === '/' ||
            valor === '*' ||
            valor === '-' ||
            valor === '+' ||
            valor === '.'
        ){
            document.getElementById('resultado').value += valor;
        }
        if(valor === '='){
            let resultado_operacao = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = resultado_operacao;
        }
        
    }else if(tipo === 'valor'){
        document.getElementById('resultado').value += valor;
    }
}