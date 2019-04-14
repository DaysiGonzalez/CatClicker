var model = {
	currentCat: null,
	catsNames: [
		{
			name: 'Teddy',
			image: 'images/6243090894_8b8dd862cd_z.jpg',
			clicks: 0
		},
		{
			name: 'Cupcake',
			image: 'images/adorable-animal-cat-1643457.jpg',
			clicks: 0
		},
		{
			name: 'Pascal',
			image: 'images/38476480801_20b192ceff_k.jpg',
			clicks: 0
		},
		{
			name: 'Simba',
			image: 'images/animal-cat-face-close-up-416160.jpg',
			clicks: 0
		},
		{
			name: 'Tiger',
			image: 'images/animal-animal-photography-cat-57416.jpg',
			clicks: 0
		}
	]
};

var octopus = {
	init: function(){
		model.currentCat = model.catsNames[0];
		catListView.init();
		catView.init();
	},

	getCurrentCat: function(){
		return model.currentCat;
	},

	getCats: function(){
		return model.catsNames;
	},

	setCurrentCat: function(cat){
		model.currentCat = cat;
	},

	incrementCounter: function(){
		model.currentCat.clicks++;
		catView.render();
	}
};

var catListView = {
	init: function (){
		this.catsList = document.getElementById('cat-list');
		this.render();
	},

	render: function(){
		let cat;
		let cats = octopus.getCats();
		this.catsList.innerHTML = '';

		for (cCat of cats) {
			cat = cCat;

			let catItem = document.createElement('li');
			let catListName = document.createElement('h3');
			let catSmallImage = document.createElement('img');

			catListName.innerHTML = cat.name;
			catSmallImage.src = cat.image;
			catSmallImage.classList.add('small-image');

			catItem.appendChild(catSmallImage);
			catItem.appendChild(catListName);

			catItem.addEventListener('click', (function(catCopy){
					return function(){
						octopus.setCurrentCat(catCopy);
						catView.render();
					}
			})(cat));
			this.catsList.appendChild(catItem);
		}
	}
};

var catView = {
	init: function(){
		this.catElem = document.getElementById('visible-cat');
		this.catNameElem = document.getElementById('cat-info');
		this.catImageElem = document.getElementById("cat-image");
		this.catCountElem = document.getElementById('cat-clicks');

		this.catImageElem.addEventListener('click', function(){
			octopus.incrementCounter();
		});

		this.render();
	},

	render: function(){
		let currentCat = octopus.getCurrentCat();
		this.catCountElem.innerHTML = currentCat.clicks;
		this.catNameElem.innerHTML = currentCat.name;
		this.catImageElem.src = currentCat.image;
	}

};

octopus.init();
