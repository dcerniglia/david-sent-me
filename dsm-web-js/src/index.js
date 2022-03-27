

const container = document.querySelector('.container');



const davids = [
	'Beckham',
	'Spade',
	'Schwimmer',
	'Byrn',
	'Matthews',
	'Foley',
	'Attenborough',
	'Blain',
	'Hassselhoff',
	'Letterman',
	'Cross',
	'Bowie',
	'Tennant',
	'Chapelle',
	'Lynch',
	'Franco',
	'Gilmour',
	'Carradine',
	'Fincher',
	'Duchovny',
	'Grohl',
	'Lee Roth',
	'Caruso',
	'Copperfield',
	'Navarro',
	'Arquette',
	'Hyde Pierce',
	'Crosby',
	'Mustaine'
]

davids.forEach((david, i) => {
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
		n.classList.add('transition-opacity', 'transition-duration-1000', 'opacity-10')
	});
	unhideInput();
}, 5000);

const unhideInput = () => {
	const input = document.querySelector('.hidden');
	input.classList.replace('hidden', 'flex');
}
const davidDivs = document.querySelectorAll('.name');

