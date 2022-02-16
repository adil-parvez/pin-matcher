const products = [
    "Asus core i3 6th generation laptop",
    "Walton primo f7 first phone",
    "HP core i5 pavilion laptop",
    "Redmi note-9 higher price phone",
    "Redmin go Phone was bought by me",
    "Asus core i7 higher price laptop",
    "Laptop with capital letter"
];


const searching = "A";
const output = [];

// for (const product of products){
//     if (product.includes(searching)) {
//         output.push(product);
//     }
// }

for (const element of products){
    if (element.startsWith(searching)) {
        output.push(element);
    }
}
console.log(output);