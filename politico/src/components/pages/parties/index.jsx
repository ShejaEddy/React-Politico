import React, { Component } from "react";
import Sidebar from "../../layout/sidebar";
import store from "../../../store";
import "../../../assets/sass/parties.scss";
import UpdateModal from "./update";
import DeleteModal from "../shared/deleteModal";

class Parties extends Component {
  state = {
    parties: [
      { name: "INGABIRE", hqAddress: "Remera", logo: `1.png` },
      {
        name: "INKOTANYI",
        hqAddress: "Kimironko",
        logo: `3.png`,
      },
      {
        name: "FPR",
        hqAddress: "Nyamirambo",
        logo: `2.png`,
      },
      { name: "GOP", hqAddress: "Gisozi", logo: `7.png` },
      { name: "GREEN PARTY", hqAddress: "Kinazi", logo: `5.png` },
    ],
    filteredParties: [],
    party: {},
  };
  componentDidMount() {
    const isLogged = store.getState().isLogged;
    return isLogged ? this.init() : this.props.history.push("/login");
  }
  render() {
    return (
      <React.Fragment>
        <Sidebar />
        <div id="parties" className="p-4 w-100">
          <header className="mb-4">
            <h3 className="main-title">
              <i className="fas fa-caret-right"></i>Parties
            </h3>
            <div className="new-form w-100">
              <h3>Create new party</h3>
              <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Name..." required />
                <label htmlFor="hq">HeadQuarter</label>
                <input
                  type="text"
                  placeholder="headQuarter..."
                  id="hq"
                  required
                />
                <input type="file" className="d-none" id="logo-input" />
                <button id="upload">upload logo?</button>
                <button type="submit" className="create-btn">
                  Create party <i className="fas fa-plus"></i>
                </button>
              </form>
            </div>
          </header>
          <div className="container w-100">
            <h3>All parties</h3>
            <div className="search-container">
              <input
                type="search"
                placeholder="Search a party"
                onChange={this.searchHandler}
              />
            </div>
            <div id="parties-list"></div>
            {!this.state.filteredParties.length ? (
              <div className="text-danger text-center h4">No party found!</div>
            ) : (
              ""
            )}
          </div>
          <UpdateModal
            party={this.state.party}
            closeModal={() => this.closeModal("update-modal")}
          />
          <DeleteModal
            onDelete={this.handleDelete}
            subject={this.state.party.name}
            title="PARTY"
            closeModal={() => this.closeModal("delete-modal")}
          />
        </div>
      </React.Fragment>
    );
  }
  el = (query) => document.querySelector(query);
  elAll = (query) => document.querySelectorAll(query);

  init() {
    this.el("form").addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this.el("#upload").addEventListener("click", (e) => {
      this.el("#logo-input").click();
    });
    const filteredParties = this.state.parties;
    this.setDOM(filteredParties);
    this.setState({ filteredParties });
  }
  setDOM = (data) => {
    let html = "";
    for (let i = 0; i < data.length; i++) {
      html += ` <div class="list" id="list-${i}">
                  <div class="user-data">
                    <div class="profile" style="background-image: url(${require("../../../assets/img/" +
                      data[i].logo)})">
                    </div>
                  <div class="details">
                    <p class="name">${data[i].name}</p>
                    <p class="bio">hq: ${data[i].hqAddress}</p>
                  </div>
                  </div>
                  <div class="options">
                    <i class="fas fa-pen update" id="update-${i}" onClick="event.cancelBubble=true"></i>
                    <i class="fas fa-trash delete ml-1" id="delete-${i}" onClick="event.cancelBubble=true"></i>
                  </div>
                </div>`;
    }
    this.el("#parties-list").innerHTML = html;

    this.elAll(".update").forEach((row) => {
      row.addEventListener("click", (e) => {
        const id = e.target.getAttribute("id").replace("update-", "");
        const party = this.state.parties[id];
        this.setState({ party });
        this.el(
          ".update-profile"
        ).style.backgroundImage = `url(${require("../../../assets/img/" +
          party.logo)})`;
        this.el(".update-name").value = party.name;
        this.el(".update-hq").value = party.hqAddress;
        this.openModal("update-modal");
      });
    });
    this.elAll(".delete").forEach((row) => {
      row.addEventListener("click", (e) => {
        const id = e.target.getAttribute("id").replace("delete-", "");
        const party = this.state.parties[id];
        this.setState({ party });
        this.openModal("delete-modal");
      });
    });
  };
  closeModal = (modal) => {
    this.el(`.${modal}`).classList.add("d-none");
  };
  openModal = (modal) => {
    this.el(`.${modal}`).classList.remove("d-none");
  };
  searchHandler = (e) => {
    const value = e.target.value.toLowerCase();
    const setSearch = (item) => item.toLowerCase().includes(value);
    const filteredParties = this.state.parties.filter((party) => {
      return setSearch(party.name) || setSearch(party.hqAddress);
    });
    this.setState({ filteredParties });
    this.setDOM(filteredParties);
  };
}

export default Parties;
