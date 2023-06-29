function Drink({ name }) {
  let plant = "bean";
  let caffeine = "80–185 ";
  let age = "1,000+";

  if (name === "Tea") {
    plant = "leaf";
    caffeine = "15–70 ";
    age = "4,000+";
  }
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{plant}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffeine} mg/cup </dd>
        <dt>Age</dt>
        <dd>{age} years</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="Tea" />
      <Drink name="Coffee" />
    </div>
  );
}
