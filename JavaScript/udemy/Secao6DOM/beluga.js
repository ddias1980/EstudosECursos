function calculaMedia(xxx){
    var contagem = 0;
    var soma = 0;
    // media = soma dos arguments / quantidade de arguments
    while (arguments[contagem]){
        soma += arguments[contagem];
        contagem++;
    }
    var res = soma / arguments.length;
    results = res.toFixed(1);
    return results;
}