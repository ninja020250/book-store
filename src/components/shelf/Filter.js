import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { updateFilters } from "../../store/actions/filterActions";

import Checkbox from "../Checkbox";

const availableTypes = [
  "Drama",
  "Science fiction",
  "Romance",
  "Horror",
  "Travel",
  "History",
  "Series",
  "Fantasy"
];

class Filter extends Component {
  componentWillMount() {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
    this.props.updateFilters(Array.from(this.selectedCheckboxes));
  };

  createCheckbox = label => (
    <Checkbox
      classes="filters-available-size"
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  );

  createCheckboxes = () => availableTypes.map(this.createCheckbox);

  render() {
    return (
      <div className="filters">
        <h4 className="title">TYPES:</h4>
        <ul className="list-group list-group-flush">
          {this.createCheckboxes()}
        </ul>
      </div>
    );
  }
}

Filter.propTypes = {
  updateFilters: PropTypes.func.isRequired,
  filters: PropTypes.array
};

const mapStateToProps = state => ({
  filters: state.filters.items
});

export default connect(
  mapStateToProps,
  { updateFilters }
)(Filter);
