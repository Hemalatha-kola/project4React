import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';

import './NewOrderPage.css';
import { Link } from 'react-router-dom';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';


export default function NewOrderPage(){
    const [menuItems, setMenuItems] = useState([]);
    const [activeCat, setActiveCat] = useState('');
    const categoriesRef = useRef([]);

    useEffect(function() {
        console.log('NewOrderPage rendered');
    });

    useEffect(function() {
        async function getItems() {
        const items = await itemsAPI.getAll();
        categoriesRef.current = items.reduce((cats, item) => {
            const cat = item.category.name;
            return cats.includes(cat) ? cats : [...cats, cat];
        }, []);
        setMenuItems(items);
        setActiveCat(items[0].category.name);
        }
        getItems();
    }, []);

    return (
        <main className="NewOrderPage">
        
        <aside>
        
        <CategoryList
            categories={categoriesRef.current}
            activeCat={activeCat}
            setActiveCat={setActiveCat}
        />
        <Link to="/orders" className="button btn-sm">Favourite List</Link>
        
        </aside>
        <h1>Top Restaurants</h1>
        <MenuList
        menuItems={menuItems.filter(item => item.category.name === activeCat)}
        />
        <OrderDetail />
    </main>
    );
}