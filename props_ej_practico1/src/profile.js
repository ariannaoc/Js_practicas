import { getImageUrl } from './utils.js';

export default function Profile({datos}){
  return (
  <section className="profile">
        <h2>{datos.name}</h2>
        <img
          className="avatar"
          src={getImageUrl(datos.img)}
          alt={datos.name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {datos.profession}
          </li>
          <li>
            <b>Awards: </b> 
            {datos.awards}
             </li>
          <li>
            <b>Discovered: </b>
            {datos.discovered}
          </li>
        </ul>
      </section>
  )}