import { useState } from "react";
import './Form.css'

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleShowModal = () => {
        setIsOpen(true);
      };

      const handleCloseModal = () => {
        setIsOpen(false);
      };

      const onSubmit = () => {
        alert("Your query was submitted successfully!")
      }

      const modalStyle = {
        display: isOpen ? "none" : "block"
      };
    

    return (
      <div className='main'>
      <div className="text-box" style={modalStyle}>
        <p>If you have any queries or requests, you can contact us by clicking the button below 👇</p>
      </div>
        <button onClick={handleShowModal} className="contact-button" style={modalStyle}> 
            Contact us 
        </button>

        {isOpen &&  
            <div className="login-modal" >
                <form form className="form" action="" onSubmit={onSubmit}>
                <div className="modal-nav">
                    <h2>Your Contact</h2>
                    <span  className='close-button' onClick={handleCloseModal} >x</span>
                </div>
                    <input type="text" class="mail" placeholder="Enter your mail here"/>
                    <h2>Your Inquiry/Request</h2>
                    <textarea type="text" class="query" placeholder="If you need more information regarding anything, please mention them here and submit."/>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>}
      </div>
    );
  };
export default Modal