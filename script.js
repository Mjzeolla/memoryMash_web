/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */


const cluePauseTime = 200; //pause in between clues
const cueWaitTime = 1000; //wait time before starting playback of the clues

//Global Variables
var cueTime = 900;
var pattern = [];
var progress = 0;
var n = 4 //Number of guesses required
var subtractTime = 0;
var gamePlaying = false;
var tonePlaying = false;
var difficulty = 1;
var boardSizeVal = 4;
var strikes = 1;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCount = 0; //Value to count the num of guesses

// prints "hi" in the browser's dev tools console
console.log("hi");

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gameStart() {
  //Init variables
  cueTime = 900;
  if(difficulty == 2){
    subtractTime = 75;
    strikes = 2;
    setStrikes(strikes);
    n = 6;
  }
  else if(difficulty == 1){
    strikes = 1;
    subtractTime = 100;
    setStrikes(strikes);
  }
  else{
    subtractTime = 50;
    strikes = 3;
    setStrikes(strikes);
    n = 8;
  }
  for(var i=0; i<n;i++){
      pattern[i] = randomNum(1,boardSizeVal);
  }
  
  progress = 0;
  gamePlaying = true;

  document.getElementById("btn_start").classList.add("hidden");
  document.getElementById("btn_stop").classList.remove("hidden");
  playClueSequence();
}

function gameLost() {
  gameEnd();
  alert("Game Over. You don't have what it takes.");
}

function gameWon() {
  gameEnd();
  alert("Game Over. You won! Try a harder mode.");
}

function gameEnd() {
  //Change Variables
  gamePlaying = false;

  document.getElementById("btn_start").classList.remove("hidden");
  document.getElementById("btn_stop").classList.add("hidden");
}

//Function to light a button
function lightButton(btn) {
  if(boardSizeVal == 4)
    document.getElementById("btn" + btn).classList.add("lit");
  else{
    document.getElementById("btn" + btn + "_").classList.add("lit");
  }
}

//Fuction to clear the selected button
function clearButton(btn) {
  if(boardSizeVal == 4)
    document.getElementById("btn" + btn).classList.remove("lit");
  else{
    document.getElementById("btn" + btn + "_").classList.remove("lit");
  }
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, cueTime);
    setTimeout(clearButton, cueTime, btn);
  }
}

function playClueSequence() {
  guessCount = 0;
  let delay = cueWaitTime; //set delay to initial wait time

  for (let i = 0; i <= progress; i++) {
    console.log(
      "Play a clue: " + pattern[i] + " in " + delay + " milli seconds"
    );
    setTimeout(playSingleClue, delay, pattern[i]);
    delay += cueTime;
    delay += cluePauseTime;
  }
  cueTime -= subtractTime;
  console.log(cueTime);
  
}

function guess(btn) {
  console.log("user guessed square: " + btn);

  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCount] == btn) {
    //You guessed right!
    if (guessCount == progress) {
      //Check if Game Over
      if (progress == pattern.length - 1) {
        gameWon();
      }
      //Next set of clues
      else {
        progress++;
        playClueSequence();
      }
    } else {
      //Guess the next square
      guessCount++;
      
    }
  } else {
    if(strikes != 0){
      strikes--;
      setStrikes(strikes);
      playClueSequence();
    }
    else{
      gameLost();
    }
  }
}

function setBoard(param){
  if(param == 6){
    document.getElementById("game_btns2").classList.remove("hidden");
    document.getElementById("game_btns").classList.add("hidden");
  }
  else {
    document.getElementById("game_btns").classList.remove("hidden");
    document.getElementById("game_btns2").classList.add("hidden");
  }
}

function setStrikes(param){
  if(param == 0){
    document.getElementById("strikes 1").classList.add("hidden");
    document.getElementById("strikes 2").classList.add("hidden");
    document.getElementById("strikes 3").classList.add("hidden");
    document.getElementById("strikes 0").classList.remove("hidden");
  }
  else if(param == 1){
    document.getElementById("strikes 1").classList.remove("hidden");
    document.getElementById("strikes 2").classList.add("hidden");
    document.getElementById("strikes 3").classList.add("hidden");
    document.getElementById("strikes 0").classList.add("hidden");
  }
  else if(param == 2){
    document.getElementById("strikes 1").classList.add("hidden");
    document.getElementById("strikes 2").classList.remove("hidden");
    document.getElementById("strikes 3").classList.add("hidden");
    document.getElementById("strikes 0").classList.add("hidden");
  }
  else{
    document.getElementById("strikes 1").classList.add("hidden");
    document.getElementById("strikes 2").classList.add("hidden");
    document.getElementById("strikes 3").classList.remove("hidden");
    document.getElementById("strikes 0").classList.add("hidden");
  }
}


function gameDiff(param){
  if(param == 'Medium'){
    subtractTime = 75;
    difficulty = 2;
    strikes = 2;
    setStrikes(strikes);
    n = 6;
  }
  else if(param == 'Easy'){
    strikes = 1;
    difficulty = 1;
    subtractTime = 100;
    setStrikes(strikes);
  }
  else{
    subtractTime = 50;
    strikes = 3;
    difficulty = 3;
    setStrikes(strikes);
    n = 8;
  }
  for(var i=1;i<=boardSizeVal;i++){
    clearButton(i);
  }
  gameEnd();
  
}

function boardSize(param){
  if(param == 'Easy'){
    boardSizeVal = 4;
  }
  else{
    boardSizeVal = 6;
  }
  for(var i=1;i<=boardSizeVal;i++){
    clearButton(i);
  }
  gameEnd();
}


// Sound Synthesis Functions
const freqMap = {
  1: 200.6,
  2: 300.6,
  3: 350,
  4: 450.2,
  5: 500.2,
  6: 566.2,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
