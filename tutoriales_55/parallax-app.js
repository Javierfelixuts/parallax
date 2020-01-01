let parallax = document.querySelector(".parallax");
let butterfly = document.getElementById("butterfly");
function scroll(){
	let scroll = document.documentElement.scrollTop;
	parallax.style.transform = `translateY(${scroll * -0.3}px)`;
	butterfly.style.transform = `translate(${scroll * 0.9}px, ${scroll * 0.6}px )`;

	
	console.log(scroll)
}

window.addEventListener('scroll', scroll)
