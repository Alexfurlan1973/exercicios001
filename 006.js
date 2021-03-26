// Tendo como dado à altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
//     1.	Para homens: (72.7*h) - 58
//     2.	Para mulheres: (62.1*h) - 44.7

function calculaPesoIdeal (sexo, altura){
let pesoIdeal = 0
let resposta = ''
    if (sexo === 'M'){
        pesoIdeal = (62.1 * altura) - 44.7;
        resposta = 'O peso ideal para esta mulher é: ' + Math.round(pesoIdeal) + 'kg.'
    }else if (sexo === 'H'){
        pesoIdeal = (72.7 * altura) - 58;
        resposta = 'O peso ideal para este homem é: ' + Math.round(pesoIdeal) + 'kg.'
    }else {
    	resposta = 'É obrigatório informar o gênero: M = mulher; H = homem.'
    }
return resposta
}