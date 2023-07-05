import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

export function Chemist() {
  const chemistList = people
    .filter((person) => person.profession === "chemist")
    .map((person) => (
      <li key={person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
      </li>
    ));

  return (
    <article>
      <h1>Químicos</h1>
      <ul>{chemistList}</ul>
    </article>
  );
}

export function Otros() {
  const list = people
    .filter((person) => person.profession != "chemist")
    .map((person) => (
      <li key={person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
      </li>
    ));

  return (
    <article>
      <h1>Otros</h1>
      <ul>{list}</ul>
    </article>
  );
}
