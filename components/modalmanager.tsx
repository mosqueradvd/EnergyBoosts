import React, { useState, useEffect } from "react";
import Modal from "./modal";

export function ModalManager({ defaultTime }: any) {
  const [selectedTime, setSelectedTime] = useState(defaultTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowModal(true);
    }, selectedTime * 60 * 1000);

    return () => clearInterval(timer);
  }, [selectedTime]);

  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleTimeChange = (event: any) => {
    setSelectedTime(parseInt(event.target.value));
  };

  return (
    <>
      <div className="time-selector">
        <label htmlFor="time-selector">Tiempo para mostrar el modal:</label>
        <select
          id="time-selector"
          value={selectedTime}
          onChange={handleTimeChange}
        >
          <option value="5000">5 segundos</option>
          <option value={10}>10 minutos</option>
          <option value={20}>20 minutos</option>
          <option value={30}>30 minutos</option>
          <option value={40}>40 minutos (por defecto)</option>
          <option value={50}>50 minutos</option>
          <option value={60}>1 hora</option>
        </select>
      </div>
      {showModal && <Modal onClose={handleClose} userTimer={selectedTime} />}
    </>
  );
}
