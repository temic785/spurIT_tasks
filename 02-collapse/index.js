// const animationController = document
// 	.querySelector(".collapsible__content")
// 	.animate(
// 		// { width: ["0px", "800px"] },
// 		// { duration: 250, fill: "both", easing: "ease-out" }
// 		{ color: '#FBCEB1', /*position: 'relative',*/ height: '0px', background: '#293133', opacity: 0 },
// 		{ duration: 1000, fill: "both", easing: "ease-out" }
// 	);

// animationController.pause();

// document.querySelector("button").addEventListener("click", () => {
// 	if (animationController.playState === "paused") {
// 		animationController.play();
// 	} else {
// 		animationController.reverse();
// 	}
// });

// animationController.onfinish = (evt) => {
// 	console.log(
// 		"animation completed",
// 		evt.currentTime === 0 ? "closed" : "opened"
// 	);
// };








// const anim = document
// 	.querySelector(".collapsible")
// 	.animate(
// 		{ width: ["0px", "800px"] },
// 		{ duration: 250, fill: "both", easing: "ease-out" }
// 	);

// anim.pause();

// document.querySelector(".collapsible__button").addEventListener("click", () => {
// 	if (anim.playState === "paused") {
// 		anim.play();
// 	} else {
// 		anim.reverse();
// 	}
// });

// anim.onfinish = (evt) => {
// 	console.log(
// 		"animation completed",
// 		evt.currentTime === 0 ? "closed" : "opened"
// 	);
// };

// const collaps = document.getElementsByClassName('collapsible__button');
// for (i = 0; i < collaps.length; i++) {
// 	collaps[i].addEventListener('click', function () {
// 		this.classList.toggle('active')
// 	})
// }

// const keyframes = [
// 	//{ color: '#FBCEB1', overflow: 'hidden',/*position: 'relative',*/ height: '0px', width: ['0px', '100px'], background: '#293133', opacity: 0 },
// 	//	{ color: '#B5B8B1', overflow: 'hidden', height: '150px', width: ['0px', '100px'], background: '#293133', opacity: 1, fill: "both", easing: "ease-out" }

// 	{ width: ["0px", "800px"] },
// 	{ color: '#B5B8B1', overflow: 'hidden', height: '150px', width: ['0px', '100px'], background: '#293133', opacity: 1, fill: "both", easing: "ease-out" }
// ]
// const effectTimming = {
// 	duration: 1000,
// 	//iterations: Infinity
// }

// const animationController = document.querySelector('.collapsible__content').animate(keyframes, effectTimming)

// document.querySelector('.collapsible__button').addEventListener("click", () => {
// 	if (animationController.playState === "paused") {
// 		animationController.play();
// 	} else {
// 		animationController.reverse();
// 	}
// });

// animationController.onfinish = (evt) => {
// 	console.log(
// 		"animation completed",
// 		evt.currentTime === 0 ? "closed" : "opened"
// 	);
// };

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

