let product=[{name:"Laptop",price:1000},{name:"Smartphone",price:700},{name:"Tablet",price:500},{name:"Headphones",price:300},{name:"Keyboard",price:50}]
let highestPriceProduct=[]
let maxPrice=-Infinity
for (let productObj of product){
    if (maxPrice<productObj.price){
        maxPrice=productObj
        highestPriceProduct=productObj
    }
}
console.log(highestPriceProduct)