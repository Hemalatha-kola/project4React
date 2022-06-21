import './MenuListItem.css';

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
    <div className="MenuListItem">
      <div className="emoji flex-ctr-ctr">{menuItem.emoji}</div>
      <div className="name">{menuItem.name}
      <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}>
          TOP REVIEW
        </button></div>
      <div className="buy">
        <span>{menuItem.price.toFixed(1)}</span>
        
        
      </div>
    </div>
  );
}