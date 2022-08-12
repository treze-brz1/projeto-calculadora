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
            validator1(valor);
        }
        if(valor === '='){
            let resultado_operacao = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = resultado_operacao;
        }
        
    }else if(tipo === 'valor'){
        document.getElementById('resultado').value += valor;
    }
}

function validator1(value_character){
    last_character = document.getElementById('resultado').value.slice(-1);
    console.log(last_character);
    if(
        last_character === '/' ||
        last_character === '*' ||
        last_character === '+' ||
        last_character === '-'
    ){
        return;
    }else{
        document.getElementById('resultado').value += value_character;
    }
}
