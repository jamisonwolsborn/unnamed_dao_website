import React from "react";
import axios from "axios";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import TabsSimple from "myPages/blog/tabs";

export default class BlogAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author: "",
      title: "",
      content: "",
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  updateBlog = async () => {
    const { author, title, content } = this.state;
    const res = await axios
      .post("http://localhost:8000/api/post", {
        author: { author }.author,
        title: { title }.title,
        content: { content }.content,
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(res);
  };

  createBlog = async () => {
    const { author, title, content } = this.state;
    const res = await axios
      .post("http://localhost:8000/api/post", {
        author: { author }.author,
        title: { title }.title,
        content: { content }.content,
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(res);
    window.location.href = "/presentation";
  };

  render() {
    return (
      <MKBox component="section" py={12} mt={5}>
        <Container>
          <TabsSimple />
          <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
            <MKTypography variant="h3" mb={1}>
              Blog Submission
            </MKTypography>
          </Grid>
          <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
            <MKBox width="100%" component="form" method="post" autocomplete="off">
              <MKBox p={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <MKInput
                      id="authorInput"
                      variant="standard"
                      label="Author Name"
                      fullWidth
                      name="author"
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="Title"
                      fullWidth
                      name="title"
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="Your Message"
                      multiline
                      fullWidth
                      rows={20}
                      name="content"
                      onChange={this.handleChange}
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} my={2}>
                  <MKButton onClick={this.updateBlog} variant="gradient" color="dark" fullWidth>
                    Update Blog
                  </MKButton>
                </Grid>
                <Grid container item justifyContent="center" xs={12} my={2}>
                  <MKButton onClick={this.createBlog} variant="gradient" color="dark" fullWidth>
                    Post Blog
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
    );
  }
}
