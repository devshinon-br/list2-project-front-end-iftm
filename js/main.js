document.addEventListener('DOMContentLoaded', () => {
    const ages = [25, 30, 18, 22, 40, 16, 28, 35, 19, 21];

    document.write(`<p>Idades: ${ages}</p>`)

    // a 
    const sumAges = ages.reduce((acc, age) => acc + age, 0);
    document.write(`<p>A soma das idades é = ${sumAges}.</p>`);

    // b
    const meanAges = sumAges / ages.length;
    document.write(`<p>A média aritmética simples das idades é =  ${meanAges}.</p>`);

    // c
    const maxAge = Math.max(...ages);
    document.write(`<p>A maior idade é = ${maxAge}.</p>`);

    // d
    const oddAges = ages.filter(age => age % 2 !== 0);
    document.write(`<p>As idades impares são =  ${oddAges.join(', ')}.</p>`);

    // e
    const allLegalAge = ages.every(age => age >= 18);
    document.write(`<p>São todos maiores de idade? ${allLegalAge ? 'Sim' : 'Não'}.</p>`);

    // f
    const userValue = prompt("Enter a value:");
    const allGreaterOrEqualUser = ages.every(age => age >= userValue);
    document.write(`<p>Todas as idades são maiores ou iguais a ${userValue}? ${allGreaterOrEqualUser ? 'Sim' : 'Não'}.</p>`);

    // g
    const ageLimit = 25;
    const agesGreaterOrEqualLimit = ages.filter(age => age >= ageLimit);
    document.write(`<p>Idades maiores ou iguais a ${ageLimit} = ${agesGreaterOrEqualLimit.join(', ')}.</p>`);

    // h
    const agesGreaterOrEqualLimitArr = ages.filter(age => age >= ageLimit);
    const meanAgesGreaterOrEqualLimit = agesGreaterOrEqualLimitArr.reduce((acc, age) => acc + age, 0) / agesGreaterOrEqualLimitArr.length;
    document.write(`<p>A média das idades das pessoas com idades maiores ou iguais a ${ageLimit} = ${meanAgesGreaterOrEqualLimit}.</p>`);

});
