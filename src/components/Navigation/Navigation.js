import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navigation.css";

const Navigation = () => {
    return (
        <div className='Navigation'>
            <ul>
                <li><NavLink to="/pubs"><button>Gestion des Pubs</button></NavLink></li>
                <li><NavLink to="/produits"><button>Gestion des Produits</button></NavLink></li>
                <li><NavLink to="/admin"><button>Gestion des admin</button></NavLink></li>
                <li><NavLink to="/comandes"><button>Gestion des comandes</button></NavLink></li>
                <li><NavLink to="/validation"><button>validation</button></NavLink></li>
                <li><NavLink to="/out"><i class="fa-solid fa-arrow-right-from-bracket"></i></NavLink></li>
                
                
            </ul>

        </div>
    );
};

export default Navigation;