
# Weekend Project: OOP and DOM Manipulation with JavaScript and jQuery

  

## You will be developing a voting machine simulator for this weekend's project. The HTML and CSS has already been built for you. Your job is to be able to add the missing functionality for this app. In order to achieve your goals, you will be using JavaScript object-oriented principles (classes) as well as jQuery to add user interaction to your page.

  

## Setup

1. Change directory into your ```wyncode``` folder.

2. Clone the following repo ```https://github.com/wyncode/js-voter-sim.git```

3. Change directory into the cloned project.

4. Run ```npm install``` in your console.

  

## Instructions

### OOP section

1. Create four global arrays named ```voters```, ```democrat-candidates```, ```republican-candidates```, and ```independent-candidates```.

2. Create a **class** named ```Person```. The constructor method should take 1 parameter ```name```.

3. Create a **class** named ```Voter``` that inherits from ```Person```. The constructor for this class should take 2 parameters ```name``` and ```ideology```. Remember to use ```super```! Whenever you create a new ```Voter```, push it into the ```voters``` array.

4. Create a **class** named ```Candidate``` that inherits from ```Person```. The constructor for this class should take 2 parameters ```name``` and ```party```. Remember to use ```super```! All candidates should have a property ```votes``` which is initialized to the numeric value ```0```.

Whenever you create a new ```Candidate```, push it into the ```candidate``` array for their party. e.g. If the newly created ```Candidate```'s ```party``` property is equals to ```independent``` push said candidate into the ```independent-candidates``` array.

  

### jQuery

1. Add an event listener for the **submit** event of the Voter form. The event handler for this event should take the values in both the form text input and dropdown and create a new ```Voter``` instance. Afterwards it must create an ```<li>``` DOM element with the following class ```"list-group-item"```. Then it must append said ```<li>``` to the ```<ul>``` in the voter list ```<div>```.

2. Add an event listener for the **submit** event of the Candidate form. The event handler for this event should take the values in both the form text input and dropdown and create a new ```Candidate``` instance. Afterwards it must create an ```<li>``` DOM element with the following class ```"list-group-item"```. Then it must append said ```<li>``` to the ```<ul>``` in the candidate list ```<div>```.

3.  **BONUS (HARD)** Add an event listener for the **click** event for the Randomize button. When clicked this button should create 100 instances of the ```Voter``` class. Selecting a random ideology is easy. However, what about creating random names? Research an ```npm``` package named ```faker```. Use it to create the names for the ```Voters```.

4. Add an event listener for the **click** event of the Vote button. The event handler for this event should execute the ```vote``` function, which you will define in the next session.

  

### The Vote function

1. Create a function called ```vote``` which is in charge of determining who wins the election.

2. This function should go over each of the voters in the ```voters``` array.

3. For each voter, determine what party they voted for.

	3a. If the ```Voter```'s ```ideology``` property is equal to ```liberal```, the voter has a 60 percent chance of voting democratic, 20 percent chance of voting independent, and 20 percent chance of voting republican.

	3b. If the ```Voter```'s ```ideology``` property is equal to ```neutral```, the voter has a 50 percent chance of voting independent, 25 percent chance of voting democratic, and 25 percent chance of voting republican.

	3c. If the ```Voter```'s ```ideology``` property is equal to ```conservative```, the voter has a 60 percent chance of voting republican, 20 percent chance of voting independent, and 20 percent chance of voting democratic.

4. Once you have determined for what party the ```Voter``` will vote, pick a random ```Candidate``` from the party's array (```democrat-candidates```, ```independent-candidates```, ```republican-candidates```) and increase its ```votes``` property by 1.

5. Finally, go through each one of the Candidates arrays and find the candidate with the most total votes. Use an alert box to declare the name of the winner.

Note: Understand that you can (and should) divide this ```function``` into multiple ```functions```.# js-voter-sim
