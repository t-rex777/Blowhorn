import React from "react";
import "./modal.css";

function useModal() {
  function Modal({ children }) {
    return (
      <div className="modal__blur">
        <div className="modal__content">{children}</div>
      </div>
    );
  }
  return { Modal };
}

export default useModal;
