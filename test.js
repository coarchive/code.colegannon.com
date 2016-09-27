// V A R I A B L E S
var timesVisited,
    currentTitle,
		currentState,
    imageElement = document.getElementById('img'),
    audioElement = document.getElementById('audio'),
		textElement = doucment.getElementById('text');
// F U N C T I O N S
function setText(string){
	textElement.innerHTML=string;
}
function getRandomNumber(n){
    return Math.floor((Math.random() * n) + 1);
}

// S T A T E
var danceOfDog = {
    music:function(){
			switch(getRandomNumber(9)){
			    case 1:
			        audioElement.src='https://dl.dropboxusercontent.com/s/nduw0g77r7py7yw/DOD.ogg';
			        audioElement.volume=0.6;
			    break;
			    case 2:
			        audioElement.src="https://dl.dropboxusercontent.com/s/wr7z9m7c9muowp8/0.5.ogg";
			        audioElement.volume=0.6;
			    break;
			    case 3:
			        audioElement.src="https://dl.dropboxusercontent.com/s/0dyle37qabrrsin/1.ogg";
			        audioElement.volume=0.6;
			    break;
			    case 4:
			    case 5:
			    case 6:
					case 7:
					case 8:
					case 9:
			        audioElement.src='https://dl.dropboxusercontent.com/s/4aha6f8rvn5yl1q/Dogsong.ogg';
			        audioElement.playbackRate=Math.random()+0.6;
			}
		},
    image:function(){imageElement.src='https://dl.dropboxusercontent.com/s/n1y1k64bb33dzrp/SmallAdog.gif';},
	  txt:function(){setText(timesHere);},
		plugin:function(){},
};
var Sans = {
	music:function(){
		if(!localStorage.getItem('sansSpecial')){
			audioElement.src='/resources/sans.ogg';
		}else{
			getRandomNumber(7)==2?audioElement.src='http://vignette2.wikia.nocookie.net/undertale/images/d/d3/Mus_zz_megalovania.ogg':audioElement.src='http://vignette2.wikia.nocookie.net/undertale/images/1/18/SongThatMightPlayWhenYouFightSans.ogg';
		}
	},
	image:function(){

	},
	txt:function(){},
	plugin:function(){}
};
var Asriel = {
	music:function(){

	},
	image:function(){},
	txt:function(){},
	plugin:function(){}
};
var Default = {
	music:function(){},
	image:function(){},
	txt:function(){},
	plugin:function(){}
};
//Website Code
(function stateDeterminer(){
	switch (timesVisited) {
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		currentState=danceOfDog;
		break;
		case 8:
		case 9:
		case 10:
		case 11:
		currentState=Sans;
		break;
		default:
		currentState=Asriel;
	}
})();
function stateWriter(state){
	state.music();
  state.image();
	state.txt();
	state.plugin();
}
stateWriter(currentState);
setInterval(function titleChanger(){if(currentTitle){document.title='Rekt';currentTitle=0;}else{document.title='Get';currentTitle=1;}},500);
