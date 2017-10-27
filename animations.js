let stockImage = "No Image Found";
let cycleSpot = 0;
const model = {
	icons : [
	{
		cycleSpotPos : 0,
		title : "coffee",
		image : "images/coffee.png",
		banner : "For the price of the average cup of coffee, Philabundance can provide 5 meals to neighbors in need!",
		meals : "5 meals!"},
	{
		cycleSpotPos : 1,
		title: "dinner",
		image: "images/dinner.png",
		banner: "For the cost of the average Philadelphia 'dinner out', Philabunace can feed 60 hungry people!",
		meals: "60 meals!"},
	{
		cycleSpotPos : 2,
		title: "vacation",
		image:"images/vacation.png",
		banner: "For less than the cost of a family vacation you can change a life, by sponsoring a student at the Philabundance Community Kitchen!",
		meals: "Priceless!"}
	]
}

const viewModel = {
	init : function () {
		this.setCycleSpot(cycleSpot);
		var timer = setInterval(function() {
			if (cycleSpot === 2) {
				clearInterval(timer);
			} else {
				cycleSpot += 1;
			}
		viewModel.setCycleSpot(cycleSpot);
	}, 7000);

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
	}
}
