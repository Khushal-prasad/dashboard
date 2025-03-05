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
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Products</h2>

         
            <form onSubmit={handleAddProduct} className="mb-4 flex gap-2">
                <input
                    type="text"
                    placeholder="Title"
                    value={newProduct.title}
                    onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                    className="border p-2"
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    className="border p-2"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add</button>
            </form>

         
            {editingProduct && (
                <form onSubmit={handleUpdateProduct} className="mb-4 flex gap-2">
                    <input
                        type="text"
                        value={editingProduct.title}
                        onChange={(e) => setEditingProduct({ ...editingProduct, title: e.target.value })}
                        className="border p-2"
                    />
                    <input
                        type="number"
                        value={editingProduct.price}
                        onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                        className="border p-2"
                    />
                    <button type="submit" className="bg-green-500 text-white px-4 py-2">Update</button>
                </form>
            )}

         
            <ul>
                {products.map((product) => (
                    <li key={product.id} className="p-2 border flex justify-between items-center">
                        <span>{product.title} - ${product.price}</span>
                        <div>
                            <button className="bg-yellow-500 text-white px-2 py-1 mr-2" onClick={() => setEditingProduct(product)}>Edit</button>
                            <button className="bg-red-500 text-white px-2 py-1" onClick={() => deleteProduct(product.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
