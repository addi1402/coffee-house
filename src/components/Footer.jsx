export default function Footer() {
  let hours = new Date().getHours();
  let opening = 10;
  let closing = 22;
  let isOpen = hours >= opening && hours <= closing;

  let num = 45;

  return (
    <footer>
      {isOpen ? (
        <div>
          <p className="statement">
            We are open till {closing}:00! Come visit us or order online!
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p className="statement">
          We are closed. Please come back at {opening}:00!
        </p>
      )}
    </footer>
  );
}
