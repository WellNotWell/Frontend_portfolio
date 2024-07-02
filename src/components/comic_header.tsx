import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComic: React.FC = () => (
    <header className="header">
        <h1 className="name">My comic</h1>
        <nav className="navbar">
            <Link to="/">Home</Link>
        </nav>
    </header>
);

export default HeaderComic;
