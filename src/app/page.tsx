'use client';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { Send as SendIcon, Home as HomeIcon } from '@mui/icons-material';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Paper elevation={0} sx={{ p: 3, mb: 4, bgcolor: 'primary.main', color: 'white' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <HomeIcon fontSize="large" />
            <Typography variant="h3" component="h1">
              Welcome to My New App ------------ Muthu
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ mt: 2, opacity: 0.9 }}>
            Built with Next.js 15, MUI, TypeScript, and Bun
          </Typography>
        </Paper>

        <Grid container spacing={4}>
          {/* <Grid item xs={12} md={6}> */}
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Contact Form
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                  <TextField
                    fullWidth
                    label="Name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    margin="normal"
                    required
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    startIcon={<SendIcon />}
                    sx={{ mt: 2 }}
                  >
                    Send Message
                  </Button>
                </Box>
              </CardContent>
            </Card>
          {/* </Grid>

          <Grid item xs={12} md={6}> */}
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Features
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {[
                    'Next.js 15 App Router',
                    'Material-UI Components',
                    'TypeScript Support',
                    'Bun Runtime',
                    'Responsive Design',
                    'Modern Development Experience'
                  ].map((feature, index) => (
                    <Paper 
                      key={index} 
                      elevation={1} 
                      sx={{ p: 2, mb: 1, bgcolor: 'grey.50' }}
                    >
                      <Typography variant="body1">✓ {feature}</Typography>
                    </Paper>
                  ))}
                </Box>
              </CardContent>
            </Card>
          {/* </Grid> */}
        </Grid>
      </Box>
    </Container>
  );
}