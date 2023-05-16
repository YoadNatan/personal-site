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
                <Typography variant="h5">Web Development</Typography>
                <Typography variant="body1">
                  I offer professional and responsive web development services.
                  I utilize my skills in TypeScript, ReactJS, Redux, RxJS,
                  AngularJS, NodeJS, ExpressJS, MongoDB, and GraphQL to deliver
                  top-notch websites.
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
                <Typography variant="h5">App Development</Typography>
                <Typography variant="body1">
                  I offer high-quality app development services. My expertise in
                  Docker, AWS, Firebase, Python, and Selenium, coupled with a
                  keen entrepreneurial spirit, allows me to deliver great
                  applications that meet your needs.
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
