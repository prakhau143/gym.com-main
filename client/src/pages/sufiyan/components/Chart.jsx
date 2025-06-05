import React from 'react';

import { Box, Heading, Text, Link, Stack, Divider, Badge } from '@chakra-ui/react';

const businessData = {
  id: "09caab3c-52ee-44a2-88c7-4ec7ab85911d",
  lead_number: 150,
  image_url: "",
  name: "Fit4U! Personal Training",
  rating: null,
  review_count: 0,
  category: "Women's personal trainer",
  business_age: "",
  closing_time: "",
  status: "researching",
  location: "Fort Wayne, IN",
  address: "Fort Wayne, IN",
  phone: "+12603122565",
  services: "",
  website_url: "https://m.facebook.com/155587324503413/",
  website_label: "Website",
  directions_url: "",
  directions_label: "Directions",
  call_url: "+12603122565",
  call_label: "Call",
  instagram_url: "",
  facebook_url: "https://www.facebook.com/fit4u2",
  youtube_url: "",
  captions: "",
  social_urls: "",
  source: "Tabulator HTML Import",
  notes: "",
  created_at: "2025-06-03T07:30:03.662+00:00",
  assigned_to_id: "3dd691d0-6029-4f35-913c-af8eb44c5cc5",
  updated_at: "2025-06-04T19:27:49.563+00:00",
  sale_assigned_to_id: null,
  email: null,
  sales_steps: {},
  instagram_reel_url: null,
  customer_website_url: null,
  dns_txt_records: {},
  leadNumber: 8,
  callUrl: "+12603122565"
};

const Chart = () => {
  return (
    <Box maxW="lg" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg" boxShadow="md" bg="white">
      <Heading size="md" mb={2}>{businessData.name}</Heading>
      <Badge colorScheme="pink" mb={2}>{businessData.category}</Badge>
      <Text color="gray.600" mb={1}><b>Location:</b> {businessData.location}</Text>
      <Text color="gray.600" mb={1}><b>Address:</b> {businessData.address}</Text>
      <Text color="gray.600" mb={1}><b>Phone:</b> <Link href={`tel:${businessData.phone}`}>{businessData.phone}</Link></Text>
      <Text color="gray.600" mb={1}><b>Status:</b> {businessData.status}</Text>
      <Text color="gray.600" mb={1}><b>Lead Number:</b> {businessData.lead_number}</Text>
      <Text color="gray.600" mb={1}><b>Review Count:</b> {businessData.review_count}</Text>
      <Text color="gray.600" mb={1}><b>Source:</b> {businessData.source}</Text>
      <Divider my={3} />
      <Stack spacing={2}>
        <Link href={businessData.website_url} color="blue.500" isExternal>{businessData.website_label}</Link>
        {businessData.facebook_url && <Link href={businessData.facebook_url} color="blue.600" isExternal>Facebook</Link>}
        {businessData.instagram_url && <Link href={businessData.instagram_url} color="pink.500" isExternal>Instagram</Link>}
        {businessData.youtube_url && <Link href={businessData.youtube_url} color="red.500" isExternal>YouTube</Link>}
        <Link href={`tel:${businessData.call_url}`} color="teal.500">{businessData.call_label}</Link>
      </Stack>
      <Divider my={3} />
      <Text fontSize="sm" color="gray.400">Created: {businessData.created_at}</Text>
      <Text fontSize="sm" color="gray.400">Last Updated: {businessData.updated_at}</Text>
    </Box>
  );
};

export default Chart;