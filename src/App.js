import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import Card from './components/Card';
import Form from './components/Form';

const App = () => {
  const [cards, setCards] = useState([
    {
      id: uuid(),
      title: 'Notataka 1',
      description: 'Zawartość notatki pierwszej',
    },
  ]);

  const [fields, setFields] = useState([
    {
      name: 'title',
      label: 'title',
      value: '',
    },
    {
      name: 'description',
      label: 'description',
      value: '',
    },
  ]);

  const [formType, setFormType] = useState('add');

  const [formId, setFormId] = useState('');

  const handleChangeInput = (name, value) => {
    setFields(prevState => prevState.map(field => ({...field, value: field.name === name ? value : field.value})));
  };

  const handleClickButton = (type, id) => {
    const cardProps = {
      id: !!id.length ? id : uuid(),
    };

    fields.forEach(({ name, value }) => {
      cardProps[name] = value;
    });

    setCards(prevState => type === 'add' ? [...prevState, cardProps] : prevState.map(card => card.id === cardProps.id ? cardProps : card));
    setFields(prevState => prevState.map(fields => ({...fields, value: ''})));
    setFormType('add');
    setFormId('');
  };

  const handleClickEditCard = title => {
    const cardProps = cards.find(card => card.title === title);

    setFields(prevState => prevState.map(field => ({...field, value: cardProps[field.name]})));
    setFormType('edit');
    setFormId(cardProps.id);
  };

  const handleClickDeleteCard = title => {
    setCards(prevState => prevState.filter(card => card.title !== title))
    setFields(prevState => prevState.map(field => ({...field, value: ''})));
    setFormType('add');
    setFormId('');
  };

  return (
    <div>
      <Form fields={fields} type={formType} id={formId} handleChangeInput={handleChangeInput} handleClickButton={handleClickButton} />

      {cards.map(props => <Card key={props.title} {...props} handleClickEditCard={handleClickEditCard} handleClickDeleteCard={handleClickDeleteCard} />)}
    </div>
  );
};

export default App;