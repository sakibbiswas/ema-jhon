import { getShoppingCart } from "../utilities/fakedb"

const cartproductsLoader = async () => {
    //    if cart data in data base, you have to async await
    const storedcart = getShoppingCart()
    const ids = Object.keys(storedcart)
    console.log(ids);

    const loadedproducts = await fetch(`http://localhost:5000/productsByIds`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(ids),

    })

    const products = await loadedproducts.json()

    const savecart = [];
    for (let id in storedcart) {
        const addedProducts = products.find(pd => pd._id === id)
        if (addedProducts) {
            const quantity = storedcart[id]
            addedProducts.quantity = quantity;
            savecart.push(addedProducts)
        }
    }
    return savecart;
}

export default cartproductsLoader;