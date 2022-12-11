import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";


const EditCardapio = () => {
  const [dia, setDia] = useState("");
  const [descricao, setDescricao] = useState("");
  const [turno, setTurno] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getCardapioById();
  }, []);

  const getCardapioById = async () => {
    const response = await axios.get(`http://localhost:5000/cardapios/${id}`);
    setDia(response.data.dia);
    setDescricao(response.data.descricao);
    setTurno(response.data.turno);
  };

  const updateCardapio = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/cardapios/${id}`, {
        dia,
        descricao,
        turno,
      });
      navigate("/"); //depois de alterar, volta pra tela inicial
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-full">
        <Link to="/" className="button is-success">
          Home
        </Link>
        <form onSubmit={updateCardapio}>
          
        <div className="field">
            <label className="label">Dia da semana</label>
            <div className="control">
              <div className="select is-half">
                <select
                  value={dia}
                  onChange={(e) => setDia(e.target.value)}
                >
                  <option value="Segunda-feira">Segunda-feira</option>
                  <option value="Terça-feira">Terça-feira</option>
                  <option value="Quarta-feira">Quarta-feira</option>
                  <option value="Quinta-feira">Quinta-feira</option>
                  <option value="Sexta-feira">Sexta-feira</option>

                </select>
              </div>
            </div>
          </div>
          
          <div className="field">
            <label className="label">Descricao (o que será servido)</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="o que será servido"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Turno</label>
            <div className="control">
              <div className="select is-half">
                <select
                  value={turno}
                  onChange={(e) => setTurno(e.target.value)}
                >
                  <option value="ALMOCO">Almoço (11h45min às 12h45min)</option>
                  <option value="JANTA">Janta (17h40min às 18h45min)</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Atualizar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCardapio;
