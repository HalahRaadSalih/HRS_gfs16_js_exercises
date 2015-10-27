

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function showMeTheFuture(){
	var numberOfChildren =[1,2,3,4,5,6,6,6,7,9];
	var partnerName = ["Jack","Jon", "Jane", "Sara", "Jessica", "Katie"];
	var location = ["Salzburg, Austria", "Iraq", "SF", "china"]; 
	var jobTitle = ["Product Manager", "Software engineer", "UX Designer", "Full Stack engineer", "Instructor"];

	var randomJobTitle = jobTitle[getRandomInt(0, jobTitle.length)];
	var randomLocation = location[getRandomInt(0, location.length)];
	var randomPartnerName = partnerName[getRandomInt(0, partnerName.length)];
	var randomNumberOfChildren = numberOfChildren[getRandomInt(0, numberOfChildren.length)];

	var kids = " kid" + ((randomNumberOfChildren > 1) ? "s" : "");

	return "You will be " + randomJobTitle + " in " + randomLocation + " and married to " + randomPartnerName + " with " + randomNumberOfChildren + kids;
}



console.log(showMeTheFuture());