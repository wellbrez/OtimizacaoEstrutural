let tamanhoPopulacao;
let taxaDeMutacao;
let geracaoAtual = [];
let historicoDeGeracoes;
let rodando = false;
let nGeracoes=0;
let bestFitVar1;
let bestFitVar2;
let bestFitGlobal=0;

function start()
{
    obterParametrosIniciais();
    geracaoAtual = [];
    nGeracoes = 0;
    gerarPopulacaoInicial();
    document.getElementById('resultados').classList.remove('oculto');
    rodando = true;
}
function stop()
{
    rodando = false;
}
function observarRestricoes()
{
    let geracaoRestringida = [];
    for(let elemento of geracaoAtual)
    {
        let usarElemento = true;
        let restricoes = obterRestricoes(elemento);
        for(restricao of restricoes)
        {
            if(restricao==false)
            {
                usarElemento = false;
            }
        }
        if(usarElemento)
        {
            geracaoRestringida.push(elemento);
        }
    }
    return geracaoRestringida;
}
function novaGeracao()
{
    let somaFitness = 0.000001;
    let bestFit=0;
    //Calculando o somatorio fitness
    for (let elemento of geracaoAtual)
    {
        somaFitness+=elemento.Fitness;
        if(elemento.Fitness>=bestFit)
        {
            bestFit = elemento.Fitness;
            attBestFit(elemento.variaveis[0],elemento.variaveis[1],bestFit);
        }
    }
    //designando percentual fitness
    for (let elemento of geracaoAtual)
    {
        elemento.percentFitness = elemento.Fitness/somaFitness;
    }
    //Selecionando individuos e reproduzindo com algumas mutacoes
    let novaGeracao = Reproduzir();
    return novaGeracao;

}

function gerarPopulacaoInicial()
{
    for(let i=0;i<tamanhoPopulacao;i++)
    {
        let Ql = aleatorio(0);
        let Qc = aleatorio(1);
        let novoElemento = new Elemento([Ql,Qc]);
        calcularFitness(novoElemento);
        geracaoAtual.push(novoElemento);
    }
}
function atualizarNGeracoes()
{
    nGeracoes++;
    document.getElementById("nGeracoes").innerHTML =nGeracoes;
}

function Elemento(variaveis)
{
    this.variaveis = variaveis;
    this.percentFitness;
    this.Fitness;
}