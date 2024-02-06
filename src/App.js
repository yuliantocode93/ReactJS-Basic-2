import "./App.css";

function Item({ name, isPacked }) {
  let itemName = name;
  if (isPacked) itemName = ` ${name}✔`;
  return <li className="item">{itemName}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
