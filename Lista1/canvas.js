function setup()
{
    
    canvas = createCanvas(0,0)

}
function draw()
{
    frameRate(200);
    background('transparent');
    if(rodando)
    {
        geracaoAtual = observarRestricoes();
        geracaoAtual = novaGeracao();
        atualizarNGeracoes();
        //console.log(bestFitGlobal);
    }
    mostrarBestFit();
}
function attBestFit(Ql,Qc,Fit)
{
    bestFitVar2 = Qc;
    bestFitVar1 = Ql;
    bestFitGlobal = Fit;
    
}
function mostrarBestFit()
{
    document.getElementById('nomeVar1').innerText = nomeVar1;
    document.getElementById('nomeVar2').innerText = nomeVar2;
    document.getElementById('valorVar1').innerText = bestFitVar1; 
    document.getElementById('valorVar2').innerText = bestFitVar2;
    document.getElementById('valorFitness').innerText = bestFitGlobal;
}
    