import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';
import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Pet Shop"/>

          <h1>Cadastrar Novo Pet</h1>
          <p>
            Descreva o pet para podermos procurar o que você deseja.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041"/>
            Voltar
          </Link>
        </section>

        <form>
          <input placeholder="Título"/>
          <textarea placeholder="Descrição"/>
          <input placeholder="Valor em reais do serviço"/>
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
