/* O IMC - Indice de Massa corporal é um critério da Organização Mundial da Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 
Formula do IMC:
IMC = peso / (altura + altura)
Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.
IMC em adultos. Condição:
- Abaixo de 18.5 abaixo do peso;
- Entre 18.5 e 25 peso normal;
- Entre 25 e 30 acima do peso;
- Entre 30 e 40 obeso;
- Acima de 40 obesidade grave; */

/* Nessa const baixei uma biblioteca de elevação "Math.pow" e coloquei a const que precisava ser elevada (altura, 2) a quantidade da elevação, nesse caso 2. "altura elevada a 2", para não precisar fazer "altura * altura". 
"Math." seria uma classe, por isso está com o M maiúsculo.
"Pow" seria um método estático.
Formando Math.pow no código.
*/

function calcularIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    if (peso > 0 && altura > 0) {
        var imc = peso / Math.pow(altura, 2);
        var resultado = '';

        if (imc <= 18.5) {
            resultado = 'Abaixo do peso!'
        } else if (imc > 18.5 && imc <= 24.9) {
            resultado = 'Peso saudável!'
        } else if (imc >= 24.9 && imc <= 29.9) {
            resultado = 'Sobrepeso.'
        } else if (imc >= 30 && imc <= 39.9) {
            resultado = 'Obeso cuidado!'
        } else {
            resultado = 'Muito obeso! OBS: Também conhecido como obeso mórbido'
        }

        document.getElementById('resultado').innerHTML = 'Seu IMC é: ' + imc.toFixed(2) + '<br>' + resultado
    } else {
        document.getElementById('resultado').innerHTML = 'Por favor, insira valores válidos para peso e altura.';
    }

}






