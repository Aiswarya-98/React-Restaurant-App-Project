import React from "react"
import Ambience from "../Ambience/Ambience"
import Delivery from "../Delivery/Delivery"
import Welcome from "../../Pages/Welcome/Welcome"
import Partner from "../../Pages/Partner/Partner"
import Booking from "../../Pages/Booking/Booking"
import Dishes from "../../Pages/Dishes/Dishes"

function Home() {
  return (
    <>
      <Welcome />
      <Partner />
      <Booking />
      <Dishes />
      <Ambience />
      <Delivery />
    </>
  )
}

export default Home
