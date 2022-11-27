import React, { useState , useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import styles from "../../styles/FormPopUP.module.css"

function FormPopUP() {
  const [contactInput, setContactInput] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: ""
  });
  const [formEroors, setFormEroors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (event) => {
    setContactInput({ ...contactInput, [event.target.name]: event.target.value });
  };

  function submitInfo() {
    console.log(contactInput);
  }

  const form = useRef(() => {
    console.log(formEroors)
    if (Object.keys(formEroors).length === 0 & isSubmit) {

    }
  }, [formEroors]);

  const validate = (values) => {
    const eroors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.Name) {
      eroors.Name = "username is required !";
    }
    if (!values.Email) {
      eroors.Email = "Enter a valid email address. !"
    }
    if (!values.Subject) {
      eroors.Subject = "Subject Line is required !"
    }
    if (!values.Message) {
      eroors.Message = "Message is required !"
    }
    return eroors
  }

  const sendEmail = (e) => {
    e.preventDefault();
    
    setFormEroors(validate(contactInput));
    setIsSubmit(true);

    emailjs.sendForm('service_3r0765j', 'template_kj7fl3p', form.current, 'XeP31hfRTtvw6MP6c')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
  };

  return (
    <>
      <div
        className={`${"modal rounder-0"} ${styles.modal}`}
        id="modalContactForm"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
        
          <div className="modal-content">
            <div className="modal-header border-0 text-center">
              <h4 className={`${"modal-title w-100"} ${styles.formHeading}`}>
                Pitch Your Ideas
              </h4>
              <button
                type="button"
                className="close btn btn-close btn-light"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true"></span>
              </button>
            </div>
            <form  ref={form}  onSubmit={sendEmail}>
            <div className="modal-body mx-3">
              <div className="md-form mb-3">
                <input
                  type="text"
                  name='Name'
                  value={contactInput.Name}
                  onChange={handleChange}
                  id="form34"
                  className="form-control validate inputHeight"
                  placeholder="Your name"
                />
              </div>
              <p className='text-start text-danger'>{formEroors.Name}</p>
              <div className="md-form mb-3">
                <input
                  type="email"
                  name="Email"
                  value={contactInput.Email}
                  onChange={handleChange}
                  id="form29"
                  className="form-control validate inputHeight"
                  placeholder="Email address"
                />
              </div>
              <p className='text-start text-danger'>{formEroors.Email}</p>
              <div className="md-form mb-3">
                <input
                  type="text"
                  name='Subject'
                  value={contactInput.Subject}
                  onChange={handleChange}
                  id="form32"
                  className="form-control validate inputHeight"
                  placeholder="Subject line"
                />
              </div>
              <p className='text-start text-danger'>{formEroors.Subject}</p>
              <div className="md-form">
                <textarea
                  type="text"
                  name='Message'
                  value={contactInput.Message}
                  onChange={handleChange}
                  id="form8"
                  className="md-textarea form-control msgHeight mb-1"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
                {/* <input type="file" name="" id="" className="form-control" /> */}
              </div>
              <p className='text-start text-danger'>{formEroors.Message}</p>
            </div>
            <div className="modal-footer d-flex justify-content-center mx-3 border-0">
              <button  type="submit" onClick={submitInfo} className={`${"btn w-100 px-5"} ${styles.btnbg1} ${styles.formBtnHeight}`}>SUBMIT</button>
            </div>
            </form>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default FormPopUP;
