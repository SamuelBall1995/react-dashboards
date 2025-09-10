import { Box, Paper, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function Dashboard() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Quick Actions</Typography>
            <Button variant="contained" sx={{ mt: 2 }}>Run Report</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Summary</Typography>
            <Typography color="text.secondary">Some metrics can go here.</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
