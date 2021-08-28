import React from "react";
import useModal from "../../hooks/modal/useModal";
import "./auth.css";

function Signup({ setSignup }) {
  const { Modal } = useModal();
  return (
    <Modal>
      <form className="form">
        <p
          align="center"
          className="form__cancel"
          onClick={() => setSignup(false)}
        >
          &#10060;
        </p>
        <input type="text" placeholder="username" className="form__input" />
        <input type="email" placeholder="email" className="form__input" />
        <input type="password" placeholder="password" className="form__input" />
        <input
          type="password"
          placeholder="re-password"
          className="form__input"
        />
        <button type="submit" className="form__submit">
          Sign Up
        </button>
      </form>
    </Modal>
  );
}

export default Signup;
