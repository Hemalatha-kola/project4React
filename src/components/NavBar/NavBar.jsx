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
            <Link to="/orders">Favourite List</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new">Restaurant List</Link>
            &nbsp; | &nbsp;
            <span> Welcome {props.user.name}</span>
            &nbsp; | &nbsp;
            <Link onClick={handleLogOut} to="">Logout</Link>
            <h1>Top Rated Restaurants</h1>
        </nav>
    );
}