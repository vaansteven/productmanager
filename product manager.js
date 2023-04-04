class ProductManager {
    
    constructor() {
        this.products = [];
    }

    getProducts = () => {
        return this.products;
    }}

    AddProduct = (
        title= "producto prueba", description= "Este es un producto de prueba", price= 200,thumbnail="Sin imagen", code="abc123",stock="25",
        
    ) => {
        const product = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }}
        if (this.products.length === 0) {
            product.id = 1;

        } else {
        
            productId = this.products[this.products.length - 1].id + 1;
        }

        this.products.push(product);        
    
        getProductById =(productId) => {
            const productIndex= this.products.findIndex(product=>product.id===productId);
            if (productIndex === -1) {
                console.log("Not Found");
                return;
            }
        }

        const manejadorProductos = new ProductManager();
        manejadorProductos.AddProduct('Disco vinilo','sin descripcion', 500,thumbnail,code);
        manejadorProductos.AddProduct('Bnadeja Technichs','sin descripcion', 5500,thumbnail,code);
        manejadorProductos.getProductById()
        manejadorProductos.getProductById()

        console.log(manejadorProductos.getProducts());

        