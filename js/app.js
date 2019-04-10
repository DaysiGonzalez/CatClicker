const catsNames = [
	{name: 'Teddy', image: '6243090894_8b8dd862cd_z.jpg'},
	{name: 'Cupcake', image: 'adorable-animal-cat-1643457.jpg'},
	{name: 'Pascal', image: '38476480801_20b192ceff_k.jpg'},
	{name: 'Simba', image: 'animal-cat-face-close-up-416160.jpg'},
	{name: 'Tiger', image: 'animal-animal-photography-cat-57416.jpg'}
];

let catsList = document.createElement('ul');

for (cat of catsNames) {
	let catItem = document.createElement('li');
	catItem.innerHTML = cat.name;
	catsList.appendChild(catItem);
}

document.getElementById('cat-list').appendChild(catsList);

// var firstCatImage = document.getElementById('first-cat-image');
// var secondCatImage = document.getElementById('second-cat-image');
//
// document.getElementById("first-cat-info").innerHTML = firstCatName + ': 0';
// document.getElementById("second-cat-info").innerHTML = secondCatName + ': 0';
//
// firstCatImage.addEventListener('click', function(){
// 	firstCatClicks++;
// 	document.getElementById("first-cat-info").innerHTML = firstCatName + ': ' + firstCatClicks;
// }, false);
//
// secondCatImage.addEventListener('click', function(){
// 	secondCatClicks++;
// 	document.getElementById("second-cat-info").innerHTML = secondCatName + ': ' + secondCatClicks;
// }, false);
