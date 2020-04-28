const options = document.querySelector('.playerOptions');
const newButton = options.querySelector('.newGameButton');
const leftButton = options.querySelector('.optionleft');
const rightButton = options.querySelector('.optionright');
const lastEndingButton = options.querySelector('.lastEnding');
const theVideo = player.querySelector('.viewer');
var scriptRanOnceAlready = false;

var alreadyDecided = false;

var currentStage = "danger";

var randomVal = Math.floor((Math.random() * 10) + 1);

var isThereACat = false;

var enemiesLeftShootout = 4;

if(localStorage.getItem("currentStage") != null){
	currentStage = localStorage.getItem("currentStage");
}

/*if(localStorage.getItem("enemiesLeftShootout") != null){
	enemiesLeftShootout = localStorage.getItem("enemiesLeftShootout");
}*/
leftButton.textContent = "hugabuga bucha";

newButton.addEventListener('click', NewGame);
UpdateStage();
alreadyDecided = false;
leftButton.addEventListener('click', function(){
	if(currentStage == "danger" && !alreadyDecided){
		currentStage = 'first';
		UpdateStage();
		UpdateButtons();
		togglePlay();
		
		
	}
	if(currentStage == "first" && !alreadyDecided){

		currentStage = 'checkTruck';
		UpdateStage();
		UpdateButtons();
		togglePlay();
		
		

	}

	if(currentStage == "checkContainer" && !alreadyDecided){
		currentStage = 'pickupPistol';
		UpdateStage();
		UpdateButtons();
		togglePlay();
		
		
	}

	if(currentStage == "checkTruck" && !alreadyDecided){
		currentStage = 'first';
		UpdateStage();
		UpdateButtons();
		togglePlay();
			
	}

	if(currentStage == "pickupPistol" && !alreadyDecided){
		currentStage = 'pickupBlaster';
		UpdateStage();
		UpdateButtons();
		togglePlay();

	}

	if(currentStage == "pickupBlaster" && !alreadyDecided){
		currentStage = 'inADaze';
		UpdateStage();
		UpdateButtons();
		togglePlay();

	}

	if(currentStage == "rustle1" && !alreadyDecided){
		currentStage = 'shootAtBush';
		UpdateStage();
		UpdateButtons();
		togglePlay();

	}

	if(currentStage == "braceForCat" && !alreadyDecided){
		currentStage = 'petTheCat';
		UpdateStage();
		UpdateButtons();
		togglePlay();

	}

	if(currentStage == "petTheCat" && !alreadyDecided){
		currentStage = 'secondRustling';
		yesCat = true;
		UpdateStage();
		UpdateButtons();
		togglePlay();

	}

	if(currentStage == "secondRustling" && !alreadyDecided){
		randomVal = Math.floor((Math.random() * 10) + 1);
		if(randomVal < 5){
			currentStage = 'hostileLeft';
			UpdateStage();
			UpdateButtons();
			togglePlay();
		}
		else{
			currentStage = 'hostileRight';
			UpdateStage();
			UpdateButtons();
			togglePlay();
		}
		isThereACat = true;

	}

	if(currentStage == "shootAtBush" && !alreadyDecided){
		randomVal = Math.floor((Math.random() * 10) + 1);
		if(randomVal < 5){
			currentStage = 'hostileLeft';
			UpdateStage();
			UpdateButtons();
			togglePlay();
		}
		else{
			currentStage = 'hostileRight';
			UpdateStage();
			UpdateButtons();
			togglePlay();
		}

	}

	if(currentStage == "hostileLeft" && !alreadyDecided){
		currentStage = 'leftCorrect';
		UpdateStage();
		UpdateButtons();
		togglePlay();

	}

	if(currentStage == "hostileRight" && !alreadyDecided){
		currentStage = 'rightMiss';
		UpdateStage();
		UpdateButtons();
		togglePlay();

	}

	if(currentStage == "leftCorrect" && !alreadyDecided){
		randomVal = Math.floor((Math.random() * 10) + 1);
		enemiesLeftShootout -= 1;
		if(enemiesLeftShootout <= 0){
			if(isThereACat){
				currentStage = 'yesCat';
				UpdateStage();
				UpdateButtons();
				togglePlay();
			}
			else{
				currentStage = 'noCat';
				UpdateStage();
				UpdateButtons();
				togglePlay();
			}
		}else{
			if(randomVal < 5){
				currentStage = 'hostileLeft';
				UpdateStage();
				UpdateButtons();
				togglePlay();
			}
			else{
				currentStage = 'hostileRight';
				UpdateStage();
				UpdateButtons();
				togglePlay();
			}
		}

	}

	if(currentStage == "rightCorrect" && !alreadyDecided){
		randomVal = Math.floor((Math.random() * 10) + 1);
		enemiesLeftShootout -= 1;
		if(enemiesLeftShootout <= 0){
			if(isThereACat){
				currentStage = 'yesCat';
				UpdateStage();
				UpdateButtons();
				togglePlay();
			}
			else{
				currentStage = 'noCat';
				UpdateStage();
				UpdateButtons();
				togglePlay();
			}
		}else{
			if(randomVal < 5){
				currentStage = 'hostileLeft';
				UpdateStage();
				UpdateButtons();
				togglePlay();
			}
			else{
				currentStage = 'hostileRight';
				UpdateStage();
				UpdateButtons();
				togglePlay();
			}
		}

	}

	if(currentStage == "leftMiss" && !alreadyDecided){
		NewGame();

	}

	if(currentStage == "inADaze" && !alreadyDecided){
		NewGame();

	}

	if(currentStage == "noCat" && !alreadyDecided){
		NewGame();

	}
	alreadyDecided = false;
});

