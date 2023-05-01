import React, { useState, useEffect } from "react";
import Modal from "./modal";

const DEFAULT_TIME = 5000; // valor por defecto del tiempo en minutos
const MIN_TIME = 1; // valor mínimo del tiempo en minutos
const MAX_TIME = 60; // valor máximo del tiempo en minutos

function AnotherModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalTimer, setModalTimer] = useState(DEFAULT_TIME * 60); // tiempo en segundos
  const [timeSelection, setTimeSelection] = useState(DEFAULT_TIME);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setModalIsOpen(true);
      setModalTimer(timeSelection * 60);
    }, timeSelection * 60 * 1000); // tiempo en milisegundos

    return () => {
      clearInterval(intervalId);
    };
  }, [timeSelection]);

  useEffect(() => {
    let intervalId: any;
    if (modalIsOpen && modalTimer > 0) {
      intervalId = setInterval(() => {
        setModalTimer((prevTime) => prevTime - 1);
      }, 1000);
    } else if (modalIsOpen && modalTimer === 0) {
      setModalIsOpen(false);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [modalIsOpen, modalTimer]);

  function handleCloseModal() {
    setModalIsOpen(false);
    setModalTimer(timeSelection * 60);
  }

  function handleTimeSelectionChange(event: any) {
    const newTimeSelection = parseInt(event.target.value);
    setTimeSelection(newTimeSelection);
  }

  const timeOptions = Array.from(
    { length: MAX_TIME - MIN_TIME + 1 },
    (_, i) => i + MIN_TIME
  ).map((time) => (
    <option key={time} value={time}>
      {time} minutos
    </option>
  ));

  return (
    <div>
      <Modal isOpen={modalIsOpen}>
        <h1>¡Hola! Han pasado {modalTimer} segundos.</h1>
        <button onClick={handleCloseModal}>Cerrar</button>
      </Modal>
      <label>
        Seleccione el tiempo para mostrar el modal:
        <select value={timeSelection} onChange={handleTimeSelectionChange}>
          {timeOptions}
        </select>
      </label>
    </div>
  );
}

export default AnotherModal;
