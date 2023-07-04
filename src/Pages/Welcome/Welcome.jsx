import React from "react"
import { Box, Typography } from "@mui/material"
import { styled, Container } from "@mui/system"
import CustomButton from "../../components/CustomButton/CustomButton"
import welcome from "../../assets/welcome.png"

const Welcome = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }))

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#fff",
    fontWeight: "bold",
    margine: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("md")]: {
      fontSize: "40px",
    },
  }))

  return (
    <Box sx={{ backgroundColor: "#FED801", minHeight: "80vh" }}>
      <Container>
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to Food Circles Restaurant
            </Typography>

            <Title variant="h1">Discover a place you'll love to eat</Title>

            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#5A6473",
                my: 4,
              }}
            >
              Immerse yourself in the elegance ambiance as you savour each bites, accomapanied by our extensive selection of hand-picked wines and carefully curated cocktaile.
            </Typography>

            <CustomButton backgroundColor="#0f1b4c" color="#fff" buttonText="More about us" welcomeBtn={true} />
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <img src={welcome} alt="Welcome" style={{ maxWidth: "100%", marginBottom: "2rem" }} />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  )
}
export default Welcome
