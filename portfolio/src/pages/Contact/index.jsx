import React, { useState } from 'react';
import { WrapperForm } from './styles';

function Contact() {
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <WrapperForm>
      <form>
        <div>
          <input
            id='name'
            placeholder='Seu nome'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <textarea
            id='notes'
            placeholder='Mensagem'
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
      </form>
    </WrapperForm>
  )
}

export default Contact;