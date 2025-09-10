import { Container, Box, Typography, Button, Stack } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 6 }}>
        <Stack spacing={2}>
          <Typography variant="h3" component="h1">
            Vite + React + TypeScript + MUI
          </Typography>
          <Typography color="text.secondary">
            You’re good to go. Edit <code>src/App.tsx</code> and save to hot-reload.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained">Primary Action</Button>
            <Button variant="outlined" color="secondary">
              Secondary
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
