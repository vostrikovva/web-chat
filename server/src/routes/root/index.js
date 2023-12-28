const { Router } = require('express');

const router = Router();

router
  .get('/', (_, res) => {
    res.send('Welcome to the root page!');
  })
  .get('/request', (req, res) => {
    res.send(`<html><body><pre><code>${JSON.stringify(req.headers, null, 4)}</code></pre></body></html>`);
  });

module.exports = router;
