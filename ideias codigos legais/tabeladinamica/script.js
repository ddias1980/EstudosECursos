/* montagem dinamica da tabela

*/
//Começa verificando pela não existencia da tabela. 
if (!produtos || !produtos.length > 0){
    document.querySelector('.tabela-vazia').style.display = 'block';
} else {
    document.querySelector('.tabela-vazia').style.display = 'none';
    criartabela();
}

function criaElemento(elemento){
    var x = document.createElement(elemento);
    return x;
}
function atribuiTag(elemento, tag){
    var x = elemento.appendChild(tag);
    return x;
}

function criartabela(){
    var areaTabela = document.querySelector('.areatabela');
    var tabela = criaElemento('table');
    atribuiTag(areaTabela, tabela);
    
    var caption = criaElemento('caption');
    var thead = criaElemento('thead');
    var tbody = criaElemento('tbody');
    var tfoot = criaElemento('tfoot');
    
    // Escrever <thead>
    var colunasTabela = ['id','produto','qtde','preco','total'];
    var trHead = criaElemento('tr');
    for (i = 0; i < colunasTabela.length; i++){
        var th = criaElemento('th');
        th.className = 'table-'+colunasTabela[i];
        th.textContent = colunasTabela[i];
        trHead.appendChild(th);
    }
    
    // Escreve <tbody> 
    var idCount = 0;
    var tdTotalGeral = 0;
    for (i = 0; i < produtos.length; i++){
        var trBody = criaElemento('tr');
            // cria id
            var id = criaElemento('td');
            id.textContent = idCount+1;
            atribuiTag(trBody, id);
            idCount++
            // cria produto
            var produto = criaElemento('td');
            produto.textContent = produtos[i][0];
            atribuiTag(trBody, produto);
            // cria qtde
            var qtde = criaElemento('td');
            qtde.textContent = produtos[i][1];
            atribuiTag(trBody, qtde);
            // cria preco
            var preco = criaElemento('td');
            preco.textContent = produtos[i][2];
            preco.className = "valor";
            atribuiTag(trBody, preco);
            // cria total
            var total = criaElemento('td');
            total.textContent = (produtos[i][1] * produtos[i][2])
            total.className = "valor";
            tdTotalGeral += Number(total.textContent);
            atribuiTag(trBody, total);
            
        atribuiTag(tbody, trBody);
    }

    //escreve <tfoot>
    var trFoot = criaElemento('tr');
    var linhasFoot = ['Total', 'somaTotal'];
        var tdFoot = criaElemento('td');
        tdFoot.textContent = linhasFoot[0]
        atribuiTag(trFoot, tdFoot);

        var tdFoot = criaElemento('td');
        tdFoot.textContent = tdTotalGeral;
        tdFoot.colSpan = "4"
        tdFoot.className = "valor";
        atribuiTag(trFoot, tdFoot);



    atribuiTag(tabela, caption);
    atribuiTag(tabela, thead);
        atribuiTag(thead, trHead);
    atribuiTag(tabela, tbody);
    atribuiTag(tabela, tfoot);
        atribuiTag(tfoot, trFoot);
    

    
}