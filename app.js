const express = require('express');
const got = require('got');

const url = 'https://storage.googleapis.com/public-assignments/generated.json';

const app = express();

const port = 3000;

app.get('/', (req, res) => {
	// got.stream(url).pipe(res);
	got.stream(url).on('data', chunk => {
		console.log(`Received ${chunk.length} bytes of data: ${JSON.parse(chunk)}`);
	});
});

app.listen(port, () => {
	console.log(`app litening on port ${port}`);
});
