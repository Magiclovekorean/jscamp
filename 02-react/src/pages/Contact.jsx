import styles from './Contact.module.css';
import { useState } from 'react';

export function Contact() {
  const [buttonClass, setButtonClass] = useState(null);
  const [sended, setSended] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setButtonClass(styles.buttonClicked);
    setSended(true);
    console.log('Form submitted');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <label htmlFor="name">Nombre:</label>
      <input className={styles.input} type="text" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <input className={styles.input} type="email" id="email" name="email" required />

      <label htmlFor="message">Mensaje:</label>
      <textarea id="message" name="message" required />

      <button type="submit" className={buttonClass ?? ''} disabled={sended}>
        {sended ? 'Enviado' : 'Enviar'}
      </button>
    </form>
  );
}


