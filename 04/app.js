function runTimer() {
	let counter = 0;
	const idInterval = setInterval(() => {
		const time = new Date().toLocaleTimeString();
		console.log(time);
		counter++;
		console.log(counter);
		if (counter >= 5) {
			clearInterval(idInterval);
			console.log("stop");
		}
	}, 5000);
}
runTimer();
