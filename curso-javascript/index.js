let n = 4;

for (i = 0; i <= 10; i++)
{

    //console.log(i + ' X ' + n + ' = ' + (i*n) ); /* modo antigo */
    //console.log(`${i} X ${n} = ${i*n}`); /* modo novo (template string) */

}

function somar (n1, n2)
{
    let total = n1 + n2;
    return total
}


let somar = (n1, n2) => {
    let total = n1 + n2;
    return total;
}

let soma = somar(2, 2);

// console.log(soma);

let calculator = (x1, x2, operator) =>  {

    return eval(`${x1} ${operator} ${x2}`);
}

let result = calculator(2, 3, '*');

console.log(result);