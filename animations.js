var model = {
	icons : [
	{image: "images/coffee.png",
	banner: "For the price of the average cup of coffee Philabunace can provide 5 meals to neighbors in need! Make it a latte and it's 7 meals!",
	meals: "5 to 7 meals!"},
	{image: "images/chefHat.png",
	banner: "For the cost on the average Philabunace 'dinner out' Philabunace can feed 60 hungery people!",
	meals: "60 meals"},
	{image:"images/vacation.png",
	banner: "For less than the cost of a family vacation, you can change a life, by sponsoring a student at teh Philabundance Community Kitchen!"}
	]
}
console.log(model.icons[0].image);
var viewModel = {
	iconsArray : ko.observableArray(),

	getIcons: function () {
		//iterate over icons array and extract images for use in the iconsArray
		icons = [];
		for (i = 0; i < model.icons.length ; i ++) {
			icon = model.icons[i].image;
			icons.push(icon);
		}
		console.log(icons)
		this.iconsArray(icons);
	}
}