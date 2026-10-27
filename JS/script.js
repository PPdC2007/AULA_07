/*const carro = {marca:"ford", 
                modelo:"focus", 
                ano: 2015,
                buzina:function () {
                    alert('Promotion')
                },
                completo:function() {
                    return "A marca é " + this.marca + " e ano " + this.ano
                }
} //objeto entre chaves */

//Objetos entre chaves
//console.log(carro);
//console.log(carro.ano);
//console.log(carro["marca"]);
//carro.buzina();
//console.log(carro.completo())

//const lista = ["arroz", "feijão", "macarrão"];
//const lista = [];

//document.write(lista);

//alert (lista[1]);

//lista[3] = "leite"

//console.log(lista)

//const lista = new Array("arroz", "leite", "biscoito");
//console.log(lista);

const pessoa = ["Pedro", "Cunha", 18]
document.writeln(pessoa + "<br><br>")

pessoa.push('brasileiro')
document.writeln(pessoa + "<br><br>")

pessoa.unshift("Escritor Iniciante")
document.writeln(pessoa + "<br><br>")

pessoa.splice(2,/*Indice*/ 0,/*Apagar?*/ "P"/*O que escrever*/)
document.writeln(pessoa + "<br><br>")

const jogadores = ["irene", "matheus", "pedro", "ana"]
document.writeln(jogadores + " - Ordem antes<br><br>")
document.writeln(jogadores.sort() + " - Ordem depois<br><br>")
