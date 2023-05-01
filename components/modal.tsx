import React, { useState, useEffect, useContext } from "react";
import AppContext from "../pages/ctx";

const MIN_TIME = 3000;
const CLOSING_TIME = 3000;

export default function Modal() {
  const [showModal, setShowModal] = useState(true);
  const { minutes }: any = useContext(AppContext);
  const handleClose = () => setShowModal(!showModal);

  useEffect(() => {
    // setTimeout(
    //   () => {
    //     console.log("abriendo modal...");
    //     setShowModal(true);
    //   },
    //   minutes ? minutes : MIN_TIME
    // );
    // setTimeout(() => {
    //   console.log("cerrando... modal");
    //   handleClose();
    // }, CLOSING_TIME);
  }, [showModal]);

  return (
    <>
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "5px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
        >
          <h2 style={{ marginBottom: "10px" }}>¡Hola! Soy un modal</h2>
          <p style={{ marginBottom: "20px" }}>
            Este modal se ocultará en {minutes} minutos.
          </p>
          <button onClick={() => handleClose()}>Cerrar</button>
        </div>
      )}
    </>
  );
}
