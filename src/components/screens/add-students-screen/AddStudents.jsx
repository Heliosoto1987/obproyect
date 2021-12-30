//vendor
import React from "react";
//library modal
import Modal from "react-modal";
//components

//styles
import "../../../styles/screen/add-students/add-students.css";
//modal config
Modal.setAppElement("#root");

export const AddStudents = ({
  isOpen,
  setIsOpen,
  companiesFilters,
  setFilterValue,
}) => {
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="modal"
      overlayClassName="modal__fondo"
      closeTimeoutMS={200}
    >
      <h1 className="modaltitle">Nuevo Alumno</h1>
      <hr />
      <form></form>
    </Modal>
  );
};
