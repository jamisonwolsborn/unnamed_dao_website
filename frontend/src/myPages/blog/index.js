import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import Card from "@mui/material/Card";
import BlogAdd from "myPages/blog/postblog";

function Blog() {
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
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <div>
          <BlogAdd />
        </div>
      </Card>
    </>
  );
}

export default Blog;
