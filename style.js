document.getElementById('valueB').addEventListener('input', function() {
    var valueA = parseFloat(document.getElementById('valueA').value);
    var valueB = parseFloat(this.value);
    var resultDiv = document.getElementById('result');
    
    if (!isNaN(valueA) && !isNaN(valueB)) {
        if (valueB > valueA) {
            resultDiv.textContent = "Valor B é maior que Valor A";
            resultDiv.style.color = "green";
        } else if (valueB < valueA) {
            resultDiv.textContent = "Valor B deve ser maior que Valor A";
            resultDiv.style.color = "red";
        } else {
            resultDiv.textContent = "Valores são iguais";
            resultDiv.style.color = "blue";
        }
    } else {
        resultDiv.textContent = "Insira valores válidos";
        resultDiv.style.color = "red";
    }
});
