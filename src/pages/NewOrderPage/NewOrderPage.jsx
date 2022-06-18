import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import './NewOrderPage.css';
import { Link, useHistory } from 'react-router-dom';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';


export default function NewOrderPage(){
    const [menuItems, setMenuItems] = useState([]);
    const [activeCat, setActiveCat] = useState('');
    const [cart, setCart] = useState(null);
    const categoriesRef = useRef([]);
    const history = useHistory();

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

        async function getCart(){
            const cart = await ordersAPI.getCart();
            console.log('cart get is ', cart)
            setCart(cart);
        }
        getCart();
    }, []);

    async function handleAddToOrder(itemId) {
        const cart = await ordersAPI.addItemToCart(itemId);
        setCart(cart);
      }
    
      async function handleChangeQty(itemId, newQty) {
        const cart = await ordersAPI.setItemQtyInCart(itemId, newQty);
        setCart(cart);
      }
    
      async function handleCheckout() {
        await ordersAPI.checkout();
        history.push('./favlist');
      }

    return (
        <main className="NewOrderPage">
        
        <aside>
        
        <CategoryList
            categories={categoriesRef.current}
            activeCat={activeCat}
            setActiveCat={setActiveCat}
        />
        <Link to="/home" className="button btn-sm">HOME</Link>
        
        </aside>
        
        <MenuList
        menuItems={menuItems.filter(item => item.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
        />
        <OrderDetail 
            order={cart}
            handleChangeQty={handleChangeQty}
            handleCheckout={handleCheckout}/>
    </main>
    );
}