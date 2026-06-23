import { Link } from 'react-router-dom';

function Navbar () {
    return (
        <nav className="bg-blue-900 text-white p-4">
            <ul className="flex space-x-4">
                <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                <li><Link to="/login" className="text-gray-300 hover:text-white">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;