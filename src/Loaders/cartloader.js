import { getShoppingCart } from "../utilities/fakedb"

const cartproductsLoader = async () => {
    const loadedproducts = await fetch('products.json')
    const products = await loadedproducts.json()
//    if cart data in data base, you have to async await
    const storedcart = getShoppingCart()
    console.log(storedcart);
    const savecart = [];
    for (let id in storedcart) {
        const addedProducts=products.find(pd=>pd.id===id)
        if (addedProducts) {
            const quantity = storedcart[id]
            addedProducts.quantity = quantity;
            savecart.push(addedProducts)
        }
    }
        return savecart;
    }

export default cartproductsLoader;