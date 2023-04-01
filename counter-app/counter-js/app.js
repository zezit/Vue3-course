document.getElementById("mais").addEventListener("click", function () {
    var input = document.getElementsByTagName("h1");
    input[0].innerHTML = parseInt(input[0].innerHTML) + 1;
});

document.getElementById("menos").addEventListener("click", function () {
    var input = document.getElementsByTagName("h1");
    if (parseInt(input[0].innerHTML) > 0)
        input[0].innerHTML = parseInt(input[0].innerHTML) - 1;
    else
        alert("Valor mínimo atingido");
});