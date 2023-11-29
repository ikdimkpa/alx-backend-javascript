export default function handleResponseFromAPI(promise) {
	return promise
	.then(() =>	{status: 200, body: success})
		console.log("Got a response from the API");
	).catch(() => Error()).finally(() => { console.log("Got a response from the API"); });
}
