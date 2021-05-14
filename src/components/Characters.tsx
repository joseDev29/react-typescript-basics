import { CSSProperties } from "react";
import { useCharacters } from "../hooks/useCharacters";
import { Character } from "../interfaces/RickAndMortyApi";

const generalHeight: string = "50px";

const avatarStyle: CSSProperties = {
  borderRadius: "50%",
  width: generalHeight,
  height: generalHeight,
  objectFit: "cover",
};

const textStyle: CSSProperties = {
  lineHeight: generalHeight,
};

export const Characters = () => {
  const { characters, paginate, previousPage, nextPage } = useCharacters();

  const renderItem = ({
    id,
    name,
    status,
    location: { name: locationName },
    gender,
    image,
  }: Character) => (
    //Los key deben ser string
    <tr key={id.toString()}>
      <td>
        <img src={image} alt={`${name} image`} style={avatarStyle} />
      </td>
      <td>
        <p style={textStyle}>{name}</p>
      </td>
      <td>
        <p style={textStyle}>{locationName}</p>
      </td>
      <td>
        <p style={textStyle}>{gender}</p>
      </td>
      <td>
        <p style={textStyle}>{status}</p>
      </td>
    </tr>
  );

  const nextCondition = paginate === "all" || paginate === "next";
  const previousCondition = paginate === "all" || paginate === "previous";

  return (
    <div className="my-4">
      <h3>Rick And Morty Personajes</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Localizacion</th>
            <th>Genero</th>
            <th>Estatus</th>
          </tr>
        </thead>
        <tbody>{characters.map(renderItem)}</tbody>
      </table>
      {previousCondition && (
        <button
          type="button"
          className="btn btn-primary"
          onClick={previousPage}
        >
          Anterior
        </button>
      )}
      &nbsp;
      {nextCondition && (
        <button type="button" className="btn btn-primary" onClick={nextPage}>
          Siguiente
        </button>
      )}
    </div>
  );
};
