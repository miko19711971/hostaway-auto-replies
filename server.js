import express from 'express';
const app = express();

const PORT = process.env.PORT || 3000;

// Home page semplice
app.get('/', (req, res) => {
  res.send('HostAway Auto-Replies: service up');
});

// Healthcheck
app.get('/health', (req, res) => {
  res.status(200).json({
    ok: true,
    service: 'hostaway-auto-replies',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
