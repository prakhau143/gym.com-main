import React, { useState } from 'react';
import { Box, Heading, Text, Input, Button, VStack, useToast } from '@chakra-ui/react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const toast = useToast();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      toast({ title: 'Please enter your email.', status: 'warning', duration: 2000, isClosable: true });
      return;
    }
    setEmail('');
    toast({ title: 'Subscribed successfully!', status: 'success', duration: 2000, isClosable: true });
  };

  return (
    <Box bgGradient="linear(to-r, orange.400, pink.400)" py={10} px={4} textAlign="center" borderRadius="lg" boxShadow="lg" my={10}>
      <Heading color="white" mb={2} fontSize={["xl","2xl","3xl"]}>Subscribe to our Newsletter</Heading>
      <Text color="whiteAlpha.800" mb={4}>Get the latest updates, offers, and fitness tips directly to your inbox!</Text>
      <form onSubmit={handleSubscribe}>
        <VStack spacing={4} maxW="md" mx="auto">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            size="lg"
            bg="white"
            color="black"
            required
          />
          <Button colorScheme="pink" size="lg" type="submit">Subscribe</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Newsletter;
