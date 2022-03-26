

const button = document.querySelector('a');
const container = document.querySelector('.container');

button.addEventListener('click', () => {
	const p = document.createElement('p');
	p.innerText = 'David';
	p.classList.add('name');
	container.append(p);
});





const davids = [
	'Beckham',
	'Schwimmer',
	'Matthews',
	'Spade',
	'Matthews',
	'Attenborough',
	'Hassselhoff',
	'Blain',
	'Letterman',
	'Cross',
	'Bowie',
	'Tennant',
	'Chapelle',
	'Lynch',
	'Franco',
	'Gilmour',
	'Carradine',
	'Duchovny',
	'Lee Roth',
	'Caruso',
	'Copperfield',
	'Hyde Pierce',
	'Byrn',
	'Fincher',
	'Navarro',
	'Arquette',
	'Mustaine',
]

davids.forEach((david, i) => {
	setTimeout(() => {
	const p = document.createElement('p');
	p.innerText = david;
	p.classList.add('name');
	container.append(p);

	}, i * 1000);
});