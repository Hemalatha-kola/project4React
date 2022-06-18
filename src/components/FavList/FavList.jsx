import LineItem from '../LineItem/LineItem';

export default function FavList({order, handleChangeQty, handleCheckout}){

    const lineItems = order.lineItems.map(item =>
        <LineItem
          lineItem={item}
          isPaid={order.isPaid}
          handleChangeQty={handleChangeQty}
          handleCheckout={handleCheckout}
          key={item._id}
        />
      );
      return(
        <div className="OrderDetail">
      <div className="section-heading">
        {order.isPaid ?
          <span>ORDER <span className="smaller">{order.orderId}</span></span>
          :
          <span>FAV LIST</span>
        }
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
        {lineItems.length ?
          <>
            {lineItems}
            <section className="total">
              {order.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                ></button>
              }
              
              
            </section>
          </>
          :
          <div className="hungry"></div>
        }
      </div>
    </div>
        
      )
    
}