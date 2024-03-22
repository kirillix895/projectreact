"use strict";
//alert("hello")
//let s = 25;
//const pov = {
//    a:50
//}
//console.log(pov.a);
//const result = confirm("Are you here?");
//console.log(result);
//const answer = +prompt("вам есть 18?","18");
//console.log(answer);
//console.log(typeof(answer));
//const answers = [];
//answers[0]= prompt("как ваше имя?","");
//answers[1]= prompt("как ваша фамилия?","");
//answers[2]= prompt("сколько вам лет?","");
 //document.write(answers);
 const category = 'toys';
 console.log(`https://someurl.com/${category}/5`)
 const user = "Ivan";
 alert(`Привет,${user}`);
 console.log(typeof('arr'+"- object"));
 console.log(4 + +"6");
 let incr = 10,
     decr = 10;
// ++incr;
 //--decr;
 console.log(++incr);   
 console.log(--decr);  
 console.log(incr); 
/* const numberOfFilms=+prompt("сколько фильмов вы уже посмотрели?","");
 console.log(numberOfFilms[0]);
const personalMovieDB = {
    count:numberOfFilms,
    movies:{
    },
   actors:{},
   genres:[],
   privat:false
};
const a = prompt("один из последних просмотренных фильмов?",""),
      b = prompt("на сколько оцените его?",""),
      c = prompt("один из последних просмотренных фильмов?",""),
      d = prompt("на сколько оцените его?","");
personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;
console.log(personalMovieDB);*/
/*if(1){
    console.log("ok!") 
}else{
    console.log("error!")
}
const num = 50;
(num===50) ? console.log("ok!") : console.log("error!");   //в тернаронм операторе всегда 3 аргумента
4 + 4  //плюсик здесь бинарный аргумент
+"4"  // здесь унарный аргумент
*/
/*const a = 50;         //конструкция свич всегда только на строгое сравнение
switch(a){
    case 49:console.log('неверно');
    break;
    case 100:console.log('неверно');
    break;
    case 50:console.log('верно');
    break;
    default:console.log('не в этот раз')
    break;

}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}*/
//let num = 50
/*while(num<=55){
    console.log(num)
    num++
}
do{
    console.log(num)
    num++
} 
while(num<55)*/
/*for(let i = 1;i<8;i++){
   // console.log(num);
    //num++;
    if(i===5){
     //   break;
        continue;
    }
    console.log(i);
}*/

/*let result = "";
const length = 7;
for(let i = 1;i<length;i++){
    for(let j = 0;j<i;j++){
        result +="*";
    }
   result +='\n';
}
console.log(result);
 first:  for(let i = 0;i<3;i++){
    console.log(`first level ${i}`);
    for(let j = 0;j<3;j++){  
        console.log(`second level ${j}`); 
        for(let k=0;k<3;k++){
            if(k===2) continue first;
            console.log(`third level ${k}`);

        }
    }
}*/

/*let i = 2;
while(i<=16){
    if(i%2===0){
        i++;
        continue;
    }else{
        console.log(i);
    }
    i++;
}
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

// Пишем решение вот тут
for(i=0;i<arr.length;i++){
    result[i]=arr[i];
    console.log(arr[i]);
    console.log(result[i]);
}

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)*/
const numberOfFilms=+prompt("сколько фильмов вы уже посмотрели?","");
 console.log(numberOfFilms[0]);
const personalMovieDB = {
    count:numberOfFilms,
    movies:{
    },
   actors:{},
   genres:[],
   privat:false
};
//const a = prompt("один из последних просмотренных фильмов?",""),
//      b = prompt("на сколько оцените его?",""),
//      c = prompt("один из последних просмотренных фильмов?",""),
//      d = prompt("на сколько оцените его?","");
//personalMovieDB.movies[a]=b;
//personalMovieDB.movies[c]=d;
for(let i = 0;i <2;i++){
    const a = prompt("один из последних просмотренных фильмов?",""),
      b = prompt("на сколько оцените его?","");
    personalMovieDB.movies[a]=b;
}
console.log(personalMovieDB);