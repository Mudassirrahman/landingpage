import React, { useState , useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import styles from "../../styles/FormPopUP.module.css"

function FormPopUP() {


  const form = useRef();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);


  const sendEmail = (e) => {
    e.preventDefault();

    
    

    emailjs.sendForm('service_3r0765j', 'template_kj7fl3p', form.current, 'XeP31hfRTtvw6MP6c')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      
      e.target.reset();
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
                ref={nameRef}
                  type="text"
                  name='Name'
                  
                  id="form34"
                  className="form-control validate inputHeight"
                  placeholder="Your name"
                  required
                />
              </div>
             
              <div className="md-form mb-3">
                <input
                ref={emailRef}
                  type="email"
                  name="Email"
               
                  id="form29"
                  className="form-control validate inputHeight"
                  placeholder="Email address"
                  required
                />
              </div>
           
              <div className="md-form mb-3">
                <input
                ref={subjectRef}
                  type="text"
                  name='Subject'
                 
                  id="form32"
                  className="form-control validate inputHeight"
                  placeholder="Subject line"
                  required
                />
              </div>
             
              <div className="md-form">
                <textarea
                ref={messageRef}
                  type="text"
                  name='Message'
                  
                  id="form8"
                  className="md-textarea form-control msgHeight mb-1"
                  rows="4"
                  placeholder="Enter your message"
                  required
                ></textarea>
                {/* <input type="file" name="" id="" className="form-control" /> */}
              </div>
          
            </div>
            <div className="modal-footer d-flex justify-content-center mx-3 border-0">
              <button  type="submit"  className={`${"btn w-100 px-5"} ${styles.btnbg1} ${styles.formBtnHeight}`}>SUBMIT</button>
            </div>
            </form>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default FormPopUP;
