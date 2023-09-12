const loop = (times, callback) => {
	for (let i = 0; i < times; i++) {
		callback(i);
	}
};

loop(100, i => {
    fetch('http://127.0.0.1:8080/06a925cb-4c3a-4303-94c7-79737bc0ecc3', { 
	method: 'POST',
	body: JSON.stringify({key: 'value'}),
	headers: {'X-Foo': 'Bar'},
})
	.then(response => response.text())
	.catch(err => console.error(err));

	console.log(`iteration number ${i}`)
});