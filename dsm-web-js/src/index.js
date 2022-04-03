import { DAVIDS } from "./const.js";



const container = document.querySelector('.container');




DAVIDS.forEach((david, i) => {
	setTimeout(() => {
		const p = document.createElement('p');
		p.innerText = david;
		p.classList.add('name', 'text-4xl', 'font-paytone');
		container.append(p);
	}, i * 150);
});

setTimeout(() => {
	const names = document.querySelectorAll('.name');
	names.forEach((n) => {
		n.classList.add('opacity-10')
	});
	unhideInput();
}, 5000);

const unhideInput = () => {
	const input = document.querySelector('.hidden');
	input.classList.replace('hidden', 'flex');
	const submitBtn = document.querySelector('#submit')
	submitBtn.addEventListener('submit', () => {
		const formData = new FormData(form)
		console.log(formData)
	});
}

const form = document.querySelector('form');

const submitForm = () => {
	console.log(form)
}

