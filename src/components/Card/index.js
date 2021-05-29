import React from 'react';

const Card = ({ title, description, handleClickEditCard, handleClickDeleteCard }) => (
  <section>
    <header>
      <h2>{title}</h2>

      <button type="button" onClick={() => {
        handleClickEditCard(title);
      }}>Edit</button>

      <button type="button" onClick={() => {
        handleClickDeleteCard(title);
      }}>Delete</button>
    </header>

    <p>{description}</p>
  </section>
);

export default Card;