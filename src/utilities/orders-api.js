import { getToken } from './users-service';

const BASE_URL = '/api/orders';

export function getCart() {
    return sendRequest(`${BASE_URL}/cart`);
  }
  
  // Retrieve an unpaid order for the logged in user
  export function addItemToCart(itemId) {
    // Just send itemId for best security (no pricing)
    return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
  }
  
  // Update the item's qty in the cart
  // Will add the item to the order if not currently in the cart
  // Sending info via the data payload instead of a long URL
  export function setItemQtyInCart(itemId, newQty) {
    return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, newQty });
  }
  
  // Updates the order's (cart's) isPaid property to true
  export function checkout() {
    // Changing data on the server, so make it a POST request
    return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
  }


/*--- Helper Functions ---*/

async function sendRequest(url, method = 'GET', payload = null) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc. 
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }

  const token = getToken();

  if (token) {
    // Ensure the headers object exists
    options.headers = options.headers || {};
    // Add token to an Authorization header
    // Prefacing with 'Bearer' is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}