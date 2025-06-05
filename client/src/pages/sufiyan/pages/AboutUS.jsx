import React from 'react';
import { Box, Heading, Text, SimpleGrid, VStack, Image } from '@chakra-ui/react';
import team1 from '../assets/Gallery14.jpg';
import team2 from '../assets/Gallery15.jpg';
import team3 from '../assets/Gallery16.jpg';
import team4 from '../assets/Gallery17.jpg';
import team5 from '../assets/Gallery18.jpg';
import team6 from '../assets/Gallery13.jpg';

const AboutUS = () => {
  return (
    <Box py={10} px={4} maxW="6xl" mx="auto">
      <Heading mb={4} color="pink.600" fontSize={["xl","2xl","3xl"]}>About Us</Heading>
      <Text mb={6} color="gray.700" fontSize={["md","lg"]}>
        Welcome to our Women-Only Gym! We are dedicated to empowering women of all ages and backgrounds to achieve their health and fitness goals in a supportive and inspiring environment. Our mission is to create a safe, inclusive space where you can feel strong, confident, and beautiful.
      </Text>
      <Text mb={8} color="gray.700" fontSize={["md","lg"]}>
        Our expert trainers are passionate about helping you transform your body and mind. Whether you're just starting your fitness journey or looking to take your training to the next level, our community is here to support you every step of the way.
      </Text>
      <Heading mb={4} color="orange.500" fontSize={["lg","xl"]}>Meet Our Team</Heading>
      <SimpleGrid columns={[1, 3, 3]} spacing={8}>
        <VStack>
          <Image src={team1} alt="Trainer Prakhar Mittal" borderRadius="full" boxSize="120px" objectFit="cover" />
          <Text fontWeight="bold">Prakhar Mittal</Text>
          <Text color="gray.500" fontSize="sm">Transformation Coach</Text>
        </VStack>
        <VStack>
          <Image src={team2} alt="Trainer Prakhar Mittal" borderRadius="full" boxSize="120px" objectFit="cover" />
          <Text fontWeight="bold">Prakhar Mittal</Text>
          <Text color="gray.500" fontSize="sm">Strength Trainer</Text>
        </VStack>
        <VStack>
          <Image src={team3} alt="Trainer Prakhar Mittal" borderRadius="full" boxSize="120px" objectFit="cover" />
          <Text fontWeight="bold">Prakhar Mittal</Text>
          <Text color="gray.500" fontSize="sm">Yoga & Wellness Coach</Text>
        </VStack>
        <VStack>
          <Image src={team4} alt="Trainer Prakhar Mittal" borderRadius="full" boxSize="120px" objectFit="cover" />
          <Text fontWeight="bold">Prakhar Mittal</Text>
          <Text color="gray.500" fontSize="sm">Cardio Specialist</Text>
        </VStack>
        <VStack>
          <Image src={team5} alt="Trainer Prakhar Mittal" borderRadius="full" boxSize="120px" objectFit="cover" />
          <Text fontWeight="bold">Prakhar Mittal</Text>
          <Text color="gray.500" fontSize="sm">HIIT Instructor</Text>
        </VStack>
        <VStack>
          <Image src={team6} alt="Trainer Prakhar Mittal" borderRadius="full" boxSize="120px" objectFit="cover" />
          <Text fontWeight="bold">Prakhar Mittal</Text>
          <Text color="gray.500" fontSize="sm">Nutrition Coach</Text>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default AboutUS;
