/**************************
OBJECTS
***********************
An object is a data type that constists of key/value pairs. 

let name = {
    (1)    (2)
  key   :   'value';
  (3)  (4)    (5)
}
1- Name of the object, how its identified
2- All of the data for an object is contained in curly braces
3- this is the name of the specific data inside the object
4- The data name and value are separated by a colon
5- The value of the data. Each key/value pairing ends with a comma */

let netflix = {
    id: 9,
    name: "Super Store",
      season1: {
        seasonInfo: {
          episodeInfo : [ //an array is usefuly here to store similar objects. ie these are all season 1 info
            { episode: 1, episodeName: "Pilot"},
            { episode: 2, episodeName: "Magazine Profile"},
            { episode: 3, episodeName: "Shots and Salsa"},
            { episode: 4, episodeName: "Mannequin"},
            { episode: 5, episodeName: "Shoplifter"},
            { episode: 6, episodeName: "Secret Shopper"},
            { episode: 7, episodeName: "Color Wars"},
            { episode: 8, episodeName: "Wedding Day Sale"},
            { episode: 9, episodeName: "All-Nighter"},
            { episode: 10, episodeName: "Demotion"},
            { episode: 11, episodeName: "Labor"}
          ]
        }
      },
      season2: {},
      season3: {}
    };
  //console.log(netflix);// this wont read the whole thing it will iditify that there is an array but wont list it

 // console.log(netflix.name); // this will just iditify "Super Store"

  //console.log(netflix.season1); //still wont speficity the array just saying there are objects
  //console.log(netflix.season1.seasonInfo.episodeInfo);//this defines the whole array of objects
  //console.log(netflix.season1.seasonInfo.episodeInfo[7]);//this one reads the specfic index in the array
  //console.log(netflix.season1.seasonInfo.episodeInfo[7].episodeName); //this will read the ep name in ""
  function episodeNameFinder(episodeNum){
      console.log(netflix.season1.seasonInfo.episodeInfo[episodeNum].episodeName)
  }
  episodeNameFinder(1);


  let spaceJam = {
    toonSquad: {
      human: 'Michael Jordan',
      rabbit1: 'Bugs Bunny',
      rabbit2: 'Lola Bunny',
      duck: 'Daffy Duck',
      tDevil: 'Tasmanian Devil',
      bird: 'Tweety',
      cat: 'Sylvester',
      pig: 'Porky Pig'
    },
    monstars: {
      0: 'Bupkus',
      1: 'Bang',
      2: 'Nawt',
      3: 'Pound',
      4: 'Blanko'
    },
    nbaPlayers: {
      phoenixSuns: 'Charles Barkley',
      newJerseyNets: 'Shawn Bradley',
      newYorkNicks: 'Patrick Ewing',
      charlotteHornets1: 'Larry Johnson',
      charlotteHornets2: 'Muggsy Bogues'
    }
  }
//console.log(Object.keys(spaceJam.nbaPlayers)); //this will pull the keys in this case the nbaPlayers teams names. appears as an array. object has to have a capitol O.
//console.log(Object.keys(spaceJam.nbaPlayers)[0]); //put the index between the las () and will find the index of the arrary

//console.log(Object.keys(spaceJam.toonSquad).toString()); //you can add .tostring to convert it to a string.
//console.log(Object.values(spaceJam.toonSquad));//this reads the value of the keys in toonSquad
  
 
let garden ={
     vegetable:'zucchini',
     flower:'sun flower',
     fruit: 'grape',
     water: true,
     sun: true,
     size: 10
 }; 

 //console.log(garden.vegetable); //zucchini
 
 let x = 'vegetable';
 //console.log(garden.x)// it doesn't read it as a variable it is looking for x instead of vegetable
 //console.log(garden[x]); // [] will look through the keys to find a match, this will work and will read zucchini

 let baking ={};
baking['zucchini'] = 'better make some bread!'; //[] can set a new key value paring 

console.log(baking);
 
//console.log(baking.garden.vegetable); //you can't mix object. they are from two seperate objects so it wont work.
console.log(baking[garden['vegetable']]);//when it ran through it went through baking then when it hits garden it goes to zucchini whihc has a new value from baking and it read that value.
    //console.log(baking['zucchini']); this will be how above it read in js. inner brackets are read first.
    let garden ={
        vegetable:'zucchini',
        flower:'sun flower',
        fruit: 'grape',
        water: true,
        sun: true,
        size: 10
    }; 
    let key ='water';
Object.keys(garden).forEach(g =>{
    //console.log(g)
    if (key === g) {
        console.log(garden[key]);
    }
});

