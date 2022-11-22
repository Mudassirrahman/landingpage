import React from "react";
import styles from "../../styles/Footer1.module.css"

function FormPopUP() {
  return (
    <>
      <div
        className="modal fade custmWidth"
        id="modalContactForm"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header border-0 text-center">
              <h4 className="modal-title w-100 font-weight-bold">
                Pitch Your Idea
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
            <div className="modal-body mx-3">
              <div className="md-form mb-5">
                <input
                  type="text"
                  id="form34"
                  className="form-control validate"
                  placeholder="Your name"
                />
              </div>
              <div className="md-form mb-5">
                <input
                  type="email"
                  id="form29"
                  className="form-control validate"
                  placeholder="Email address"
                />
              </div>
              <div className="md-form mb-5">
                <input
                  type="text"
                  id="form32"
                  className="form-control validate"
                  placeholder="Subject line"
                />
              </div>
              <div className="md-form">
                <textarea
                  type="text"
                  id="form8"
                  className="md-textarea form-control mb-2"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
                <input type="file" name="" id="" className="form-control" />
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center mx-3">
              <button className={`${"btn w-100 px-5"} ${styles.btnbg1}`}>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormPopUP;
