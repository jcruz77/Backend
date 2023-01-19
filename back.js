// const person = {
//     first:'Elon',
//     last: 'Musk',
//     twitter:'@elonmusk',
//     compañy: 'Space X'
// }

// function displayName(person){
//     // Destructuring 
// let {first,last} = person;
//     // Templeta String
// console.log(`${first} ${last}`);
// }
// displayName(person)

// Ejercicio Clase 11/01
const sales = [
    { item: 'PS4 Pro', stock: 3, original: 399.99},
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1},
    { item: 'Nintendo Switch', stock: 4, original: 299.99},
    { item: 'PS2 Console' , stock: 1, original: 299.99, discount: 0.8 } ,
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65}
];

function calculateSalesTotals(sales) {
    const totals = [];
    for (let i = 0; i < sales.length; i++) {
        const { item, stock, original, discount = 0 } = sales [i];
        const sale = original - (original * discount);
        const total = sale * stock;
        totals.push({ item, sale, total}); 
    }
    return totals;
}

const salesTotals = calculateSalesTotals(sales);
const items =[]
for (let i = 0; i < salesTotals.length; i++) {
    items.push( {
        "item": salesTotals[i].item,
        "sale": salesTotals[i].sale,
        "total": salesTotals[i].total,
        "stock": sales[i].stock
    });
}

calculateSalesTotals()