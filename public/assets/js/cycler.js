// Reference of "Hello, World!" element.
var element = document.getElementById("hello-world");

// Step and fade duration.
var stepS = 6;
var fadeS = 0.5;

function fadeIn() {
	element.style.opacity = 1;
	element.style.transition = "opacity " + fadeS + "s";
}

function fadeOut() {
	setTimeout(function () {
		element.style.opacity = 0;
		element.style.transition = "opacity " + fadeS + "s";
	}, stepS * 1000 - 1000);
}

function fade() {
	fadeIn();
	fadeOut();
}

// Cycle "Hello, world!" in various languages.
function helloWorldCycler() {
	var str = element.innerText;

	// Function calls.
	var langFunctions = [
		'console.log("%s");',
		'printf("%s");',
		'std::cout << "%s";',
		'fmt.Println("%s")',
		'print("%s")',
	];

	var idx = 0;

	fadeOut();

	setInterval(function () {
		// Replace %s with "Hello, world!" (lazyness).
		element.innerText = langFunctions[idx].replace("%s", str);
		idx = ++idx % langFunctions.length;

		fade();
	}, stepS * 1000);
}

helloWorldCycler();
