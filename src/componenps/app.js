import React, { Component } from "react";
import Form from "./form";
import Collection from "./collection";
import v4 from "uuid/v4";
import FilterNotes from "./filterNotes";
import filters from "../service/filter";

export default class App extends Component {
  state = {
    notes: [],
    filter: ""
  };

  handleAddNote = text => {
    this.setState(prevState => ({
      notes: [{ id: v4(), text }, ...prevState.notes]
    }));
  };

  handleDeleteNote = id => {
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id)
    }));
  };

  handleFilterChange = ({ target }) => {
    const { value } = target;

    this.setState({ filter: value });
  };

  render() {
    const { notes, filter } = this.state;

    const filteredNotes = filters(filter, notes);

    return (
      <>
        <h1>Collection list and filter</h1>
        <Form addNote={this.handleAddNote} />
        <br />
        <FilterNotes filter={filter} onFilterChange={this.handleFilterChange} />
        <Collection notes={filteredNotes} deleteNote={this.handleDeleteNote} />
      </>
    );
  }
}
