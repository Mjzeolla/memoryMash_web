# Pre-work - _Memory Mash_

**Memory Mash** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Michael Zeolla**

Time spent: **3** hours spent in total

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tab), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:


* [x] User can select between multiple different difficulties
* [x] User can choose between two board sizes
* [x] Different amount of strikes depending on difficulty
* [x] Time playback speeds scales per difficulty
* [x] Drop down buttons that display different modes

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://i.imgur.com/FfhGXTa.gif' title='Video' width='' alt='Video Walkthrough' />
<img src='https://i.imgur.com/TazZ5XO.gif' title='Video' width='' alt='Video Walkthrough' />
<img src='https://i.imgur.com/5uqoyLt.gif' title='Video' width='' alt='Video Walkthrough' />
<img src='https://i.imgur.com/qTqoOZr.gif' title='Video' width='' alt='Video Walkthrough' />
<img src='https://i.imgur.com/GRqa7Ik.gif' title='Video' width='' alt='Video Walkthrough' />
<img src='https://i.imgur.com/6MB8oG4.gif' title='Different Board Size' width='' alt='Video Walkthrough' />

GIF created with [LiceCap](http://www.cockos.com/licecap/).

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

   [Stack Over Flow, W3 Schools, Tutorialspoint]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   
   [One challenge I encountered was deciding how to implement the different game difficulties and the game board sizes. I was unsure how to implement
   the option for a user to select from a wide arrange of buttons, without having individual buttons for each. Having a button for each option would become
   unbelievably messy, and is not a valid solution. I knew that drop-down buttons exist since they are common in mobile development, but I was unsure of how
   to code them in HTML. To solve this issue I decided to do some research into the topic and discovered multiple stack overflow posts that helped me implement
   the drop-down buttons. Google is the most useful resource that you can have when trying to fix a bug or learn something new, especially stack overflow.
   After I encounter a bug and can't seem to fix it on my own, I will attempt to find some type of help online in forms or guides. Another challenge I encountered was finding
   the correct way to format the different options for Board Sizes. I wanted to have a 4 card mode and a 6 card mode, and the issue was that specific cards kept changing indexes,
   which could be difficult for a user to look at. To fix this I decided to create a second format of game buttons which I could then hide and unhide when the user swapped between
   the different modes. Ultimately I would say that my solution is a success, while better alternative options might exists.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   
   [One major question I have about web development is how to host and maintain a personal website. I am very interested in learning how to
   run my website, such as getting a custom domain. I always planned on building a website for my resume that people can look at, and now that
   I have completed this submission I can't wait to start building that. Another question I have is how many other websites are simplistic like this one.
   Overall I feel like the implementation of the game is not too complex, yet the result is very exciting. I am also interested in knowing
   how complex major websites can become, such as managing user information with some type of system storage back-end, as well as how to make these complex
   and difficult websites. What types of back-end services are used to store this information, and what kind of tools are necessary to maintain such a website?
   What other special features can be implemented besides the basic ones we learned in this submission to make a website pop out above the rest?
   I hope I can learn to build more complex and innovative websites on my own.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   
   [One feature I would like to implement would be to not allow user input until after the playback sequence is shown in its entirety. Users can currently input information as the playback is occurring
   which makes the system less fair. I believe this could be done by setting some type of lock boolean that is checked when taking user input, and the boolean is only set true once the entire sequence is completed.
   Furthermore, I was also thinking about implementing a timer, as well as a leaderboard for recording scores. When the game begins a timer will begin, and then once the game is completed
   the user can upload that time to the leaderboard, where it will be checked against the top ten scores. If it belongs in the leaderboard then the leaderboard will update accordingly. Lastly, I would go through
   and comment on my code, as well as condense my code by re-writing repeated code into a helper function.]

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
