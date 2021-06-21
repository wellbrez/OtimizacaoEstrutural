function Reproduzir()
{
    let novaGeracao = [];
    let Evoluido = new Elemento([bestFitVar1,bestFitVar2]);
    calcularFitness(Evoluido);
    novaGeracao.push(Evoluido);
    //console.log(Evoluido);
    for(let i=0;i<tamanhoPopulacao-1;i++)
    {
        let pai = getRandomDNA();
        let mae = getRandomDNA();
        let mutacao1 = Math.random();
        let mutacao2 = Math.random();
        let Ql = Number(pai.variaveis[0]);
        let Qc = Number(mae.variaveis[1]);
        
        if(mutacao1<taxaDeMutacao)
        {
            Ql+=mutacoes(0);
        }
        if(mutacao2<taxaDeMutacao)
        {
            Qc+=mutacoes(1);
        }

        let novoElemento = new Elemento([Ql,Qc]);
        calcularFitness(novoElemento);
        novaGeracao.push(novoElemento);
    }
    return novaGeracao
}
function getRandomDNA()
{
    let indice=0;
    let probabilidade = Math.random();
    for(let indice=0;indice<geracaoAtual.length;indice++)
    {
        if(probabilidade-geracaoAtual[indice].percentFitness<0)
        {
            return geracaoAtual[indice]
        }
    }
    return geracaoAtual[indice];
}