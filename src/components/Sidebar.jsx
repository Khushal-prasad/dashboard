import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="w-64 bg-blue-800 text-white p-6 space-y-4 h-screen">
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <nav className="space-y-2">
                <Link to="/" className="block p-2 hover:bg-blue-500 rounded">Home</Link>
                <Link to="/users" className="block p-2 hover:bg-blue-500 rounded">Users</Link>
                <Link to="/products" className="block p-2 hover:bg-blue-500 rounded">Products</Link>
            </nav>
        </div>
    );
}

export default Sidebar;
