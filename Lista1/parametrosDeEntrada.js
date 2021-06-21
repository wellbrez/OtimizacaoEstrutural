
let inicioIntervalo = [0,0];
let finalIntervalo = [9,9];
let intensidadeMutacoes = [0.2,0.2];
let parametroInteiro = [true,true];
let nExercicio=1;
let nomeVar1;
let nomeVar2;

function obterParametrosIniciais()
{
    tamanhoPopulacao = Number(document.getElementById("qtdPopulacao").value)
    taxaDeMutacao = Number(document.getElementById("taxaMutacao").value)
    nExercicio = Number(document.getElementById("nExercicio").value);
    if(nExercicio==0)
    {
        nExercicio = 1;
        document.getElementById('nExercicio').value = 1;
    }
    switch(nExercicio)
    {
        case 1:
            nomeVar1 = "Ql"
            nomeVar2 = "Qc"
            break
        case 2:
            nomeVar1 = "Qar"
            nomeVar2 = "Qes"
            break
        case 3:
            nomeVar1 = "Qm1"
            nomeVar2 = "Qm2"
            break
        case 4:
            nomeVar1 = "Qp1"
            nomeVar2 = "Qp2"
            break
        case 5:
            nomeVar1 = "Qp1"
            nomeVar2 = "Qp2"
            break
    }
}
function obterRestricoes(elemento)
{
    let var1 = elemento.variaveis[0];
    let var2 = elemento.variaveis[1];
    //EX1
    let restricoes1 = 
        [
            //A partir daqui, escreva as Restricoes;
            (var1 + 2*var2)<=4,
            (var1 + 2*var2)<=6,
            (var1 + 3*var2)<=6,
            var1 >= 0,
            var2 >= 0,
        ]
    //EX2
    let restricoes2 = 
        [
            //A partir daqui, escreva as Restricoes;
            (4*var1 + 2*var2)<=20,
            (3*var1 + 3*var2)<=10,
            (100*var1 + 200**var2)<=1000,
            var1 >= 0,
            var2 >= 0,
        ]
    //EX3
    let restricoes3 = 
        [
            //A partir daqui, escreva as Restricoes;
            (4*var1 + 2*var2)<=32,
            (2*var1 + 4*var2)<=22,
            (2*var1 + 6*var2)<=30,
            var1 >= 0,
            var2 >= 0,
        ]
    //EX4
    let restricoes4 = 
        [
            //A partir daqui, escreva as Restricoes;
            (2*var1 + 3*var2)<=120,
            (var1)<=40,
            (var2)<=30,
            var1 >= 0,
            var2 >= 0,
        ]
    //EX5
    let restricoes5 = 
        [
            //A partir daqui, escreva as Restricoes;
            (2*var1 + 4*var2)<=100,
            (3*var1 + 2*var2)<=90,
            (5*var1 + 3*var2)<=120,
            var1 >= 0,
            var2 >= 0,
        ]

    switch(nExercicio)
    {
        case 1:
            return restricoes1;
        case 2:
            return restricoes2;
        case 3:
            return restricoes3;
        case 4:
            return restricoes4;
        case 5:
            return restricoes5;
        default:
            return restricoes1;
    }
}
function calcularFitness(elemento)
{
    let var1 = elemento.variaveis[0];
    let var2 = elemento.variaveis[1];
    let fitness;
    switch(nExercicio)
    {
        case 1:
            fitness = 2*var1+3*var2
            break
        case 2:
            fitness = 190*var1+210*var2
            break
        case 3:
            fitness = 300*var1 + 400*var2
            break
        case 4:
            fitness = 100*var1 + 150*var2
            break
        case 5:
            fitness = 120*var1 + 150*var2
            break
        default:
            fitness = 2*var1 + 3*var2
            break
    }
    //console.log("RODEI"+fitness);
    elemento.Fitness = fitness;
}