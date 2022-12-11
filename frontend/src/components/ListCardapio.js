import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//lista todos os cardapios do mongodb
const ListCardapio = () => {
  const [cardapios, setCardapio] = useState([]);

  useEffect(() => {
    getCardapios();
  }, []);

  const getCardapios = async () => {
    const response = await axios.get("http://localhost:5000/cardapios");
    setCardapio(response.data);
  };

  const deleteCardapio = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cardapios/${id}`);
      //depois de apagar, retorna a lista que sobrou
      getCardapios();
    } catch (error) {
      console.log(error);
    }
  };
  
  //monta uma tabela
  return (
    <div className="columns mt-5">
      <div className="column is-full">
        <Link to="/" className="button is-success">
          Home
        </Link>
        <Link to="add" className="button is-success">
          Adicionar novo
        </Link>
        <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>ID</th>
              <th>Dia da Semana</th>
              <th>Cardápio</th>
              <th>Turno</th>
              <th>Data de Cadastro</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {cardapios.map((cardapio, index) => (
              <tr key={cardapio._id}>
                <td>{index + 1}</td>
                <td>{cardapio.dia}</td>
                <td>{cardapio.descricao}</td>
                <td>{cardapio.turno}</td>
                <td>{cardapio.createdAt}</td>
                <td>
                  <Link
                    to={`edit/${cardapio._id}`}
                    className="button is-info is-small mr-1"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => deleteCardapio(cardapio._id)}
                    className="button is-danger is-small"
                  >
                    Apagar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListCardapio;
