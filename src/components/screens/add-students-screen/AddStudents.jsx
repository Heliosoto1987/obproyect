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
    setIsOpen(isOpen);
  };
  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      className="modal"
      overlayClassName="modal__fondo"
      closeTimeoutMS={200}
    >
      <h2 className="">Nuevo Alumno</h2>
      <div className="add-students__flex">
        <form className="add-students__left-form">
          <label htmlFor="fullNameModal">Nombre y Apellidos</label>
          <input type="text" name="fullNameModal" />
          <div>
            <label htmlFor="countryModal">Pais</label>
            <select name="countryModal"></select>
            <label htmlFor="cityModal">Ciudad</label>
            <select name="cityModal"></select>
          </div>
          <label htmlFor="phoneModal">Nº Telefono</label>
          <input type="text" name="phoneModal" />
          <label htmlFor="emailModal">Nombre y Apellidos</label>
          <input type="text" name="emailModal" />
          <label htmlFor="faceModal">Presencialidad</label>
          <input type="text" name="faceModal" />
          <label htmlFor="transfer">Presencialidad</label>
          <input type="text" name="transfer" />
        </form>
        <form className="add-students__right-form">
          <label htmlFor="">Foto de perfil</label>
          <input type="file" />
          <label htmlFor="">Documento CV</label>
          <input type="file" />
          <label htmlFor="">Etiquetas</label>
          <input type="text" placeholder="Escribe para buscar..." />
        </form>
      </div>
    </Modal>
  );
};
