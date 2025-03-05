import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex">

            <div className="hidden md:flex flex-col w-64 bg-blue-800 text-white p-6 space-y-4 h-screen">
                <h2 className="text-2xl font-bold">Dashboard</h2>
                <nav className="space-y-2">
                    <Link to="/" className="block p-2 hover:bg-blue-500 rounded">Home</Link>
                    <Link to="/users" className="block p-2 hover:bg-blue-500 rounded">Users</Link>
                    <Link to="/products" className="block p-2 hover:bg-blue-500 rounded">Products</Link>
                </nav>
            </div>

            <button
                className="md:hidden p-2 bg-blue-800 text-white fixed top-2 left-2 z-[100] rounded"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>


            <div className={`fixed top-0 left-0 h-full bg-blue-800 text-white p-3 w-36 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform md:hidden shadow-lg z-[99]`}>
                <button className="absolute top-2 right-2 p-1" onClick={() => setIsOpen(false)}>

                </button>
                <h2 className="text-lg font-semibold ml-10 mb-3">Menu</h2>
                <nav className="space-y-2 text-sm">
                    <Link to="/" className="block p-1 hover:bg-blue-500 rounded" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/users" className="block p-1 hover:bg-blue-500 rounded" onClick={() => setIsOpen(false)}>Users</Link>
                    <Link to="/products" className="block p-1 hover:bg-blue-500 rounded" onClick={() => setIsOpen(false)}>Products</Link>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;
