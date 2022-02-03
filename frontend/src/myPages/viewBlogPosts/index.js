// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Images
import bgImage from "assets/images/bg-presentation.jpg";

// Material Kit 2 React Components
import MKPagination from "components/MKPagination";

// @mui material components
import Icon from "@mui/material/Icon";
import Box from "@mui/material/Box";

import BlogPostPage from "myPages/viewBlogPosts/queryBlogPosts";

function ViewBlogPosts() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Material Kit 2 React{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Free & Open Source Web UI Kit built over ReactJS &amp; MUI. Join over 1.6 million
              developers around the world.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: 5,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <BlogPostPage />
        <Box p={3} sx={{ margin: "auto" }}>
          <MKPagination size="medium">
            <MKPagination item>
              <Icon>keyboard_arrow_left</Icon>
            </MKPagination>
            <MKPagination item active>
              1
            </MKPagination>
            <MKPagination item>2</MKPagination>
            <MKPagination item>3</MKPagination>
            <MKPagination item>
              <Icon>keyboard_arrow_right</Icon>
            </MKPagination>
          </MKPagination>
        </Box>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ViewBlogPosts;
