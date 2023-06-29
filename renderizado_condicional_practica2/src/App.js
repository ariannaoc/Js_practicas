function Item({ name, importance }) {
  let importante = false;
  if (importance > 0) {
    importante = true;
  }

  return (
    <li className="item">
      {name} {importante && "(Importancia: " + importance + ")"}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item importance={9} name="Space suit" />
        <Item importance={0} name="Helmet with a golden leaf" />
        <Item importance={6} name="Photo of Tam" />
      </ul>
    </section>
  );
}
