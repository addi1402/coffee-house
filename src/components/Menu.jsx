import React, { useState, useEffect } from "react";
import "../styles.css";

export default function Menu() {
  let [state, setState] = useState([]);

  useEffect(async () => {
    let res1 = await fetch("https://api.sampleapis.com/coffee/hot");
    let res2 = await res1.json();
    setState(res2);
  }, []);

  return (
    <main>
      <h3 className="menu">Our Menu</h3>

      {state ? (
        <React.Fragment>
          <p className="intro">
            From smooth and velvety blends to bold and aromatic single origins,
            elevate your coffee experience with us.
          </p>
          {state.map((e) => (
            <Card {...e} key={e.id} />
          ))}
        </React.Fragment>
      ) : null}
    </main>
  );
}

function Card(props) {
  let price = parseFloat((Math.random().toFixed(3) * 10 + 1).toFixed(2));

  return (
    <div className={`card${price < 3 ? "-sold" : ""}`}>
      <div className="frame">
        <img className="thumbnail" src={props.image} alt={props.title} />
      </div>
      <div className="info">
        <h4>{props.title}</h4>
        <p>{props.ingredients.join(", ")}</p>
        <p>{props.description}</p>
        <p>{price < 3 ? "Sold Out" : `\$${price}`}</p>
      </div>
    </div>
  );
}
