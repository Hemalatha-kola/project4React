import * as userService from '../../utilities/users-service';

export default function OrderHistoryPage(){

    async function handleCheckToken(evt){
        const expDate = await userService.checkToken();
        console.log(expDate);
    }

    return (
        <>
        <h1>OrderHistoryPage</h1>
        <button onClick={handleCheckToken}>Check when my login expires</button>
        </>
    );
}