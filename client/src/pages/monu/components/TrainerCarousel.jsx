
// import { Container, Vstack } from '@chakra-ui/react';
import Gallery14 from "../assets/Gallery14.jpg";
import Gallery15 from "../assets/Gallery15.jpg";
import Gallery16 from "../assets/Gallery16.jpg";
import Gallery17 from "../assets/Gallery17.jpg";
import Gallery18 from "../assets/Gallery18.jpg";
import Gallery10 from "../assets/Gallery10.jpg";
import Gallery11 from "../assets/Gallery11.jpg";
import Gallery12 from "../assets/Gallery12.jpg";
import Gallery13 from "../assets/Gallery13.jpg";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box, Heading, HStack, Text } from "@chakra-ui/react"
import {BsTwitter , BsFacebook} from"react-icons/bs"
import {AiFillInstagram} from"react-icons/ai"
const settings = {
  className: "center",
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1000,
  centerPadding: "60px",
  slidesToShow: 3,
  swipeToSlide: true,
  arrows:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow:3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ],
  afterChange: function(index) {
   // console.log(
   //   `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
   // );
  }
};
export  default function ProductCarousel(){
return (
    <> 
        <Slider {...settings}>
          <div>
            <div className="lisa">
              <img src={Gallery14} alt='Priya Sharma'/>
              <Box className="overlay2" >
                 <Heading color="#fff" mb="-4" fontSize={["19","19","20","20","25"]}>Priya Sharma</Heading>
                 <Text color="#666" fontWeight={"500"}>Transformation Coach</Text>
             </Box>
             <Box className="social">
                 <HStack spacing={"7"}>
                  <Text className="sumo"><BsFacebook /></Text>
                  <Text className="sumo"><BsTwitter /></Text>
                  <Text className="sumo"><AiFillInstagram /></Text>
                 </HStack>
             </Box>
            </div>
          </div>
          <div>
            <div className="lisa">
              <img src={Gallery15} alt='Anjali Mehra'/>
              <Box className="overlay2">
              <Heading color="#fff" mb="-4" fontSize={["19","19","20","20","25"]}>Anjali Mehra</Heading>
                 <Text color="#666" fontWeight={"500"}>Strength Trainer</Text>
                </Box>
                <Box className="social">
                 <HStack spacing={"7"}>
                  <Text className="sumo"><BsFacebook /></Text>
                  <Text className="sumo"><BsTwitter /></Text>
                  <Text className="sumo"><AiFillInstagram /></Text>
                 </HStack>
             </Box>
            </div>
          </div>
          <div>
            <div className="lisa">
              <img src={Gallery16} alt='Sneha Patel'/>
              <Box className="overlay2" >
              <Heading color="#fff" mb="-4" fontSize={["19","19","20","20","25"]} >Sneha Patel</Heading>
                 <Text color="#666" fontWeight={"500"}>Yoga & Wellness Coach</Text>
            </Box>
            <Box className="social">
                 <HStack spacing={"7"}>
                  <Text className="sumo"><BsFacebook /></Text>
                  <Text className="sumo"><BsTwitter /></Text>
                  <Text className="sumo"><AiFillInstagram /></Text>
                 </HStack>
             </Box>
            </div>
          </div>
          <div>
            <div className="lisa">
              <img src={Gallery17} alt='Ritika Singh'/>
              <Box className="overlay2" >
              <Heading color="#fff" mb="-4" fontSize={["19","19","20","20","25"]}>Ritika Singh</Heading>
                 <Text color="#666" fontWeight={"500"}>Cardio Specialist</Text>
             </Box>
             <Box className="social">
                 <HStack spacing={"7"}>
                  <Text className="sumo"><BsFacebook /></Text>
                  <Text className="sumo"><BsTwitter /></Text>
                  <Text className="sumo"><AiFillInstagram /></Text>
                 </HStack>
             </Box>
            </div>
             
          </div>
          <div>
            <div className="lisa">
              <img src={Gallery10} alt='Riya Kapoor'/>
              <Box className="overlay2" >
              <Heading color="#fff" mb="-4" fontSize={["19","19","20","20","25"]}>Madara Uchiho</Heading>
                 <Text color="#666" fontWeight={"500"}>GYM TRAINER</Text>
             </Box>
             <Box className="social">
                 <HStack spacing={"7"}>
                  <Text className="sumo"><BsFacebook /></Text>
                  <Text className="sumo"><BsTwitter /></Text>
                  <Text className="sumo"><AiFillInstagram /></Text>
                 </HStack>
             </Box>
            </div>
             
          </div>
          <div>
            <div className="lisa">
              <img src={Gallery11} alt='Anushka Singh'/>
              <Box className="overlay2" >
                  <Heading color="#fff" mb="-4" fontSize={["19","19","20","20","25"]}>Lana Rhoades</Heading>
                 <Text color="#666" fontWeight={"500"}>GYM TRAINER</Text>
              </Box>
              <Box className="social">
                 <HStack spacing={"7"}>
                  <Text className="sumo"><BsFacebook /></Text>
                  <Text className="sumo"><BsTwitter /></Text>
                  <Text className="sumo"><AiFillInstagram /></Text>
                 </HStack>
             </Box>
            </div>
            

          </div>
          <div>
            <div className="lisa">
              <img src={Gallery12} alt='Meera Joshi'/>
              <Box className="overlay2" >
                  <Heading color="#fff" mb="-4" fontSize={["19","19","20","20","25"]}>Monu Marquis</Heading>
                 <Text color="#666" fontWeight={"500"}>GYM TRAINER</Text>
              </Box>
              <Box className="social">
                 <HStack spacing={"7"}>
                  <Text className="sumo"><BsFacebook /></Text>
                  <Text className="sumo"><BsTwitter /></Text>
                  <Text className="sumo"><AiFillInstagram /></Text>
                 </HStack>
             </Box>
            </div>
            

          </div>
          <div>
            <div className="lisa">
              <img src={Gallery13} alt='Pooja Nair'/>
              <Box className="overlay2" >
                  <Heading color="#fff" mb="-4"fontSize={["19","19","20","20","25"]} >Eva Elfie</Heading>
                 <Text color="#666" fontWeight={"500"}>GYM TRAINER</Text>
              </Box>
              <Box className="social">
                 <HStack spacing={"7"}>
                  <Text className="sumo"><BsFacebook /></Text>
                  <Text className="sumo"><BsTwitter /></Text>
                  <Text className="sumo"><AiFillInstagram /></Text>
                 </HStack>
             </Box>
            </div>
            

          </div>
          <div>
            <div className="lisa">
              <img src={Gallery18} alt='Simran Kaur'/>
              <Box className="overlay2" >
                  <Heading color="#fff" mb="-4" fontSize={["19","19","20","20","25"]} >Snoop Dog</Heading>
                 <Text color="#666" fontWeight={"500"}>GYM TRAINER</Text>
              </Box>
              <Box className="social">
                 <HStack spacing={"7"}>
                  <Text className="sumo"><BsFacebook /></Text>
                  <Text className="sumo"><BsTwitter /></Text>
                  <Text className="sumo"><AiFillInstagram /></Text>
                 </HStack>
             </Box>
            </div>
            

          </div>
          <div>
            <div className="lisa">
              <img src={Gallery15} alt='Ayesha Khan'/>
              <Box className="overlay2" >
                  <Heading color="#fff" mb="-4" fontSize={["19","19","20","20","25"]} >Charlotte Flair</Heading>
                 <Text color="#666" fontWeight={"500"}>GYM TRAINER</Text>
              </Box>
              <Box className="social">
                 <HStack spacing={"7"}>
                  <Text className="sumo"><BsFacebook /></Text>
                  <Text className="sumo"><BsTwitter /></Text>
                  <Text className="sumo"><AiFillInstagram /></Text>
                 </HStack>
             </Box>
            </div>
            

          </div>
          <div>
            <div className="lisa">
              <img src={Gallery16} alt='Sneha Desai'/>
              <Box className="overlay2" >
                  <Heading color="#fff" mb="-4" fontSize={["19","19","20","20","25"]} >Wakanda Forever</Heading>
                 <Text color="#666" fontWeight={"500"}>GYM TRAINER</Text>
              </Box>
              <Box className="social">
                 <HStack spacing={"7"}>
                  <Text className="sumo"><BsFacebook /></Text>
                  <Text className="sumo"><BsTwitter /></Text>
                  <Text className="sumo"><AiFillInstagram /></Text>
                 </HStack>
             </Box>
            </div>
            

          </div>
        </Slider>

    </>
)
}