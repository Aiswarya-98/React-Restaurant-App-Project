import React from "react"
import { Box, Typography } from "@mui/material"
import { styled, Container } from "@mui/system"

import logoImg from "../../assets/finalLogo.png"
import starsImg from "../../assets/Star.png"
import logosImg from "../../assets/logos.png"

const Partner = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginBottom: theme.spacing(5),
    },
  }))

  const CustomBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4),
    },
  }))

  return (
    <Box sx={{ mt: 10 }}>
      <CustomContainer>
        <CustomBox>
          <img src={logoImg} alt="logoImg" style={{ maxWidth: "100%", borderRadius: "7px" }} />
          <Typography
            variant="body2"
            sx={{
              color: "#7d8589",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            More than 45,000 Trusted Customers
          </Typography>
        </CustomBox>

        <Box>
          <img src={starsImg} alt="starsImg" style={{ maxWidth: "100%" }} />
          <Typography
            variant="body2"
            sx={{
              color: "#7d8589",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            5-Star Rating (2K+ Reviews)
          </Typography>
        </Box>
      </CustomContainer>

      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <img src={logosImg} alt="logosImg" />
      </Container>
    </Box>
  )
}

export default Partner
