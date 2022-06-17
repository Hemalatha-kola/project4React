import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar(props){

    function handleLogOut(){
        userService.logOut();
        props.setUser(null);
    }

    return (
        <nav>
            <Link to="/about">About</Link>
            &nbsp; | &nbsp;
            <Link to="/orders">Order History</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new">New Order</Link>
            <span> Welcome {props.user.name}</span>
            <Link onClick={handleLogOut} to="">Logout</Link>
        </nav>
    );
}