import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [],
    };
  }

  componentDidMount() {
    axios.get("/api/get").then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    const { persons } = this.state;
    return (
      <ul>
        {persons.map((person) => (
          <p key={person.id}>
            {person.author} - {person.content}
          </p>
        ))}
      </ul>
    );
  }
}