rightButton.addEventListener('click', function(){
	if(currentStage == "danger" && !alreadyDecided){
		currentStage = 'first';
		UpdateStage();
		UpdateButtons();
		togglePlay();
		
		
	}
	if(currentStage == "first" && !alreadyDecided){
	
		currentStage = 'checkContainer';
		
		UpdateStage();
		UpdateButtons();
		togglePlay();
		
		
	}

	if(currentStage == "checkTruck" && !alreadyDecided){
		currentStage = 'first';
		UpdateStage();
		UpdateButtons();
		togglePlay();
			
	}

	if(currentStage == "checkContainer" && !alreadyDecided){
		currentStage = 'first';
		UpdateStage();
		UpdateButtons();
		togglePlay();
			
	}

	if(currentStage == "pickupPistol" && !alreadyDecided){
		currentStage = 'rustle1';
		UpdateStage();
		UpdateButtons();
		togglePlay();

	}

	if(currentStage == "pickupBlaster" && !alreadyDecided){
		currentStage = 'inADaze';
		UpdateStage();
		UpdateButtons();
		togglePlay();

	}

	if(currentStage == "rustle1" && !alreadyDecided){
		currentStage = 'braceForCat';
		UpdateStage();
		UpdateButtons();
		togglePlay();

	}

	if(currentStage == "braceForCat" && !alreadyDecided){
		currentStage = 'petTheCat';
		UpdateStage();
		UpdateButtons();
		togglePlay();

	}

	if(currentStage == "petTheCat" && !alreadyDecided){
		currentStage = 'secondRustling';
		UpdateStage();
		UpdateButtons();
		togglePlay();

	}

	if(currentStage == "secondRustling" && !alreadyDecided){
		randomVal = Math.floor((Math.random() * 10) + 1);
		if(randomVal < 5){
			currentStage = 'hostileLeft';
			UpdateStage();
			UpdateButtons();
			togglePlay();
		}
		else{
			currentStage = 'hostileRight';
			UpdateStage();
			UpdateButtons();
			togglePlay();
		}
		isThereACat = true;

	}



	if(currentStage == "shootAtBush" && !alreadyDecided){
		randomVal = Math.floor((Math.random() * 10) + 1);
		if(randomVal < 5){
			currentStage = 'hostileLeft';
			UpdateStage();
			UpdateButtons();
			togglePlay();
		}
		else{
			currentStage = 'hostileRight';
			UpdateStage();
			UpdateButtons();
			togglePlay();
		}

	}

	if(currentStage == "hostileLeft" && !alreadyDecided){
		currentStage = 'leftMiss';
		UpdateStage();
		UpdateButtons();
		togglePlay();

	}
	if(currentStage == "hostileRight" && !alreadyDecided){
		currentStage = 'rightCorrect';
		UpdateStage();
		UpdateButtons();
		togglePlay();

	}

	if(currentStage == "leftCorrect" && !alreadyDecided){
		randomVal = Math.floor((Math.random() * 10) + 1);
		enemiesLeftShootout -= 1;
		if(enemiesLeftShootout <= 0){
			if(isThereACat){
				currentStage = 'yesCat';
				UpdateStage();
				UpdateButtons();
				togglePlay();
			}
			else{
				currentStage = 'noCat';
				UpdateStage();
				UpdateButtons();
				togglePlay();
			}
		}else{
			if(randomVal < 5){
				currentStage = 'hostileLeft';
				UpdateStage();
				UpdateButtons();
				togglePlay();
			}
			else{
				currentStage = 'hostileRight';
				UpdateStage();
				UpdateButtons();
				togglePlay();
			}
		}

	}

	if(currentStage == "rightCorrect" && !alreadyDecided){
		randomVal = Math.floor((Math.random() * 10) + 1);
		enemiesLeftShootout -= 1;
		if(enemiesLeftShootout <= 0){
			if(isThereACat){
				currentStage = 'yesCat';
				UpdateStage();
				UpdateButtons();
				togglePlay();
			}
			else{
				currentStage = 'noCat';
				UpdateStage();
				UpdateButtons();
				togglePlay();
			}
		}else{
			if(randomVal < 5){
				currentStage = 'hostileLeft';
				UpdateStage();
				UpdateButtons();
				togglePlay();
			}
			else{
				currentStage = 'hostileRight';
				UpdateStage();
				UpdateButtons();
				togglePlay();
			}
		}

	}

	if(currentStage == "rightMiss" && !alreadyDecided){
		NewGame();

	}

	if(currentStage == "inADaze" && !alreadyDecided){
		NewGame();

	}

	if(currentStage == "noCat" && !alreadyDecided){
		NewGame();

	}
	alreadyDecided = false;
});

