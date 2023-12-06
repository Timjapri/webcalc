import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function Support() {
  let redirect= useNavigate();

  const [showHelpModal, setShowHelpModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    category: '',
    description: '',
  });
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [ticketNumber, setTicketNumber] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Form submitted:', formData);

    const randomTicketNumber = Math.floor(1000 + Math.random() * 9000).toString();

    setTicketNumber(randomTicketNumber);
    setFormSubmitted(true);

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      category: '',
      description: '',
    });
    setSubmitDisabled(true);
  };

  const closeHelpModal = () => {
    setFormSubmitted(false);
    setTicketNumber('');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      category: '',
      description: '',
    });
    redirect('/');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: type === 'radio' ? value : value }));

    const isCategoryFilled = formData.category.trim() !== '';

    const areFilled =
      isCategoryFilled &&
      formData.firstName.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.email.trim() !== '';

    setSubmitDisabled(!areFilled);
  };

  return (
    <main className="App">
      <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeHelpModal}>
              &times;
            </span>
            <p className='title'>Support Ticket Form</p>
            {formSubmitted ? (
              <div className='thanks'>
                <p className='thx'>Thank you for sending us your report, we will track the problem now</p>
                <p className='ticket'><strong className='th'>Your ticket number is:</strong> {ticketNumber}</p>
              </div>
            ) : (
              <div>
                <form onSubmit={handleFormSubmit}>
                  <div className='cont'>
                    <div className='popleft'>
                      <div className='rows'>
                        <div className='column'>
                          <p className='formtex'>First Name <strong>*</strong></p>
                          <input type="text" name="firstName" className='formtext' value={formData.firstName} onChange={handleInputChange} required />
                        </div>
                        <div className='column'>
                          <p className='formtex'>Last Name <strong>*</strong></p>
                          <input type="text" name="lastName" className='formtext' value={formData.lastName} onChange={handleInputChange} required />
                        </div>
                      </div>
                      <p className='formtex'>Email <strong>*</strong></p>
                      <input type="email" name="email" className='formtext' value={formData.email} onChange={handleInputChange} required />

                      <p className='formtex'>Category <strong>*</strong></p>
                      <div className='box'>
                        <div className='column'>
                          <div className='rows'>
                            <input type="radio" name="category" value="general" onChange={handleInputChange} required />
                            <p className='formte'>General</p>
                          </div>
                          <div className='rows'>
                            <input type="radio" name="category" value="bug" onChange={handleInputChange} required />
                            <p className='formte'>Bug</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='popright'>
                      <p className='formtex'>Description <strong className='ds'>Optional</strong></p>
                      <textarea name="description" value={formData.description} onChange={handleInputChange}></textarea>
                    </div>
                  </div>
                  <button className='send' type="submit" disabled={submitDisabled}>
                    Submit
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
    </main>
  );
}

export default Support;
