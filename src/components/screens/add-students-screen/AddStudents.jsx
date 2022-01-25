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
  // companiesFilters,
  // setFilterValue,
  labels,
}) => {
  const closeModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="modal"
      overlayClassName="modal__fondo"
      closeTimeoutMS={200}
    >
      <section className="add-students">
        <div className="add-students__title">Nuevo Alumno</div>
        <div className="add-students__flex">
          <form className="add-students__left-form">
            <label
              className="add-students__modal--label"
              htmlFor="fullNameModal"
            >
              Nombre y Apellidos
            </label>
            <input
              placeholder="Ej: Juan Pérez Lorca"
              className="add-students__input"
              type="text"
              name="fullNameModal"
              id="fullNameModal"
            />
            <div className="add-students__flex-fixed">
              <div className="add-students__flex--box">
                <label
                  className="add-students__modal--label"
                  htmlFor="countryModal"
                >
                  Pais
                </label>
                <select
                  className="add-students__modal-select"
                  name="countryModal"
                  id="countryModal"
                >
                  <option className="add-students__modal-select--option">
                    Venezuela
                  </option>
                  <option className="add-students__modal-select--option">
                    España
                  </option>
                  <option className="add-students__modal-select--option">
                    USA
                  </option>
                </select>
              </div>
              <div className="add-students__flex--box">
                <label
                  className="add-students__modal--label"
                  htmlFor="cityModal"
                >
                  Ciudad
                </label>
                <select
                  id="cityModal"
                  className="add-students__modal-select "
                  name="cityModal"
                >
                  <option>Maracaibo</option>
                  <option>Madrid</option>
                  <option>Miami</option>
                </select>
              </div>
            </div>
            <div>
              <div className="add-students__flex-fixed">
                <div className="add-students__flex--box">
                  <label
                    className="add-students__modal--label"
                    htmlFor="phoneModal"
                  >
                    Nº Telefono
                  </label>
                  <input
                    id="phoneModal"
                    className="add-students__modal-select"
                    type="text"
                    name="phoneModal"
                    placeholder="Ej: +34 612 34 56 78"
                  />
                </div>
                <div className="add-students__flex--box">
                  <label
                    className="add-students__modal--label"
                    htmlFor="emailModal"
                  >
                    Email
                  </label>
                  <input
                    className="add-students__modal-select"
                    type="text"
                    name="emailModal"
                    id="emailModal"
                    placeholder="Ej: user@mail.com"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="add-students__flex-fixed">
                <div className="add-students__flex--box">
                  <label
                    className="add-students__modal--label"
                    htmlFor="faceModal"
                  >
                    Presencialidad
                  </label>
                  <select
                    className="add-students__modal-select"
                    type="text"
                    name="faceModal"
                    id="faceModal"
                  >
                    <option>Elige una opción</option>
                    <option>Precencial</option>
                    <option>Remoto</option>
                  </select>
                  <div className="add-students__modal--last-linkedin">
                    {" "}
                    <label
                      className="add-students__modal--label"
                      htmlFor="linkedin"
                    >
                      Perfil LinkedIn
                    </label>
                    <input
                      id="linkedin"
                      className="add-students__modal-select"
                      type="text"
                      name="linkedin"
                      placeholder="Enlace a LinkedIn"
                    />
                  </div>
                </div>
                <div className="add-students__flex--box">
                  <label
                    className="add-students__modal--label"
                    htmlFor="transfer"
                  >
                    Traslado
                  </label>
                  <select
                    className="add-students__modal-select"
                    type="text"
                    name="transfer"
                    id="transfer"
                  >
                    <option>Elige una opción</option>
                    <option>Si</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
          <form className="add-students__right-form">
            <div className="add-students__flex-fixed">
              <div className="add-students__flex--box">
                <label
                  className="add-students__modal--label"
                  htmlFor="add-students__profile"
                >
                  Foto de perfil
                </label>
                <i className="fas fa-cloud-upload-alt">&nbsp;Subir Imagen </i>
                <input
                  style={{ display: "none" }}
                  className="add-students__right-form--input"
                  placeholder="Subir Imagen"
                  type="file"
                  id="add-students__profile"
                />
              </div>
              <div className="add-students__flex-right--box">
                <span className="add-students__warning">
                  Archivos Soportados
                  <span className="add-students__warning2">
                    .png .jpg y .jpeg
                  </span>
                </span>
                <span className="add-students__warning ">
                  Tamaño maximo
                  <span className="add-students__warning2"> 2 MB</span>
                </span>
              </div>
            </div>
            <div className="add-students__flex-fixed">
              <div className="add-students__flex--box">
                <label
                  className="add-students__modal--label"
                  htmlFor="add-students__cv"
                >
                  Documento CV
                </label>
                <i className="fas fa-cloud-upload-alt fa-cloud-upload-alt2 ">
                  &nbsp;Subir documento PDF
                </i>
                <input
                  style={{ display: "none" }}
                  className="add-students__right-form--input "
                  type="file"
                  name=""
                  id="add-students__cv"
                />
              </div>
              <div className="add-students__flex-right--box">
                <span className="add-students__warning">
                  Archivos Soportados
                  <span className="add-students__warning2">
                    .png .jpg y .jpeg
                  </span>
                </span>
                <span className="add-students__warning ">
                  Tamaño maximo
                  <span className="add-students__warning2"> 20 MB</span>
                </span>
              </div>
            </div>
            <label className="add-students__modal--label" htmlFor="">
              Etiquetas
            </label>
            <input
              type="text"
              className="add-students__right-form--input"
              placeholder="Escribe para buscar..."
            />
          </form>
        </div>
        <section className="add-students__footer">
          <button onClick={closeModal} className="add-students__footer--btn">
            Cancelar
          </button>
          <button className="add-students__footer--btn">Guardar</button>
        </section>
      </section>
    </Modal>
  );
};
