import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import "./NavBar.css"

export default function NavBar(props){

    function handleLogOut(){
        userService.logOut();
        props.setUser(null);
    }

    return (
        <nav>
             
            <Link to="/home">Home</Link>
            &nbsp; | &nbsp;
            <Link to="/Favlist">Favourite List</Link>
            &nbsp; | &nbsp;
            <Link to="/restaurants">Restaurant List</Link>
            &nbsp; | &nbsp;
            <span> Welcome {props.user.name}</span>
            &nbsp; | &nbsp;
            <Link onClick={handleLogOut} to="">Logout</Link>
            <h1>Top Rated Restaurants</h1>
        </nav>
    );
}