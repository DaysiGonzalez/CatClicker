const catsNames = ['Teddy', 'Cupcake', 'Pascal', 'Simba', 'Tiger']

let catsList = document.createElement('ul');

for (cat of catsNames) {
	let catItem = document.createElement('li');
	catItem.innerHTML = cat;
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
