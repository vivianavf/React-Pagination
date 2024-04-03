import PropTypes from "prop-types";
import "./UserList.css";
import { useEffect, useState } from "react";

function UserCard({ nombre, apellido, edad, correo, imagen, universidad }) {
  return (
    <>
      <div className="card-container">
        <div className="info-img data">
          <div className="image">
            <img src={imagen}></img>
          </div>
          <div className="info">
            <span><b>
              {nombre} {apellido}</b>
            </span>
            <span>{universidad}</span>
          </div>
        </div>
        <div className="email data">
          <span>{edad}</span>
          <span>{correo}</span>
        </div>
      </div>
    </>
  );
}

UserCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string.isRequired,
  edad: PropTypes.number.isRequired,
  correo: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  universidad: PropTypes.string.isRequired,
};

function UserList({ pagina }) {
  const [userList, setUserList] = useState(Array(5));

  useEffect(() => {
    const fetchUsers = async () => {
      await fetch(
        `https://dummyjson.com/users?skip=${(pagina - 1) * 5}&limit=5`
      )
        .then((response) => response.json())
        .then((datos) => {
          if (datos.users.length > 0) {
            setUserList(datos.users);
          }
        });
    };

    fetchUsers();
  }, [pagina]);

  return (
    <>
      <div className="cards">
        {userList.map((usuario) => {
          return (
            <UserCard
              key={usuario.id}
              nombre={usuario.firstName}
              apellido={usuario.lastName}
              edad={usuario.age}
              correo={usuario.email}
              imagen={usuario.image}
              universidad={usuario.university}
            ></UserCard>
          );
        })}
      </div>
    </>
  );
}

UserList.propTypes = {
  pagina: PropTypes.number.isRequired,
};

export default UserList;
