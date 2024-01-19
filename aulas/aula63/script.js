function soma (x, y) {
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('X e Y precisam ser números');
    }

    return console.log(x + y);
}

try{
    soma(2, 6);
    soma('daora', 8)
} catch(error){
    console.log('algo que nao exploda')
}