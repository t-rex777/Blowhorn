import React from "react";
import useModal from "../../hooks/modal/useModal";

function Contact({ setContact }) {
  const { Modal } = useModal();
  return (
    <Modal>
      <form className="form">
        <p
          align="center"
          className="form__cancel"
          onClick={() => setContact(false)}
        >
          &#10060;
        </p>

        <input type="email" placeholder="email" className="form__input" />
        <textarea
          type="password"
          placeholder="message"
          className="form__input"
        />
        <button type="submit" className="form__submit">
          Send
        </button>
      </form>
    </Modal>
  );
}

export default Contact;
