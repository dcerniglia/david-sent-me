

const button = document.querySelector('button');
const container = document.querySelector('.container');

button.addEventListener('click', () => {
	const p = document.createElement('p');
	p.innerText = 'David';
	p.classList.add('name');
	container.append(p);
});