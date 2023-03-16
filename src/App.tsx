import { Typography, Box } from "@mui/material";
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

const App = () => {
  return (
    <StyledContainer>
      <StyledMainContent>
        <Typography variant="h3">Michael Nusair</Typography>
        <Typography variant="subtitle1">Full-Stack Developer</Typography>
        <Typography variant="body1">Contact Details:</Typography>
        <Typography variant="body2">
          +972528971871 Mic.n.104@gmail.com
        </Typography>
        <Typography variant="body1">Skills:</Typography>
        <ul>
          <li>TypeScript</li>
          <li>ReactJS, MUI Redux, RxJS AngularJS, CesiumJS NodeJS</li>
          <li>ExpressJS, GraphQL MongoDB</li>
          <li>BrainJS</li>
          <li>
            Docker, Compose AWS, EC2, Elastic BS CGP, Firebase Python, Selenium
          </li>
        </ul>
        <Typography variant="body1">Education:</Typography>
        <Typography variant="body2">
          Open University: Computer Science B.Sc Student
        </Typography>
        <Typography variant="body2">
          See-Security Collage: Cybersecurity Intro and Network Administration +
          SOC Tier 1 Certified
        </Typography>
        <Typography variant="body2">LPI: Linux Essentials Certified</Typography>
        <Typography variant="body1">Languages:</Typography>
        <ul>
          <li>English - Native</li>
          <li>Hebrew - Native</li>
        </ul>
        <Typography variant="body1">About me:</Typography>
        <Typography variant="body2">
          I am a full-stack developer with 2 years experience, and I am looking
          for a challenging web development position. Learned independently and
          quickly, experienced with project managing from conception to
          fruition, alongside developing my own projects with true
          entrepreneurial spirit and a lot of motivation.
        </Typography>
        <Typography variant="body1">Past Experience:</Typography>
        <ul>
          <li>Full-Stack Developer, IAF – Ofek 324: 2022-2023</li>
          <li>
            Developed an operational arial picture and air defense control
            system at Ofek 324 Unit. The system has a Web UI and based on more
            than 10 NodeJS microservices. Spent most of the time on the client,
            a map-based application that uses Cesium and later refactored from
            Angular to React. Built UIs with React MUI and used GraphQL to
            contact most of the servers.
          </li>
          <li>Developed my own project for the IAF: 2021-2022</li>
          <li>
            Developing HR managing App, made with MERN stack. Deploying the
            app’s server on Heroku, client on Netlify and database on Atlas for
            tests and in the IAF network (OpenShift) for production
          </li>
        </ul>
      </StyledMainContent>
    </StyledContainer>
  );
};
export default App;
