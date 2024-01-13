function calculoFactorial(){
    let num = document.getElementById('inputNumero').value;
    num = parseInt(num)
    let fact = 1
    for (let i = 1; i<=num; i++){
        fact *= i;
    }
    document.getElementById('resultado').innerHTML = `El factorial del número ${num} es ${fact}`
}