function UpdateStage(){
	alreadyDecided = true;
	localStorage.setItem("currentStage", currentStage);
	if(currentStage == "danger"){
		theVideo.src = 'DangerMsg.mp4';

		leftButton.textContent = 'Continue';
		rightButton.textContent = 'Continue';
	}
	if(currentStage == "first"){
		theVideo.src = 'testgitsize.mp4';

		leftButton.textContent = 'Check Truck';
		rightButton.textContent = 'Check Container';
	}
	if(currentStage == "checkTruck"){
		theVideo.src = 'checkTruck.mp4';

		leftButton.textContent = 'Nothing useful here';
		rightButton.textContent = 'Go Back';
	}
	if(currentStage == "checkContainer"){
		theVideo.src = 'checkcontainer.mp4';

		leftButton.textContent = 'Pickup Pistol';
		rightButton.textContent = 'Go Back'
	}
	if(currentStage == "pickupPistol"){
		theVideo.src = 'PickupPistol.mp4';

		leftButton.textContent = 'Go for the plasma blaster';
		rightButton.textContent = 'I need to get out of here';
	}
	if(currentStage == "rustle1"){
		theVideo.src = 'RustlingInTheBushes.mp4';

		leftButton.textContent = 'Shoot A Warning Shot';
		rightButton.textContent = 'Stand Still';
	}
	if(currentStage == "pickupBlaster"){
		theVideo.src = 'GrabPlasmaBlasterCompressed.mp4';

		leftButton.textContent = 'Lie still';
		rightButton.textContent = 'Attempt to get up'
	}
	if(currentStage == "inADaze"){
		theVideo.src = 'inADazeCompressed.mp4';

		leftButton.textContent = 'Game Over';
		rightButton.textContent = 'Start Over';
		localStorage.setItem("lastEndingVal", "You hallucinated your way into the after life");
	}
	if(currentStage == "shootAtBush"){
		theVideo.src = 'ShootAtRustling_Trim.mp4';

		leftButton.textContent = 'Get Ready';
		rightButton.textContent = 'Get Ready';
	}
	if(currentStage == "hostileLeft"){
		theVideo.src = 'LeftFootstepsInTheSmokeHW3.mp4';

		leftButton.textContent = 'Shoot Left';
		rightButton.textContent = 'Shoot Right';
	}
	if(currentStage == "hostileRight"){
		theVideo.src = 'RightFootstepsInTheSmokeHW3.mp4';

		leftButton.textContent = 'Shoot Left';
		rightButton.textContent = 'Shoot Right';
	}
	if(currentStage == "leftCorrect"){
		theVideo.src = 'LeftSmokeHitHW3.mp4';

		leftButton.textContent = 'Next';
		rightButton.textContent = 'Next';
	}
	if(currentStage == "rightCorrect"){
		theVideo.src = 'RightSmokeHitHW3_Trim.mp4';

		leftButton.textContent = 'Next';
		rightButton.textContent = 'Next';
	}
	if(currentStage == "leftMiss"){
		theVideo.src = 'LeftSmokeMissHW3.mp4';

		leftButton.textContent = 'You Died';
		rightButton.textContent = 'Start Over';
		localStorage.setItem("lastEndingVal", "You died from not being one with the force");
	}
	if(currentStage == "rightMiss"){
		theVideo.src = 'RightSmokeMissHW3.mp4';

		leftButton.textContent = 'You Died';
		rightButton.textContent = 'Start Over';
		localStorage.setItem("lastEndingVal", "You died from not being one with the force");
	}
	if(currentStage == "noCat"){
		theVideo.src = 'FinishShootingNoCatCompressed.mp4';

		leftButton.textContent = 'You Died';
		rightButton.textContent = 'Start Over';
		localStorage.setItem("lastEndingVal", "You got taken out from behind");
	}
	if(currentStage == "yesCat"){
		theVideo.src = 'FinishShootingWithCatCompressed.mp4';

		leftButton.textContent = 'You got the best ending';
		rightButton.textContent = 'Play Again';
		localStorage.setItem("lastEndingVal", "You made friends with the local beast");
	}
	if(currentStage == "braceForCat"){
		theVideo.src = 'CatApproachesGood.mp4';

		leftButton.textContent = 'Pet the good boy';
		rightButton.textContent = 'You have no choice';
	}
	if(currentStage == "petTheCat"){
		theVideo.src = 'PetTheKitty.mp4';

		leftButton.textContent = "It is a tracker. Store it.";
		rightButton.textContent = 'I have not finished animating the other choice';
	}
	if(currentStage == "secondRustling"){
		theVideo.src = 'SecondRustling.mp4';

		leftButton.textContent = "Protect the cat.";
		rightButton.textContent = 'Inadvertantly protect the cat';
	}
	console.log(currentStage);
}
function UpdateButtons(){
	if(currentStage == "checkContainer"){
		if(video.currentTime >= 7.698413){

			leftButton.setAttribute("style", "visibility:visible");
			rightButton.setAttribute("style", "visibility:visible");
		}else{
			leftButton.setAttribute("style", "visibility:hidden");
			rightButton.setAttribute("style", "visibility:hidden");

		}
	}
	if(currentStage == "checkTruck"){
		if(video.currentTime >= 11.28305){

			leftButton.setAttribute("style", "visibility:visible");
			rightButton.setAttribute("style", "visibility:visible");
		}else{
			leftButton.setAttribute("style", "visibility:hidden");
			rightButton.setAttribute("style", "visibility:hidden");

		}
	}
	if(currentStage == "pickupPistol"){
		if(video.currentTime >= 10.207125){

			leftButton.setAttribute("style", "visibility:visible");
			rightButton.setAttribute("style", "visibility:visible");
		}else{
			leftButton.setAttribute("style", "visibility:hidden");
			rightButton.setAttribute("style", "visibility:hidden");

		}
	}
	if(currentStage == "pickupBlaster"){
		if(video.currentTime >= 26.646893){

			leftButton.setAttribute("style", "visibility:visible");
			rightButton.setAttribute("style", "visibility:visible");
		}else{
			leftButton.setAttribute("style", "visibility:hidden");
			rightButton.setAttribute("style", "visibility:hidden");

		}
	}
	if(currentStage == "rustle1"){
		if(video.currentTime >= 11.975182){

			leftButton.setAttribute("style", "visibility:visible");
			rightButton.setAttribute("style", "visibility:visible");
		}else{
			leftButton.setAttribute("style", "visibility:hidden");
			rightButton.setAttribute("style", "visibility:hidden");

		}
	}
	if(currentStage == "inADaze"){
		if(video.currentTime >= 61.958014){

			leftButton.setAttribute("style", "visibility:visible");
			rightButton.setAttribute("style", "visibility:visible");
		}else{
			leftButton.setAttribute("style", "visibility:hidden");
			rightButton.setAttribute("style", "visibility:hidden");

		}
	}
	if(currentStage == "shootAtBush"){
		if(video.currentTime >= 23.593514){

			leftButton.setAttribute("style", "visibility:visible");
			rightButton.setAttribute("style", "visibility:visible");
		}else{
			leftButton.setAttribute("style", "visibility:hidden");
			rightButton.setAttribute("style", "visibility:hidden");

		}
	}
	if(currentStage == "noCat"){
		if(video.currentTime >= 25.258953){

			leftButton.setAttribute("style", "visibility:visible");
			rightButton.setAttribute("style", "visibility:visible");
		}else{
			leftButton.setAttribute("style", "visibility:hidden");
			rightButton.setAttribute("style", "visibility:hidden");

		}
	}
	if(currentStage == "braceForCat"){
		if(video.currentTime >= 18.026802){

			leftButton.setAttribute("style", "visibility:visible");
			rightButton.setAttribute("style", "visibility:visible");
		}else{
			leftButton.setAttribute("style", "visibility:hidden");
			rightButton.setAttribute("style", "visibility:hidden");

		}
	}
	if(currentStage == "petTheCat"){
		if(video.currentTime >= 17.018567){

			leftButton.setAttribute("style", "visibility:visible");
			rightButton.setAttribute("style", "visibility:visible");
		}else{
			leftButton.setAttribute("style", "visibility:hidden");
			rightButton.setAttribute("style", "visibility:hidden");

		}
	}
	if(currentStage == "secondRustling"){
		if(video.currentTime >= 17.018567){

			leftButton.setAttribute("style", "visibility:visible");
			rightButton.setAttribute("style", "visibility:visible");
		}else{
			leftButton.setAttribute("style", "visibility:hidden");
			rightButton.setAttribute("style", "visibility:hidden");

		}
	}
	if(currentStage == "yesCat"){
		if(video.currentTime >= 34.421367){

			leftButton.setAttribute("style", "visibility:visible");
			rightButton.setAttribute("style", "visibility:visible");
		}else{
			leftButton.setAttribute("style", "visibility:hidden");
			rightButton.setAttribute("style", "visibility:hidden");

		}
	}



	if(localStorage.getItem("lastEndingVal") != null && currentStage == "first"){
		lastEndingButton.textContent = "Last Ending: " + localStorage.getItem("lastEndingVal");
		lastEndingButton.setAttribute("style", "visibility:visible");
	}
	else{
		lastEndingButton.setAttribute("style", "visibility:hidden");
	}

}

function NewGame(){
	if(scriptRanOnceAlready){
		enemiesLeftShootout = 6;
		currentStage = "danger";
		localStorage.setItem("currentStage", "danger");
		console.log("new game");
		location.reload();

	}

}
video.addEventListener('timeupdate', UpdateButtons);
scriptRanOnceAlready = true;
console.log(currentStage);