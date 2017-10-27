let stockImage = "No Image Found";
let cycleSpot = 0;
let model = {
	icons : [
	{
		title : "coffee",
		image: "images/coffee.png",
		banner: "For the price of the average cup of coffee Philabundance can provide 5 meals to neighbors in need! Make it a latte and it's 7 meals!",
		meals: "5 to 7 meals!"},
	{
		title: "dinner-out",
		image: "images/chefHat.png",
		banner: "For the cost on the average Philabundance 'dinner out' Philabunace can feed 60 hungery people!",
		meals: "60 meals"},
	{
		title: "vacation",
		image:"images/vacation.png",
		banner: "For less than the cost of a family vacation you can change a life, by sponsoring a student at the Philabundance Community Kitchen!",
		meals: "priceless"}
	]
}

let viewModel = {
	init : function () {
		this.setCycleSpot(cycleSpot);
	},

	iconsArray : ko.observableArray(model.icons),
	currentMeals : ko.observable(),
	currentBanner : ko.observable(),
	currentTitle : ko.observable(),
	currentImage : ko.observable(),

	setCycleSpot : function (cycleSpot) {
		spot = model.icons[cycleSpot];
		this.currentImage(spot.image);
		this.currentTitle(spot.title);
		this.currentBanner(spot.banner);
		this.currentMeals(spot.meals);
		this.setTimer();
	},

	setTimer : function() {
		setInterval(viewModel.nextSpot, 7000);
	},

	nextSpot : function() {
		if (cycleSpot === 2) {
			cycleSpot = 0;
		} else {
			cycleSpot += 1;
			viewModel.setCycleSpot(cycleSpot);
		}
	}
}
