const products = [
    {
        name: "Apple Pie",
        description: "Made with farm-fresh apples and a blend of warm spices, our Apple Pie features a flaky, golden-brown crust baked to perfection. Each slice is filled with tender apple slices and rich homemade flavor, creating a timeless dessert that's perfect for family gatherings, holidays, or any occasion.",
        price: "$17.99",
        image: "./Client Files/productPhotos/product-apple-pie-bakery.png",
        link: "#"
    },
    {
        name: "Pecan Pie",
        description: "Our Pecan Pie is loaded with premium pecans nestled in a rich, buttery filling with hints of caramelized sweetness. Encased in a flaky, handcrafted crust, this Southern-inspired dessert offers a satisfying crunch and indulgent flavor that makes every celebration special.",
        price: "$17.99",
        image: "./nariahImages/pecanpie.png",
        link: "#"
    },
    {
        name: "Cherry Pie",
        description: "Bursting with ripe, juicy cherries, our Cherry Pie combines a sweet-tart filling with a buttery lattice crust for the perfect balance of flavor and texture. Baked fresh and crafted with care, this classic favorite delivers a delicious taste of country tradition in every bite.",
        price: "$17.99",
        image: "./nariahImages/cherrypie.png",
        link: "#"
    }
    ,
    {
        name: "Blueberry Jam",
        description: "Crafted from plump, sun-ripened blueberries, our Blueberry Jam delivers a rich, fruity flavor in every spoonful. Carefully cooked in small batches to preserve its natural sweetness, this delicious spread is perfect on toast, biscuits, pancakes, or as a topping for your favorite desserts.",
        price: "$5.50",
        image: "./Client Files/productPhotos/product-blueberry-preserves-jar.png",
        link: "#"
    },
    {
        name: "Honey",
        description: "Harvested from hardworking bees and bottled with care, our Pure Honey offers a smooth, golden sweetness straight from nature. Rich in flavor and naturally delicious, it's perfect for sweetening tea, drizzling over yogurt, baking, or enjoying by the spoonful.",
        price: "$8.99",
        image: "./Client Files/productPhotos/product-raw-honey-jar.png",
        link: "#"
    }
    ,
    {
        name: "Strawberry Jam",
        description: "Made with juicy, vine-ripened strawberries, our Strawberry Jam captures the fresh taste of summer in every jar. Bursting with sweet berry flavor and a smooth, spreadable texture, it's the perfect addition to toast, pastries, sandwiches, and homemade treats.",
        price: "$5.50",
        image: "./Client Files/productPhotos/product-strawberry-preserves-jar.png",
        link: "#"
    }
    ,
    {
        name: "Milk",
        description: "Our Fresh Milk is sourced from trusted local dairies and carefully pasteurized to deliver a rich, creamy taste in every glass. Packed with essential nutrients and farm-fresh goodness, it's perfect for breakfast, baking, cooking, or enjoying on its own.",
        price: "$4.14",
        image: "./nariahImages/milk.png",
        link: "#"
    },
    {
        name: "Eggs",
        description: "Collected daily from healthy, free-roaming hens, our Farm Fresh Eggs offer exceptional flavor, vibrant yolks, and premium quality. Whether scrambled, baked, fried, or poached, these wholesome eggs bring fresh-from-the-farm goodness to every meal.",
        price: "$8.00",
        image: "./Client Files/productPhotos/product-fresh-eggs-dozen-carton.png",
        link: "#"
    }
    ,
    {
        name: "Sourdough Bread",
        description: "Crafted using a traditional slow-fermentation process, our Sourdough Bread features a crisp, golden crust and a soft, airy interior with a signature tangy flavor. Baked fresh with simple ingredients and time-honored techniques, it's perfect for sandwiches, toast, or enjoying warm with butter.",
        price: "$11.99",
        image: "./Client Files/productPhotos/product-sourdough-bread-loaf.png",
        link: "#"
    }
    ,
    {
        name: "Apple Cider",
        description: "Fresh-pressed apple cider made from a blend of ripe orchard apples, delivering a naturally sweet and crisp flavor with a smooth, refreshing finish. Rich in apple aroma and golden in color, this traditional farm-style cider captures the taste of freshly harvested apples in every sip.",
        price: "$10.99",
        image: "./Client Files/productPhotos/product-fresh-apple-cider-jug.png",
        link: "#"
    },
    {
        name: "Cranberry Juice",
        description: "Pure cranberry juice crafted from carefully selected cranberries, offering a bold, tart flavor balanced by subtle natural sweetness. Deep ruby-red in color and packed with refreshing fruit character, it provides a vibrant and invigorating drinking experience.",
        price: "$11.99",
        image: "./nariahImages/cranberryjuice.png",
        link: "#"
    }
    ,
    {
        name: "Orange Juice",
        description: "Premium orange juice made from sun-ripened oranges, delivering a bright, citrusy flavor with the perfect balance of sweetness and refreshing tanginess. Vibrant in color and naturally rich in fruit taste, this smooth and refreshing beverage captures the freshness of freshly squeezed oranges in every glass.",
        price: "$11.99",
        image: "./nariahImages/orangejuice.png",
        link: "#"
    }
     ,
    {
        name: "Vegetable Basket",
        description: "A hand-selected assortment of farm-fresh vegetables gathered at peak ripeness, featuring crisp greens, vibrant peppers, juicy tomatoes, sweet corn, and garden-fresh cucumbers. Carefully arranged in a rustic basket, this colorful collection offers exceptional freshness, quality, and flavor straight from the farm.",
        price: "$10.99",
        image: "./Client Files/productPhotos/product-seasonal-produce-basket.png",
        link: "#"
    },
    {
        name: "Fruit Basket",
        description: "A premium selection of fresh, handpicked fruits including crisp apples, sweet oranges, ripe bananas, juicy grapes, and flavorful berries. Beautifully presented in a classic woven basket, this assortment delivers a perfect balance of sweetness, freshness, and natural goodness for any occasion.",
        price: "$11.99",
        image: "./nariahImages/flowerbasket.png",
        link: "#"
    }
    ,
    {
        name: "Flower Basket",
        description: "A charming arrangement of fresh seasonal blooms featuring radiant sunflowers, elegant roses, cheerful daisies, and lush greenery. Expertly arranged in a handcrafted basket, this vibrant display brings natural beauty, color, and a touch of countryside charm to any home, celebration, or special event.",
        price: "$11.99",
        image: "./nariahImages/fruitbasket.png",
        link: "#"
    }
];

const container = document.getElementById("product-container");

products.forEach(product => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4";

    col.innerHTML = `
        <div class="product-card h-100">
            <img src="${product.image}" alt="${product.name}">
            <div class="card-body d-flex flex-column">
                <h3 class="card-title">${product.name}</h3>
                <p class="card-text">${product.description}</p>

                <div class="mt-auto">
                    <h4 class="price mb-3">${product.price}</h4>

                    <a href="${product.link}" class="btn btn-primary">
                        Buy Now
                    </a>
                </div>
            </div>
        </div>
    `;

    container.appendChild(col);
});