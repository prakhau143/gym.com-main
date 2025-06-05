import React, { useState } from 'react';
import { Box, Heading, Text, VStack, HStack, Image, Input, Textarea, Button, Stack, FormControl, FormLabel } from '@chakra-ui/react';

const initialBlogs = [
  {
    id: 1,
    name: 'Priya Sharma',
    story: 'I lost 20kg in 8 months with the help of Fit4U trainers. My confidence and health have never been better!',
    beforeImg: '/images/before1.jpg',
    afterImg: '/images/after1.jpg',
  },
  {
    id: 2,
    name: 'Anjali Mehra',
    story: 'From struggling with daily activities to running 5Ks! My transformation is proof that anyone can do it.',
    beforeImg: '/images/before2.jpg',
    afterImg: '/images/after2.jpg',
  },
];

export default function TransformationBlog() {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [form, setForm] = useState({ name: '', story: '', beforeImg: '', afterImg: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.story && form.beforeImg && form.afterImg) {
      setBlogs([
        { ...form, id: Date.now() },
        ...blogs,
      ]);
      setForm({ name: '', story: '', beforeImg: '', afterImg: '' });
    }
  };

  return (
    <Box maxW="4xl" mx="auto" py={10} px={4}>
      <Heading mb={6} color="orange.400" fontSize={["2xl","3xl"]} textAlign="center">Fat Loss & Body Transformation Stories</Heading>
      <Box mb={10} p={6} bg="gray.50" borderRadius="lg" boxShadow="md">
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Journey/Story</FormLabel>
              <Textarea name="story" value={form.story} onChange={handleChange} placeholder="Describe your transformation..." />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Before Photo URL</FormLabel>
              <Input name="beforeImg" value={form.beforeImg} onChange={handleChange} placeholder="Link to before photo" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>After Photo URL</FormLabel>
              <Input name="afterImg" value={form.afterImg} onChange={handleChange} placeholder="Link to after photo" />
            </FormControl>
            <Button colorScheme="orange" type="submit">Share Your Story</Button>
          </Stack>
        </form>
      </Box>

      <VStack spacing={8} align="stretch">
        {blogs.map(blog => (
          <Box key={blog.id} p={6} bg="white" borderRadius="lg" boxShadow="sm">
            <HStack spacing={6} align="flex-start" flexWrap={{ base: 'wrap', md: 'nowrap' }}>
              <Image src={blog.beforeImg} alt="Before" boxSize="120px" objectFit="cover" borderRadius="md" border="2px solid #ED8936" />
              <Image src={blog.afterImg} alt="After" boxSize="120px" objectFit="cover" borderRadius="md" border="2px solid #48BB78" />
              <Box>
                <Text fontWeight="bold" fontSize="lg" color="orange.500">{blog.name}</Text>
                <Text color="gray.700" mt={2}>{blog.story}</Text>
              </Box>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
