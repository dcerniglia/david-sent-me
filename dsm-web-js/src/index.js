import { DAVIDS } from "./const.js";

const container = document.querySelector('.davids-container');
const form = document.querySelector('form');


DAVIDS.forEach((david, i) => {
	// setTimeout(() => {
		const p = document.createElement('p');
		p.innerText = david;
		p.classList.add('name', 'text-4xl', 'font-paytone');
		container.append(p);
	// }, i * 150);
});

setTimeout(() => {
	const names = document.querySelectorAll('.name');
	names.forEach((n) => {
		n.classList.add('opacity-10')
	});
	unhideInput();
}, 1000);

const unhideInput = () => {
	const input = document.querySelector('.hidden');
	input.classList.replace('hidden', 'flex');
	const submitBtn = document.querySelector('#submit')
	//click event works, but submit does not. maybe button has to be in form group?
	submitBtn.addEventListener('click', () => {
		console.log('Button pressed!')
		postShortUrl();
	});
}

let input;

window.addEventListener('DOMContentLoaded', () => {
	input = document.querySelector('input');
	console.log('DOM Content has been loaded')
});

const shortUrlEndpoint = 'http://localhost:3333/api/url/short';

const initialUrl = { longUrl: 'https://wwwon.com/gp/product/B07RVMZNYRf=ox_smage_2?smid=A3W1GP4TQNGUVI&psc=1' };

async function postShortUrl() {
	try {
		const url = document.querySelector('input').value;
		const longUrl = { longUrl: url };
		const res = await fetch(shortUrlEndpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': 'http://127.0.0.1:5500'
			},
			body: JSON.stringify(longUrl)
		});
		if (res.status === 200) {
			console.log(res)
			const shortUrlDiv = document.createElement('div');
			const shortUrl = await res.json();
			const shortUrlNode = document.createTextNode(shortUrl);

			shortUrlDiv.appendChild(shortUrlNode);

			const formContainer = document.getElementById('form-container');

			formContainer.replaceChildren(shortUrlDiv);
		}
	} catch (e) {
		console.log(e);
	}
};
