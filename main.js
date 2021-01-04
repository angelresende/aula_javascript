
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigada por clicar!");
}

function redirecionar(){
    window.open("https://globallabs.academy/");
    //window.location.href = "https://globallabs.academy/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Obrigada por passar o mouse</b>";
    elemento.innerHTML = "<b>Obrigada por passar o mouse</b>";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Passe o mouse aqui</b>";
    elemento.innerHTML = "<b>Passe o mouse aqui</b>";
    //alert("trocar texto");
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*function soma(n1,n2){
    return n1 + n2;
}*/

/*function setReplace(frase,nome, novo_nome){
    return frase.replace(nome,novo_nome)
}*/

/*function validadeIdade(idade){
    var validar;
    if (idade>=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}*/

/*var idade = prompt("Qual sua idade");
console.log(validadeIdade(idade));
//alert(soma(5,10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"))

var d = new Date();
alert(d.getMonth());
alert(d.getMinutes());
alert(d.getHours());
alert(d.getDay());*/

/*var count;
for (count=0; count<=5; count++){
    alert(count);
};*/

/*var count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    count++;
}*/

/*var idade = prompt("Qual a sua idade? ")
if(idade >=18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};*/

/*var fruta = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
console.log(fruta);
alert(fruta[1].nome);*/

/*var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta);
alert(fruta.cor);*/

/*var lista = ["maça","pera","laranja"]
lista.push("uva");
lista.pop();
console.log(lista[0]);
console.log(lista.toString());
console.log(lista.join(" | "));
console.log(lista.length);
console.log(lista.reverse());*/

/*var nome = "Angélica Resende";
var frase = "Japão é o melhor time do mundo";
alert("Bem vinda " + nome);
console.log(nome);
console.log(frase.replace("Japão", "Brasil"));*/