// @mui material components
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

// examples
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

import axios from "axios";

import React from "react";

export default class BlogPostPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get("/api/get").then((res) => {
      const posts = res.data;
      this.setState({ posts });
      console.log({ posts });
    });
  }

  render() {
    const { posts } = this.state;
    return (
      <>
        <Container>
          <Grid container spacing={3}>
            {posts.map((item) => (
              <>
                <Grid item xs={12} lg={4} mt={5}>
                  <CenteredBlogCard
                    image="https://bit.ly/3q0AlKO"
                    title={item.title}
                    description={item.author}
                    action={{
                      type: "internal",
                      route: "/somewhere",
                      color: "info",
                      label: "find out more",
                    }}
                  />
                </Grid>
              </>
            ))}
          </Grid>
        </Container>
      </>
    );
  }
}
