var randomNumbers = [];

function setup() {
	for(var i=0 ; i<101 ; i++){
		randomNumbers[i] = floor(random(10,100));
		print(">>I place the ranodm number "+randomNumbers[i]+"into position no. "+i);
	}
}