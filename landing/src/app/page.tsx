import { Box, Button, Container, Grid, Typography, Divider, Stack, Paper } from '@mui/material';
import Image from 'next/image';

export default function Home() {
  return (
    <Container maxWidth="lg">
      {/* Block 1: Header Section */}
      <Grid container spacing={4} alignItems="center" sx={{ py: { xs: 4, md: 8 } }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h1" gutterBottom>
            Stay informed on DAO proposals with ease
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Get concise and customizable summaries of governance proposals to quickly understand what matters.
          </Typography>
          <Stack sx={{ mt: 3 }} justifyContent='stretch'>
            <Button variant="outlined" color="primary">
              Go To App
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image src="/hero-image-1.svg" alt="App preview 1" width={500} height={900} />
        </Grid>
      </Grid>

      {/* Block 2: Features Section */}
      <Grid container spacing={4} alignItems="center" sx={{ py: { xs: 4, md: 8 } }}>
        <Grid item xs={12} md={6}>
          <Image src="/hero-image-2.svg" alt="App preview 2" width={500} height={900} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" gutterBottom>
              Simplify Your Decision-Making Process
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6">Customizable Feed of Governance Proposals</Typography>
            <Typography variant="body1">
              Stay up-to-date on the DAOs that matter to you with a customizable and simple feed of governance proposal summaries.
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6">AI-Generated Summaries</Typography>
            <Typography variant="body1">
              Quickly understand what a proposal is about with AI-generated summaries that are easy to comprehend.
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6">Governance Information in One Place</Typography>
            <Typography variant="body1">
              Explore the governance flow of a particular DAO and read about tokens and what they govern, all in one easy-to-use interface.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Block 3: Missing Section - Help Shape the Future */}
      <Paper>
        <Box
          sx={{
            py: { xs: 4, md: 8 },
            backgroundColor: 'background.secondary', // Assuming a secondary color from the theme
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            px: { xs: 2, md: 6 },
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mb: { xs: 4, md: 0 },
            }}
          >
            <Image src="/fake-path/raccoon.png" alt="Mascot" width={250} height={250} />
          </Box>

          <Box
            sx={{
              flex: 2,
              textAlign: { xs: 'center', md: 'left' },
              ml: { md: 4 },
            }}
          >
            <Typography variant="h4" sx={{ mb: 2 }}>
              Help Shape the Future of Holdim
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 4 }}>
              We value your input and want to hear from you! Whether you're an active community member or just getting started, your feedback is crucial in helping us improve Holdim.
            </Typography>
            <Button variant="contained" color="primary" sx={{ alignSelf: 'end' }}>
              Message us
            </Button>
          </Box>
        </Box>
      </Paper>

      {/* Block 4: Vision Section */}
      <Box
        sx={{
          py: { xs: 4, md: 8 },
          textAlign: 'center',
          backgroundColor: 'background.secondary', // Default background color from the theme
          px: { xs: 2, md: 6 },
        }}
      >
        <Typography variant="h4" sx={{ mb: 4 }}>
          Our Vision for DAOs
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Image src="/fake-path/icon-beta.png" alt="Beta Release" width={50} height={50} />
              <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                Beta release
              </Typography>
              <Typography variant="body1">
                Get concise and customizable summaries of governance proposals to simplify your decision-making process.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Image src="/fake-path/icon-web3.png" alt="Web 3.0 Login" width={50} height={50} />
              <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                Web 3.0 login
              </Typography>
              <Typography variant="body1">
                Securely log in with your Web 3.0 profile for enhanced security and future integration with dApps.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Image src="/fake-path/icon-grants.png" alt="Grants" width={50} height={50} />
              <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                Grants
              </Typography>
              <Typography variant="body1">
                Apply for grants directly in the app to fund projects that align with your values and beliefs.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={6} sx={{ mt: 6 }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Image src="/fake-path/icon-discussions.png" alt="Discussions" width={50} height={50} />
              <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                Discussions
              </Typography>
              <Typography variant="body1">
                Participate in forum discussions directly in the app to join the DAO community and shape its future.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Image src="/fake-path/icon-voting.png" alt="Voting" width={50} height={50} />
              <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                Voting
              </Typography>
              <Typography variant="body1">
                Vote on Snapshot proposals directly in the app to have a say in the future of the DAOs you follow.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Image src="/fake-path/icon-integrations.png" alt="Integrations" width={50} height={50} />
              <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                Integrations
              </Typography>
              <Typography variant="body1">
                Seamlessly integrate with your favorite tools and services to enhance your DAO experience.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
