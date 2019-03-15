import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "../../assets/react-datepicker.css";

class CreatedDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        isClearable={true}
        placeholderText="Click to select date"
      />
    );
  }
}

export default CreatedDatePicker;
