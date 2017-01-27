/*
  Your 3 Users will be the following.
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var Users = function(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
}

//Create an Array called 'users' that will store all our instances of User.

  var Users = [];


//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

  Users.push(new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS'));
  Users.push(new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags'));
  Users.push(new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup'));

console.log('Tyler\'s information is ');
//Console.log all of Tylers information

  for (var i = 0; i < Users.length; i++) {
    if(Users[i]['name'] === 'Tyler') {
      console.log(Users[i])
      break;
    }
  };

console.log('Lenny\'s information is ');
//Now console.log all of Lennys information

  for (var i = 0; i < Users.length; i++) {
    if(Users[i]['name'] === 'Lenny') {
      console.log(Users[i])
      break;
    }
  };


//Now create another instance of User using your own information and then add that to your users array.

  Users.push(new User('Bekah', 'bekahrichardson@gmail.com', 'iLoveCoding'));

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.

  for (var i = 0; i < Users.length; i++) {
    console.log(Users[i])
  };
