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

// Task 2: Creating an Order Class
console.log("\nTask 2: Creating an Order Class");

class Order { // creating a class order
    constructor(orderId, product, quantity) { // properties in class
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;

        this.product.updateStock(this.quantity);
    }

    getOrderDetails() { // method to retun order details
        return `OrderId: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.product.price * this.quantity}`;
    
    }
}

// Logging test cases outputs:
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); 
// Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)