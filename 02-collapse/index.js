const animationController = document
	.querySelector(".collapsible__content")
	.animate(
		// { width: ["0px", "800px"] },
		// { duration: 250, fill: "both", easing: "ease-out" }
		{ width: '600px', opacity: 0, cursor: 'default' },
		{ duration: 1000, fill: "both" }

	);

const animationController2 = document
	.querySelector(".collapsible__action--hidden")
	.animate(

		{ display: 'none', opacity: 0 },
		{ fill: "both" }

	);
const animationController3 = document
	.querySelector(".collapsible__button")
	.animate(

		{ width: '146px', height: '21px' },
		{ fill: "both" }

	);
animationController.pause();

document.querySelector("button").addEventListener("click", () => {
	if (animationController.playState === "paused") {
		animationController.play();
	} else {
		animationController.reverse();
	}
});

const button = document

animationController.onfinish = (event) => {

	event.currentTime === 0 ? (document.querySelector("button").textContent = 'Скрыть содержимое') : (document.querySelector("button").textContent = 'Показать содержимо');

};

