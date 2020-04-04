import React, { useState } from "react";
import "../../../assets/sass/update.scss";

const UpdateParty = (props) => {
  const { party: savedParty, closeModal } = props;
  const [party, setParty] = useState({});
  const el = (query) => document.querySelector(query);
  const inputHandler = (e) => {
    const { value, name } = e.target;
    setParty({ ...party, [name]: value });
    if (
      Object.keys(party)
        .filter((title) => title !== name)
        .some((v) => party[v] !== savedParty[v]) ||
      savedParty[name] !== value
    )
      el(".updateBtn").disabled = false;
    else el(".updateBtn").disabled = true;
  };
  const updateHandler = (e) => {
    e.preventDefault();
    console.log(party);
  };

  return (
    <div className="update-modal d-none">
      <form onSubmit={updateHandler} className="bg-white">
        <div className="modal-header border-bottom">
          <h4>
            UPDATE PARTY
            <i className="fa fa-times" onClick={closeModal}></i>
          </h4>
        </div>
        <div className="container">
          <div className="update-profile">
            <i className="fas fa-pen update-upload"></i>
          </div>
          <div className="input-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              className="update-name"
              onChange={inputHandler}
            />
          </div>
          <div className="input-group">
            <label>HeadQuarter:</label>
            <input
              type="text"
              name="hqAddress"
              className="update-hq"
              onChange={inputHandler}
            />
          </div>
          <div className="input-group">
            <button className="updateBtn" disabled onClick={closeModal}>
              Save changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateParty;
