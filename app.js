/*Congratulations Prepsters, you've been selected for a THIRD top secret mission (three is a magic number https://www.youtube.com/watch?v=aU4pyiB-kq0 ). 

Should you choose to accept it, create a new branch and 
do a git fetch and git pull to find your specific mission. After you complete your mission, commit your work and do a pull request.

This repo will self-destruct in three seconds. Good luck!!!*/

// Mission 1: 
// Team Member: Alavi

//Create a function that will sum up odd numbers from 1 to 101. 

// @param {Number}
// @return {Number}

function oddSum(){
  var sum = 0;
  for (var i =1; i<102; i++){
    if(i%2!==0){
      sum+=i;
    }
  }
  return sum;
}
oddSum();
console.log(oddSum());

// Mission 2: 
// Team Member: Mckarl

//Declare a variable named safewayLotto and create the following key-value pairs for the object:

//purchase: true,
//prize: '$250 Million'
//location: 'Manoa',
//luckyNum = [],
//winner: null

//Next create a function that will take in an object and will add 5 random numbers between 0 and 50 in the empty array.

// @param {Object}
// @return {Object}


// Mission 3:
// Team Member: Abby

//Create a function that will iterate through the given object and console.log strings that prints the following format:

/*Example Output:
---------------------
id: 0
Name: 'Bruce Lee'
Address: '500 Dragon Rd'
---------------------
id: 1
Name: 'Michael Jordan'
Address: '23 Legend Ave'
---------------------
id: 2
Name: 'Warren Buffet'
Address: '1 Omaha Dr'
---------------------
......*/

var celebs = [{name: "Bruce Lee", address: "500 Dragon Rd"},{name: "Michael Jordan", address: "23 Legend Ave"},{name: "Warren Buffet",address: "1 Omaha Dr"},{name: "DJ Khaled", address: "1 Another Rd"},{name: "Barack Obama", address: "1 Washington Dr."},{name: "Drake",address: "33 Toronto Dr"},{name: "Bruce Wayne",address: "3 Gotham Pl"},{name: "Mariah Carey", address: "1 Fantasy Ln"},{name: "Piko Taro", address: "888 Shibuya Dr."},{name: "Steve Jobs",address: "1 Infinite Loop"},{name: "Guy Kawasaki", address: "2800 Woodlawn Dr"},{name: "Stephen Hawkins",address: "1 Blackhole Pl"},{name: "Jackie Chan", address: "168 Shanghai Rd"},{name: "Charlie Brown",address: "8 Peanuts Rd"},{name: "Cookie Monster", address: "2 Seasame St"}, {name: "Elon Musk", address: "1 Rocket Rd"}, {name: "Mark Zuckerberg", address: "1 Hacker Ln"}];


// @param {Object}
// @console.log {String}
function celebList(arr){
	for(var i=0; i<arr.length; i++){
		console.log("---------------------");
		console.log("id: " + i);
		console.log("Name: " + arr[i].name);
		console.log("Address: " + arr[i].address);
	}
}
celebList(celebs);

// Mission 4:
// Team Member: Kenny

/*Create a function that will take in an array of numbers and converts only the even indexed numbers into strings.*/

// @param {Array}
// @return {String}

var numArr = [1,2,3,4,5,6,7,8];

function numToString(arr){
  for (var i=0; i<=arr.length; i++){
    if (i %2 === 0){
      console.log(i);
    }
  }  
}

numToString(numArr);
