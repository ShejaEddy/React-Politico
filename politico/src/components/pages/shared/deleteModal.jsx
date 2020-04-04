import React from "react";

const DeleteComponent = (props) => {
  const { onDelete, closeModal, subject, title } = props;

  return (
    <div className="delete-modal d-none">
      <div className="bg-white">
        <div className="modal-header border-bottom">
          <h4>
            DELETE {title}
            <i className="fa fa-times" onClick={closeModal}></i>
          </h4>
        </div>
        <div className="container">
          <div className="message p-4">
            Do you really want to delete <b>{subject}</b>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <button className="btn btn-danger" onClick={closeModal}>
              No, I don't
            </button>
            <button className="btn btn-primary" onClick={onDelete}>
              Yes, I do
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteComponent;
