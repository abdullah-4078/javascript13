                                       // Changing case

// var a = prompt("enter anything","your answer");

// var upper = a.toUpperCase();

// document.write(upper);

// question 2

// function titleCase(abdullah) {

//     var sentence = abdullah.toLowerCase().split(" ");

//     for(var i = 0; i< sentence.length; i++){

//        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);

//     }

//  document.write(sentence.join(" "));

//  return sentence;

//  }

//  titleCase("Hello my name is Abdullah whats your name?");


                           // Strings: measuring length and extracting parts

// var mobilePhone = prompt("Enter your favorite mobile phone model")

// document.write("My favourite phone is : " , mobilePhone , "<br>Lenght of string is : " , mobilePhone.length)


// question 2

// var user1 = prompt ("Enter Anything in Small Letters :")

// var user2 = user1.slice(-1)

// alert(user2)


                                      //  Strings: finding segments

// var a = 'pakistani';

// var indexnum = a.indexOf('n');

// document.write(indexnum);
 
// question 2

// var names = prompt('enter your username');

// if (names.match(/[\@\.\,\!]/)===null){

//         alert('hello '+names)

// }else{

//         alert('enter valid username')

// }

// // question 3

// let str = "the quick brown fox jumps over the lazy dog",

//     split = str.split(" "),

//     obj = {};

// for (let i = 0; i < split.length; i++) {

//   if (obj[split[i]] === undefined) {

//     obj[split[i]] = 1;

//   } else {

//     obj[split[i]]++;

//   }

// }

// console.log(obj);
  

                        // Strings: finding a character at a location


// var a = "pakistani";

// document.write(a.charAt(3));

                         // Strings: replacing characters

// var text = "hyderabad hydera hyderhy hyderubad"

// var  indexnum = text.indexOf('hyder');

// var firsttext = text.slice(0,indexnum)

// var replacingtext = 'islam';

// var third = text.slice(indexnum+5)

// document.write(firsttext+replacingtext+third);



// question 2

// var pera = (" Ali and Sami are best friends. They play cricket and football together.")

// var pera1 = pera.replaceAll("and", "&")

// document.write(pera1)


                                    // Rounding numbers

// var a = Math.round(3.45214);

// console.log(a)

// var a = Math.ceil(3.45214);

// console.log(a)

// var a = Math.floor(3.45214);

// console.log(a)

// question 2

// var a = Math.round(-2.678);

// console.log(a)

// var a = Math.floor(-2.678);

// console.log(a)

// var a = Math.ceil(-2.678);

// console.log(a)

                                 // Generating random numbers

// var num = Math.ceil(Math.random() * 6);

// document.write(num);

// question 2

// var head = 1;
// var tail = 2;

// var toss = Math.random() * 2;

// var floor = Math.floor(toss)

// if(floor === 0){
//     document.write("0 <br>  Coin Value: Head")
// }

// else if(floor === 1)
// {
//     document.write("1 <br>  Coin Value: Tails")
// } 

// question 3

// const num = Math.ceil(Math.random() * 10);

// console.log(num);

//  const gnum = prompt('Guess the number between 1 and 10 inclusive');

//  if (gnum == num)

//    console.log('Matched');

//   else
//    console.log('Not matched, the number was '+gnum);


                         // (Converting strings to integers and decimals)

//  var man = prompt('Enter your weight');

// var boos= parseInt(man)

// document.write(boos+"kgs")

                          // (Converting strings to numbers, numbers to strings)

// var a = "472";

// var num = Number(a);

// document.write(num);


// question 2

// var number = 35.36;

// // document.write("number :", number)

// document.write("result: " , number.toString().replace("." , ""))


                               // Controlling the length of decimals

// var percent = 30/45*100

// document.write("<br/>" + percent)

// var fix = percent.toFixed(2)

// document.write("<br/>" + fix)
