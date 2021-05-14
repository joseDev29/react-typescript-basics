import { CSSProperties } from "react";
import { User } from "../interfaces/reqRes";
import { useUsers } from "../hooks/useUsers";

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

export const Users = () => {
  const { users, nextPage, previousPage, paginate } = useUsers();

  const renderItem = ({ id, avatar, first_name, last_name, email }: User) => (
    //Los key deben ser string
    <tr key={id.toString()}>
      <td>
        <img src={avatar} alt={`${first_name} avatar`} style={avatarStyle} />
      </td>
      <td>
        <p style={textStyle}>
          {first_name} {last_name}
        </p>
      </td>
      <td>
        <p style={textStyle}>{email}</p>
      </td>
    </tr>
  );

  const nextCondition = paginate === "all" || paginate === "next";
  const previousCondition = paginate === "all" || paginate === "previous";

  return (
    <>
      <h3>Usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{users.map(renderItem)}</tbody>
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

      {nextCondition && (
        <button type="button" className="btn btn-primary" onClick={nextPage}>
          Siguiente
        </button>
      )}
    </>
  );
};
