import './card.css';

function Card({ title, children, onFollow }) {
  return (
    <div className="card">
      <h3>{title}</h3>

      {children(onFollow)}
    </div>
  );
}

export default Card;