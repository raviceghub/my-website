function addToCart(product, price) {

    // your existing logic...

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        event: "add_to_cart",
        product_name: product,
        product_price: price
    });
}
