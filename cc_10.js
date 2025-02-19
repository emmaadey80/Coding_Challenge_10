// Task 1: Creating a Product Class
console.log("Task 1: Creating a Product Class");

class Product { // creating a class 'product' with properties 
    constructor(name, id, price, stock) {
        this.name = name; // name property
        this.id = id; // id property
        this.price = price; // price property
        this.stock = stock; // stock property
    }

    getDetails() { // adding method getDetails to return a string of the class details
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;

    }

    updateStock(quantity) { // adding method updateStock to modify stock levels when an order is placed
        return this.stock -= quantity;

    }
}

// Logging test cases outputs
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"


