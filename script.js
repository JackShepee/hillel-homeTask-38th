class Product {
    constructor(id, name, price, isAvailable) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.isAvailable = isAvailable;
    }
}

class DiscountedProduct extends Product {
    constructor(id, name, price, isAvailable, discountPercentage) {
        super(id, name, price, isAvailable);
        this.discountPercentage = discountPercentage;
    }

    getDiscountedPrice() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.isAvailable) {
                    const discountedPrice = this.price - (this.price * this.discountPercentage / 100);
                    resolve(discountedPrice);
                } else {
                    reject("Товар не доступний");
                }
            }, 1000);
        });
    }
}

const product = new DiscountedProduct(1, "Футболка", 20.0, true, 10);
product
    .getDiscountedPrice()
    .then((discountedPrice) => {
        console.log(`Ціна зі знижкою: $${discountedPrice}`);
    })
    .catch((error) => {
        console.error(error);
    });


const product2 = new DiscountedProduct(2, "Пальто", 100.5, true, 25);
product2
    .getDiscountedPrice()
    .then((discountedPrice) => {
        console.log(`Ціна зі знижкою: $${discountedPrice}`);
    })
    .catch((error) => {
        console.error(error)
    });

const product3 = new DiscountedProduct(3, 'Шуба', 500, false, 15);
product3
    .getDiscountedPrice()
    .then((discountedPrice) => {
        console.log(`Ціна зі знижкою: $${discountedPrice}`);
    })
    .catch((error) => {
        console.error(error)
    });