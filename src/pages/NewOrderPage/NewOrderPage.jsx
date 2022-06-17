import { useState, useEffect } from 'react';


export default function NewOrderPage(){
    const [menuItems, setMenuItems] = useState([]);

    useEffect(function() {
        console.log('NewOrderPage rendered');
    });

    useEffect(function() {
        console.log('useEffect runs only after first render');
    }, []);
    return (
        <h1>NewOrderPage</h1>
    );
}