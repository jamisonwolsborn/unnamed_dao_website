import React from "react";
import axios from "axios";

import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

export default class BlogAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author: "Run",
      title: "Away",
      content: "Big Boy",
    };
  }

  createBlog = async () => {
    const { author, title, content } = this.state;
    const res = await axios
      .post("http://localhost:8000/api/post", {
        author: { author },
        title: { title },
        content: { content },
        auth: {
          username: "jamison",
          password: "CorrectHorse!",
        },
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(res);
  };

  render() {
    return (
      <div>
        <MKInput label="Author" onChange={(e) => this.setState({ author: e.target.value })} />
        <MKInput label="Title" onChange={(e) => this.setState({ title: e.target.value })} />
        <MKInput label="Content" onChange={(e) => this.setState({ content: e.target.value })} />
        <MKButton color="info" label="Click Me Daddy" onClick={this.createBlog} />
        <MKTypography variant="body1" color="text">
          {this.author}
        </MKTypography>
      </div>
    );
  }
}
