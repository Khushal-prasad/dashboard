import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import AddUser from './components/AddUser';
import AddProduct from './components/AddProduct';
import axios from 'axios';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);
    return null;
};

function App() {
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchUsers();
        fetchProducts();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const addUser = async (user) => {
      try {
          const formattedUser = {
              name: { firstname: user.firstname, lastname: user.lastname },
              email: user.email,
              username: user.username,
          };
          const response = await axios.post('https://fakestoreapi.com/users', formattedUser);
          
          
          setUsers([...users, { ...formattedUser, id: response.data.id }]);
      } catch (error) {
          console.error('Error adding user:', error);
      }
  };
  

    const updateUser = async (id, updatedUser) => {
        try {
            await axios.put(`https://fakestoreapi.com/users/${id}`, updatedUser);
            setUsers(users.map(user => (user.id === id ? updatedUser : user)));
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`https://fakestoreapi.com/users/${id}`);
            setUsers(users.filter(user => user.id !== id));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const addProduct = async (product) => {
        try {
            const response = await axios.post('https://fakestoreapi.com/products', product);
            setProducts([...products, response.data]);
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const updateProduct = async (id, updatedProduct) => {
        try {
            await axios.put(`https://fakestoreapi.com/products/${id}`, updatedProduct);
            setProducts(products.map(product => (product.id === id ? updatedProduct : product)));
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`https://fakestoreapi.com/products/${id}`);
            setProducts(products.filter(product => product.id !== id));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <Router>
            <ScrollToTop />
            <div className="flex h-screen bg-gray-200">
                <Sidebar />
                <div className="flex-1 p-6 bg-white shadow-md rounded-lg overflow-auto">
                    <AnimatePresence mode="wait">
                        <Routes>
                            <Route path="/" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Dashboard /></motion.div>} />
                            <Route path="/users" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Users users={users} setUsers={setUsers} addUser={addUser} updateUser={updateUser} deleteUser={deleteUser} /></motion.div>} />
                            <Route path="/users/:id" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><UserDetails /></motion.div>} />
                            <Route path="/products" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Products products={products} setProducts={setProducts} addProduct={addProduct} updateProduct={updateProduct} deleteProduct={deleteProduct} className="p-6 bg-gray-50 shadow rounded-lg" /></motion.div>} />
                            <Route path="/products/:id" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><ProductDetails /></motion.div>} />
                            <Route path="/add-user" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><AddUser addUser={addUser} /></motion.div>} />
                            <Route path="/add-product" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><AddProduct addProduct={addProduct} /></motion.div>} />
                        </Routes>
                    </AnimatePresence>
                </div>
            </div>
        </Router>
    );
}

export default App;
