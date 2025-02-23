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

// Task 3: Creating an Inventory Class
console.log("\nTask 3: Creating an Inventory Class");

class Inventory { // creating class inventory
    constructor() {
        this.products = [];
        this.orders = []; // modifying task 4 adding order array
    };
    addProduct(product) { // adds a new product to inventory
        return this.products.push(product); // using ppush method
    };
    listProducts () { // logs all of products details 
        return this.products.forEach(product => console.log(product.getDetails()));
    }
    placeOrder(orderId, product, quantity) { // modifying task 4 adding method placeOrder
        if (product.stock >= quantity) {
            let order = new Order(orderId, product, quantity); // creating new order
            this.orders.push(order);
        } else {
            return `Stock Unavailable: Stock of ${product.name} is currently ${product.stock}`; // Message returned if unavilable 
        };
    };
    listOrders() { // task 4 adding method listOrders()
        this.orders.forEach(order => console.log(order.getOrderDetails())); // logging all placed orders
    }

}

// Logging test cases outputs:
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"

// Task 4: Implementing Order Management
console.log("\nTask 4: Implementing Order Management");

// Logging test cases outputs:
inventory.placeOrder(601, prod1, 2);
inventory.listOrders();
// Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(prod1.getDetails());
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"
