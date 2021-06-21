function aleatorio(i)
{
    let final = finalIntervalo[i];
    let inicial = inicioIntervalo[i];
    let inteiro = parametroInteiro[i];

    if(inteiro)
    {
        return (Math.round(Math.random()*(final-inicial)+inicial))
    }
    else
    {
        return (Math.random()*(final-inicial)+inicial)
    }
}
function mutacoes(i)
{
    let variacao = intensidadeMutacoes[i];
    let inteiro = parametroInteiro[i];
    if(inteiro)
    {
        return (Math.round(Math.random()*(2*variacao)-variacao))
    }
    else
    {
        return (Math.random()*(2*variacao)-variacao)
    }
}