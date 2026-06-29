console.log("hello js");

// ======= 01

{
let name = "muhammad muneeb babar";
// length sa ham jo bhi ham na variable ka ander likha hot ha ham is ko dakh sakta ha
//  ka vo kitni jga la raha ha uper vala variable na 21 space li ha
name.length;
console.log("1.",name);
}

// ======= 02

{
    // =========toUpperCase========
let name1 = 'muneeb';
// toUpperCase sa sara letter capitel ho jaya ga
let a = name1.toUpperCase()
console.log("2. ",a);

    // =========toLowerCase========
let name2 = 'Babar';
// toLowerCase sa sara letter small ho jaya ga
console.log(name2.toLowerCase());

}

// ======== 03

{

let name = "        muhammad              ";
// trim sa jo left or right spaces ho gi vo khatam ho jaya gi
console.log("3. ",name.trim());

}

// ======== 04

{

let para = "I love JavaScript Programming";
// splice sa ham jis letter ko get karain ga bas vo hi print ho gi () ki madad sa

console.log("4. ",para.slice(7 , 17));


}

// ======== 05

{
let para = 'i love programming';
// replace sa ham ak chiz ko dosri sa badle sakta ha jasa nocha
let news = para.replace('programming' , 'codding');
console.log("5. ",news);


}

// ======== 06

{
let student = ['ali' , 'raza' , 'hamza' , 'aliya' , 'usman' ];
// ========first name=========
console.log("6. first name",student[0]);

// =========last name=========
console.log('last name',student[student.length-1]);

// ==========length===========

console.log('student length',student.length);



}

// ========= 07

{
let fruits = ['mango', 'orange', 'apple'];
// push sa end sa ak add ho jaya ga
 fruits.push("banana")
// unshift sa start ma ak add ho jaya ga
 fruits.unshift("grapes")

console.log("7. ",fruits);

}

// ======== 08

{

let color = ['white' , 'black' , 'green' , 'gold'];
// pop sa end sa ek khatam ho jaya ga 
color.pop()
// shift sa start sa ek khatam ho jaya ga 
color.shift()
console.log("8. ",color);

}

// ======== 09

{
let num1 = ['11','12' , '13' , '14' , '15'];
let num2 = ['16' , '17' , '18' , '19' , '20'];
// concat sa do array mil jaya gi
console.log("9. ",num1.concat( num2));

}

// ========= 10

{
function name(z) {
    console.log(`10. hello ${z} ! wellcome to javascript`);
    
}
name("beauti");
}

// ======== 11

{
function full(name1 , name2) {
    console.log(`${name1} ${name2}`);
}

full( "11. ", "ali" , "khan");
}

// ======== 12

{
let num = 10;
if (num % 2 === 0) {
    console.log(`12. ${num} is even`);
    
}else{
    console.log(`12. ${num} is odd`);
    
}
}

// ======== 13

function big(num1 , num2) {
   if (num1 > num2) {
    return num1;
   } else {
    return num2;
   }  
}
 console.log("13. ",big(12 , 11));

// ======= 14

let arr = ['pencil' , 'pen' , 'shopner']
// unshift sa sab sa pahla bag print ho ga
arr.unshift('bag');
// push sa sab sa end par books print ho gi 
arr.push('books');
// splice sa ham kisi bhi  pice ko print or cutt or add karva sakta ha
arr.splice(3 , 1)
console.log("14. ",arr);


// ======== 15
function check(password) {
    if (password.length >= 8) {
        return 'strong password'
    } else {
        return 'weak password'
    }
}
console.log("15. ",check("1234567890"));

// ========= 16 

function ali(vowels) {
    let aliya = 0;
    for (let i = 0; i < vowels.length; i++) {
      if (vowels[i] === "a" || vowels[i] === "e" ||vowels[i] === "i" ||vowels[i] === "o" ||vowels[i] === "u" ) {
        
      }
     aliya++; 
    }
    return aliya;
}
console.log("16. ", ali("aeiou"));

// ========= 18

let clas = ['raza' , 'hamza' , 'zubair' , 'aliza'];
let name = prompt("Enter name");
if (name === "raza" || name === "zubaeir" || name === "hamza" || name === "aliza" ) {
    console.log("18. come in");
    
} else {
    console.log("18. next class");
    
}  

// ======= 19

let products = ["Mobile", "Laptop", "Tablet", "Headphones"];
products.push("Mouse");
products.splice(1, 1);
products[1] = "Smart Watch"; 
console.log("Updated Products:", products);

function revers(text){
    let word = '';
    for(let i = text.length - 1 ; i >= 0 ; i-- ){
         word +=  text.charAt(i);
    }
    console.log(word);
}


revers("Muneeb");
