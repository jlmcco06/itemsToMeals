var model = {
	icons : [
	{
		title : "coffee",
		image: "images/coffee.png",
		banner: "For the price of the average cup of coffee Philabunace can provide 5 meals to neighbors in need! Make it a latte and it's 7 meals!",
		meals: "5 to 7 meals!"},
	{
		title: "dinner-out",
		image: "images/chefHat.png",
		banner: "For the cost on the average Philabunace 'dinner out' Philabunace can feed 60 hungery people!",
		meals: "60 meals"},
	{
		title: "vacation",
		image:"images/vacation.png",
		banner: "For less than the cost of a family vacation, you can change a life, by sponsoring a student at teh Philabundance Community Kitchen!",
		meals: "priceless"}
	]
}

var viewModel = {
	iconsArray : ko.observableArray(),

	getIcons: function () {
		//iterate over icons array and extract images for use in the iconsArray
		icons = [];
		for (i = 0; i < model.icons.length ; i ++) {
			icon = model.icons[i].image;
			icons.push(icon);
		}
		this.iconsArray(icons);
	}
}