import {
  Button,
  Container,
} from '@mantine/core';
import React from 'react';
import Nav from '../components/Nav';
import { useRouter } from 'next/router';

export default function Test() {
  const router = useRouter();
  return (
    <Container size={400} style={{ paddingTop: 80, paddingBottom: 120 }}>
      <Nav />
      <Button onClick={() => router.push('/')}>Test Button</Button>
    </Container>
  );
}
