const products = ['Camiseta de Pokemon'
    , 'Pantalón coquinero',
    'Gorra de gansta',
    'Camiseta de Basket',
    'Cinrurón de Orión',
    'AC/DC Camiseta'];

let productsfinal=[]

for (let i = 0; i < products.length; i++) {
    if (products[i].includes("Camiseta")) {
    productsfinal.push(products[i])
}
}
console.log(productsfinal);

