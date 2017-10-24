var model = {
	iconImages : ["images/coffee.png", "images/chefHat.png", "images/vacation.png"]
}
console.log(model.iconImages);
var viewModel = {
	iconsArray : ko.observableArray(["images/coffee.png", "images/chefHat.png", "images/vacation.png"]),
}