import { useState } from "react";

const Products = ({ products, addProduct, updateProduct, deleteProduct }) => {
    const [newProduct, setNewProduct] = useState({ title: "", price: "" });
    const [editingProduct, setEditingProduct] = useState(null);

    const handleAddProduct = (e) => {
        e.preventDefault();
        if (newProduct.title && newProduct.price) {
            addProduct(newProduct);
            setNewProduct({ title: "", price: "" });
        }
    };

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        if (editingProduct && editingProduct.title && editingProduct.price) {
            updateProduct(editingProduct.id, editingProduct);
            setEditingProduct(null);
        }
    };

    return (
        <div className="p-4 max-w-lg mx-auto">
            <h2 className="text-xl font-bold mb-4 text-center">Products</h2>

            
            <form onSubmit={handleAddProduct} className="mb-4 flex flex-wrap gap-2 gap-y-2">
                <input
                    type="text"
                    placeholder="Title"
                    value={newProduct.title}
                    onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                    className="border p-2 w-full md:w-auto flex-1 rounded"
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    className="border p-2 w-full md:w-auto flex-1 rounded"
                />
                <button type="submit" className="w-full md:w-auto bg-blue-500 text-white px-4 py-2 rounded">
                    Add
                </button>
            </form>

            
            {editingProduct && (
                <form onSubmit={handleUpdateProduct} className="mb-4 flex flex-wrap gap-2 gap-y-2">
                    <input
                        type="text"
                        value={editingProduct.title}
                        onChange={(e) => setEditingProduct({ ...editingProduct, title: e.target.value })}
                        className="border p-2 w-full md:w-auto flex-1 rounded"
                    />
                    <input
                        type="number"
                        value={editingProduct.price}
                        onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                        className="border p-2 w-full md:w-auto flex-1 rounded"
                    />
                    <button type="submit" className="w-full md:w-auto bg-green-500 text-white px-4 py-2 rounded">
                        Update
                    </button>
                </form>
            )}

            
            <ul className="space-y-2">
                {products.map((product) => (
                    <li key={product.id} className="p-3 border rounded flex flex-col md:flex-row justify-between items-start md:items-center">
                        <span className="text-sm md:text-base">{product.title} - ${product.price}</span>
                        <div className="flex gap-2 mt-2 md:mt-0">
                            <button className="bg-yellow-500 text-white px-3 py-1 rounded" onClick={() => setEditingProduct(product)}>
                                Edit
                            </button>
                            <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => deleteProduct(product.id)}>
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
