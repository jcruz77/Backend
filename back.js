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
// const sales = [
//     { item: 'PS4 Pro', stock: 3, original: 399.99},
//     { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1},
//     { item: 'Nintendo Switch', stock: 4, original: 299.99},
//     { item: 'PS2 Console' , stock: 1, original: 299.99, discount: 0.8 } ,
//     { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65}
// ];

// function calculateSalesTotals(sales) {
//     const totals = [];
//     for (let i = 0; i < sales.length; i++) {
//         const { item, stock, original, discount = 0 } = sales [i];
//         const sale = original - (original * discount);
//         const total = sale * stock;
//         totals.push({ item, sale, total}); 
//     }
//     return totals;
// }

// const salesTotals = calculateSalesTotals(sales);
// const items =[]
// for (let i = 0; i < salesTotals.length; i++) {
//     items.push( {
//         "item": salesTotals[i].item,
//         "sale": salesTotals[i].sale,
//         "total": salesTotals[i].total,
//         "stock": sales[i].stock
//     });
// }

class ProductManager {
    constructor() {
        this.products = []
    }

    generadorIds = () => {
        const count = this.products.length
        if (count === 0) {
            return 1
        } else {
            return (this.products[count-1].id) + 1
        }
    }

    getProducts = () => {
        return this.products
    }

    getProductsById = (id) => {
    const product = this.products.find(elem => elem.id === id)
    if (!product) {
        console.error("Not found")
        return product
    }

    }
    
    addProduct = (title, description, price, thumbnail, code, stock) => {
        const id = this.generadorIds()
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("El producto no puede ser agregado porque faltan datos");
            return
        }
        if (this.products.find(elem => elem.code === code)) {
            throw new Error("El producto ya existe");
        }
        
        this.products.push({
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        )
    }
}

const productManager = new ProductManager()
productManager.addProduct('Cebollon', 'Queso danbo, huevo a la plancha, jamón cocido, cebolla a la plancha y mayonesa de oliva','1500','http://www.coderimages.com/cebollon.jpg','777','30')
console.log(productManager.getProducts())
productManager.addProduct('Azteca', 'Queso ahumado, guacamole, aros de cebolla, rúcula, lechuga capuchina y mostaza dulce','1300','http://www.coderimages.com/azteca.jpg','778','30')
console.log(productManager.getProducts())
productManager.addProduct('Queso ahumado, guacamole, aros de cebolla, rúcula, lechuga capuchina y mostaza dulce','1300','http://www.coderimages.com/azteca.jpg','778','30')
console.log(productManager.getProducts())

