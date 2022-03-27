

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
		p.classList.add('name', 'text-4xl', 'font-paytone', 'opacity-10');
		container.append(p);
	}, i * 150);
});


const davidDivs = document.querySelectorAll('.name');

