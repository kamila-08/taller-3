function calcularImc(){
    const nombre = document.getElementById("nombre").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById('altura').value);

    const IMC = peso / (altura * altura);

        if (IMC < 18.5) {
            categoria = "bajo peso";
        } else if (IMC >= 18.5 && IMC <= 24.9) {
            categoria = "peso normal";
        } else if (IMC >= 25 && IMC <= 29.9) {
            categoria = "sobrepeso";
        } else {
            categoria = "obesidad";
        }
    
    var res = "su IMC es " + IMC +" está en nivel " + categoria
    alert(res)

    
   
}