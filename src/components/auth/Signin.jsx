import React from "react";
import useModal from "../../hooks/modal/useModal";

import "./auth.css";

function Signin({ setSignin }) {
  const { Modal } = useModal();
  return (
    <Modal>
      <form className="form">
        <p
          align="center"
          className="form__cancel"
          onClick={() => setSignin(false)}
        >
          &#10060;
        </p>
        <input type="text" placeholder="username" className="form__input" />
        <input type="password" placeholder="password" className="form__input" />
        <button type="submit" className="form__submit">
          Sign In
        </button>
      </form>
    </Modal>
  );
}

export default Signin;
