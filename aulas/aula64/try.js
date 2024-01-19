try{
    //quando não ha erros

    console.log('Abrir arquivo'); 
    console.log('Manipulei o  arquivo');
    console.log('fechei o  arquivo');
} catch(error) {
    //quando ha erros

    console.log('tratar o error')
} finally {
    //sempre executa

    console.log('sempre sou executado')
}