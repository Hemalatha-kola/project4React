import './LineItem.css';

export default function LineItem({ lineItem }) {
  return (
    <div className="LineItem">
     
      <div className="flex-ctr-ctr flex-col">
      
        <span className="align-ctr">{lineItem.item.name}: {lineItem.item.details}</span>
       
      </div>
      
      
    </div>
  );
}