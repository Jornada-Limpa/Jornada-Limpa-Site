import React, { useState } from 'react';
import './Contato.css';


const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <>
    <div className='flex items-center justify-start p-80 h-screen'>
        <div className='card p-5 rounded-lg shadow-2xl shadow-amber-200 w-full max-w-md'>
            <h1 className='text-4xl font-title font-bold mb-4 text-amber-400'>Contato</h1>
            <p className='text-sm font-sans'>Para entrar em contato conosco, por favor utilize o formulário abaixo. Responderemos em até dois dias úteis.</p>
                <div className="contact-form-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label className="block">
                    Nome
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </label>
                    <label className="block">
                    Email
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </label>
                    <label >
                    Telefone
                    <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} />
                    </label>
                    <label>
                    Assunto
                    <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
                    </label>
                    <button type="submit" className="w-full py-2 px-4 bg-amber-400 text-white rounded-md hover:bg-amber-800">Enviar</button>
                </form>
            </div>
        </div>
      </div>
    </>

  );
};


export default ContactForm;

