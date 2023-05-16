import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Define a custom styled component for the root container
const StyledContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#fafafa",
  fontFamily: "Roboto",
});

// Define a custom styled component for the main content area
const StyledMainContent = styled(Box)({
  maxWidth: "800px",
  padding: "1rem",
  margin: "0 auto",
});

const StyledCard = styled(Card)({
  minWidth: "275px",
  margin: "1rem",
  padding: "1rem",
  textAlign: "center",
});

const App = () => {
  return (
    <StyledContainer>
      <StyledMainContent>
        <Typography variant="h3" align="center">
          Michael Nusair
        </Typography>
        <Typography variant="subtitle1" align="center">
          Full-Stack Developer
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <StyledCard>
              <CardContent>
                <Typography variant="h4">
                  I will build custom high-quality websites for startups and
                  small businesses
                </Typography>
                <Typography variant="body1">
                  Specializing in creating beautiful, responsive, and functional
                  websites for startups and small businesses. Whether you need a
                  landing page, a business website, or a web application, I'm
                  here to help you build your online presence. I use modern
                  programming languages and offer various website features
                  according to your business needs.
                </Typography>
                <Button variant="contained" color="primary">
                  Order Now
                </Button>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledCard>
              <CardContent>
                <Typography variant="h4">
                  I will develop custom mobile and web applications
                </Typography>
                <Typography variant="body1">
                  Offering comprehensive app development services for businesses
                  and individuals. Leveraging modern technologies and tools, I
                  can create custom mobile and web applications that meet your
                  specific needs. Whether you need a simple app or a complex
                  solution, I'm here to help you make your ideas come to life.
                </Typography>
                <Button variant="contained" color="primary">
                  Order Now
                </Button>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </StyledMainContent>
    </StyledContainer>
  );
};
export default App;
