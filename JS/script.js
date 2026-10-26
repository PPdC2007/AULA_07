const carro = {marca:"ford", 
                modelo:"focus", 
                ano: 2015,
                buzina:function () {
                    alert('Promotion')
                },
                completo:function() {
                    return "A marca é " + this.marca + " e ano " + this.ano
                }
} //objeto entre chaves

//Objetos entre chaves
console.log(carro);
console.log(carro.ano);
console.log(carro["marca"]);
//carro.buzina();
console.log(carro.completo())