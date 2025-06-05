import React from 'react';
import { Box, Heading, Text, Image, SimpleGrid, VStack } from '@chakra-ui/react';

const feedbacks = [
  {
    name: 'Priya Sharma',
    image: require('../assets/Gallery14.jpg'),
    review: 'Joining this gym changed my life! The trainers are so motivating and the transformation I achieved is incredible.'
  },
  {
    name: 'Anjali Mehra',
    image: require('../assets/Gallery15.jpg'),
    review: 'The female-focused environment made me feel comfortable and empowered. Highly recommended for all women!'
  },
  {
    name: 'Sneha Patel',
    image: require('../assets/Gallery16.jpg'),
    review: 'I love the community here. The workouts are fun and effective, and I feel stronger every day.'
  }
];

const Feedback = () => (
  <Box py={12} px={4} bgGradient="linear(to-r, pink.50, orange.50)" textAlign="center">
    <Heading mb={8} color="pink.600" fontSize={["xl","2xl","3xl"]}>Customer Feedback & Transformations</Heading>
    <SimpleGrid columns={[1, 1, 3]} spacing={8} maxW="6xl" mx="auto">
      {feedbacks.map((fb, idx) => (
        <VStack key={idx} bg="white" borderRadius="xl" boxShadow="md" p={6} spacing={4} align="center">
          <Image
            src={fb.image}
            alt={fb.name}
            borderRadius="full"
            boxSize="120px"
            objectFit="cover"
            border="4px solid #f45f02"
          />
          <Text fontWeight="bold" color="pink.500">{fb.name}</Text>
          <Text color="gray.700" fontStyle="italic">"{fb.review}"</Text>
        </VStack>
      ))}
    </SimpleGrid>
  </Box>
);

export default Feedback;
