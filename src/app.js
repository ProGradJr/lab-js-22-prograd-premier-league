//Trial 1 - create a Manager array and return it



let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(managerName, managerAge, currentTeam, trophiesWon)
 {
  var Manager = [managerName, managerAge, currentTeam, trophiesWon]
  return Manager;

}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Trial 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here

function createFormation(formation){

  if(formation.length==0)
  {
  return null;
  }
  var play =
  {
    defender:formation[0],
    midfield: formation[1],
    forward: formation[2]
}
  return play;

}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Trial 3 - Filter players that debuted in ___ year

function filterByDebut(year)
{
  var arr=[];
  players.forEach(element => 
    {
    if (element.debut==year)
    {
    arr.push(element);
    }
    } 
  );
  return arr;
  }


//Trial 4 - Filter players that play at the position _______

function filterByPosition(position) {
  var arr = [];
  players.forEach(element => {
    if (element.position == position) {
      arr.push(element);
    }
  }
  );
  return arr;
}

//Trial 5 - Filter players that have won ______ award

function filterByAward(awardName) {
  let Array = [];
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name === awardName) {
        Array.push(players[i]);
      }
    }
  }
  return Array;
}

//Trial 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  let arr = [];
  let count = 0,m=0;
  let j;
  for (let i = 0; i < players.length; i++)
    {
      for (j = 0; j < players[i].awards.length; j++) {
        if (players[i].awards[j].name == awardName)
         {
            count++;       
        }
      }
    if (count == noOfTimes)
    {
      arr.push(players[i]);
    }
    count = 0;
  }
  return arr;
}


//Trial 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName, country) {
  let arr = [];
  let c = 0;
  for (let i = 0; i < players.length; i++) {
    if (players[i].country == country) {
      for (let j = 0; j < players[i].awards.length; j++) {
        if (players[i].awards[j].name == awardName) {
          arr[c++] = players[i];
        }
      }
    }
  }
  return arr;
}


//Trial 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  let arr = [];
  let c = 0;
  for (let i = 0; i < players.length; i++) {
    if (players[i].awards.length >= noOfAwards &&players[i].team == team &&players[i].age <= age) {
      arr[c++] = players[i];
    }
  }
  return arr;
}

//Challenge 1 - Sort players in descending order of their age

//Challenge 2 - Sort players beloging to _____ team in descending order of awards won

//Judgement 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Judgement 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
