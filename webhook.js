require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.raw({ type: 'application/json' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

app.post('/webhook', (req, res) => {
  console.log('Webhook received!');
  res.status(200).json({ received: true });
});
