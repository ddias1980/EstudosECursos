/*
    <h1>Seção 7 - Objetos</h1>
    <h3>Desafio 1 - Nome e sobrenome</h3>
    <p>Temos 3 objetos, cada um com duas propriedades, nome e sobrenome</p>
    <p>Precisamso mostra no console o nome completo de cada. </p>
*/
var h3 = 'Desafio 1 - Nome e sobrenome';
var p = []
p.push('Temos 3 objetos, cada um com duas propriedades, nome e sobrenome');
p.push('Precisamso mostra no console o nome completo de cada. ');
console.log('Seção 7 - Objetos');
console.log(h3);
for (i in p){
    console.log(p[i])
}
console.log('--------------------------------------')

// aqui começa o problema. 
var pessoa1 = {
    nome: 'jose',
    sobrenme: 'silva'
}
var pessoa2 = {
    nome: 'jose',
    sobrenme: 'geraldo'
}
var pessoa3 = {
    nome: 'maria',
    sobrenme: 'cleusa'
}
/*
Aqui deu certo mas o modo de acessar um objeto a partir de uma String me soou meio estranho. 
Vou tentar usar o "modo tradicional."
*/
for (var i=1; i <=3; i++){
    console.log(window["pessoa"+i].nome +' '+ window["pessoa"+i].sobrenme);
}

/* 
for (var i=1; i <=3; i++){
    console.log(pessoa[i].nome +' '+ pessoa[i].sobrenme)
}
Isso aqui em cima não dá certo, pq não é possível construir nomes de variáveis
usando String e ainda esperar que ela traga resultado. 
Mas...... 
MAAAASSSSSSSS... 
se voce chamar uma String pelo objeto pai (no caso, window) e meter a String entre colchete [], pronto... ela retorna o valor de uma variável com aquele nome.. 
Não é poético. 

*/ 
