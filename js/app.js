const catsNames = [
	{name: 'Teddy', image: 'images/6243090894_8b8dd862cd_z.jpg'},
	{name: 'Cupcake', image: 'images/adorable-animal-cat-1643457.jpg'},
	{name: 'Pascal', image: 'images/38476480801_20b192ceff_k.jpg'},
	{name: 'Simba', image: 'images/animal-cat-face-close-up-416160.jpg'},
	{name: 'Tiger', image: 'images/animal-animal-photography-cat-57416.jpg'}
];

let catsList = document.createElement('ul');
document.getElementById("cat-image").style.visibility = "hidden";

for (cat of catsNames) {
	let catItem = document.createElement('li');
	let catListName = document.createElement('h3');
	catListName.innerHTML = cat.name;

	let catSmallImage = document.createElement('img');
	catSmallImage.src = cat.image;
	catSmallImage.classList.add('small-image');

	catItem.appendChild(catSmallImage);
	catItem.appendChild(catListName);

catItem.addEventListener('click', (function(catName, catImg){
		return function() {
			document.getElementById("cat-image").style.visibility = "visible";
			document.getElementById('cat-clicks').innerHTML = "0 clicks"
			document.getElementById('cat-info').innerHTML = catName;
			document.getElementById('cat-image').src = catImg;

			let clicks = 0;

			document.getElementById('cat-image').addEventListener('click', function(){
				clicks++;
				document.getElementById('cat-clicks').innerHTML = clicks + ' clicks';
			});


		};
	})(cat.name, cat.image));

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
