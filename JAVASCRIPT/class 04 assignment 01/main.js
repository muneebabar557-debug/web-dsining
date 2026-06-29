console.log("hello js");

// =======1=======
// display means
{let age = 17;
    console.log("1.My age is",age);
    
}
 // =======2=======
{
let a = 5;
let b = 12;
console.log("2. The sum is",a + b);

}
// =======3=======
{
let a = 34;
let b = 17;
console.log("3. Your age is",a - b);

}
// =======4=======
// product means
{
let a = 10;
let b = 20;
console.log("4. The product is",a * b);

}
// =======5=======
// quotient means
{
let a = 11;
let b = 3;
console.log("5. The ans ia",a / b);

}
// ========6=======
// remainder
{
let a = 10;
let b = 5;
console.log("6. The ans is",a % b);

}
// ========7========
// exponent(**)do numberon ka suqare liya ha
{
let num = 3;
// is ki samaj nai aai
console.log("7. The exponemt is",num**num);

}
// ========8========
 // cube
{
 let num = 3;
// ak munber ko ak sa zayada bar print kasa kar va sakta ha
 console.log("8. The ans is",num* num* num);

 }
 // ========9=========
{ num1 = 2;
 num2 = 2;
 num3 = 2;
 console.log("9. The average is",num1 + num2 + num3);

 }
 // ========10========
 // mustatile ka formula area = leght * width
 {
 let leght = 10;
 let width = 3;
 area = leght * width;
console.log("10. rectangular ans is", area);

 }
// ========11=========
// 2*(leght + width)
{
 let lambai = 10;
 let chorai = 5;
 let farmula =  lambai + chorai;
 console.log("11. The ans is",2*(farmula));
}
// ========12========
 // (celsius * 9/5)+32
 {
 let calvin = ("celsius" * 9/5)+32
 console.log("12. the ans is",calvin);
 }
//=========13=========
// mintes ko hours ma tabdil karin
 {
 let mun = 120;
 let utes = 60;
 let ali = "mun"/"inte";
 console.log("13. hours",ali);
 }
//==========14=========
// five subjects ka numbron ka hissab lagain
{
let eng = 10;
let math = 10;
let phy = 10;
let chy = 10;
let tqr = 10;
let urdu = 10;
console.log("14. the ans is ",eng+math+phy+chy+tqr+urdu);
 
// console.log(/*eng+math+phy+chy+tqr+urdu*/);
}
// =========15==========
// percentage = (total / 500.0) * 100;
let totle = 300;
let a = 500;
console.log("15. the ans is",(totle/500)*100);
// =========16========
{
let money = 20000;
money += 5000;
console.log("16. salary",money );

}
// =======17==========
{
let balance = 5000;
balance -= 2000;
console.log("17. balnce",balance);


}
// ========18=========
{
let num = 5;
num *= 5;
console.log("18. num",num);

}
// =========19========
{
let divide = 5;
divide /= 2;
console.log("19. divide",divide);

}
// =========20========
{
let madulus = 4;
madulus %= 3;
console.log("20. madulus",madulus);
}
// ========21=========
// 10 fisad azafa karna ha is liya das lika ha
// price += price * 0.10;
// is ki samaj nai aai
{
let dollor = 280;
dollor += dollor * 10;
console.log("21. dollor",dollor);
}
// ========22=========
{
let marks = 45;
let bouns = 5;
let totle = marks + bouns ;
console.log("22. marks",totle);

}
// ========23========
{
let stock = 15;
stock -= 5;
console.log("23. stock",stock);

}
// ========24========
{
let years = 11;
years += 1;
console.log("24. years",years);

}
// ========25========
// apdate means
{
let sum = 500;
let balance = 100
let num = sum += balance;
console.log("25. balance",num);

}
// ========26=======
{
let num1 = 5;
let num2 = "5";
let num = num1 == num2;
console.log("26. number is",num);
}
// =======27=======
{
let num1 = 4;
let num2 = 4;
let num = num1 === num2;
console.log("27. number is",num);

}
// ========28=======
{
a = 10;
b = 10;
let equal = a !== b;
if (a != b) {
    console.log("28. the number is ",equal);  
}else{
    console.log("28. the number is ",equal);
    
}

}


// ========29=======
{
    let a = 5;
    let b = 5;
    if (a > b) {
        console.log("29. a is a greater",a);
        
    }else if (b > a) {
        console.log("29. b is a gareter",b);
        
    }else{
        console.log("29. not");
        
    }
}

// =========30=========
{
let a = 5;
let b = 1;
if (a < b) {
    console.log("30. a is smaller",a);
    
}else if (b < a) {
    console.log("30. b is smaller",b);
    
}else{
    console.log("30. not");
    
}
}

// =========31=========
{
let a = 50;
let b = 40;
let c = a >= b;
console.log("31. marks is",c);
}

// ========32========
{
let age = 18;
let not = 17;
if (age >= not) {
    console.log("32. this age is",age);
    
}else if (not >= age) {
    console.log("32. this age is not",not);
    
}else{
    console.log("32. not");
    
}
}

// ========33========
{
let temp = 0;
if (temp === 0) {
    console.log("33. temperature is 0");
    
}else{
   console.log("33. temperature is not 0");
    
}
}

// ========34========
let price1 = 100;
let price2 = 200;
if (price1 = price2) {
    console.log("34. price is",price1);    
}else if (price2 < price1) {
    console.log("34. price is",price2);
}else{
    console.log("34. not avalable");
    
}

// =======35=======
{
let height1 = 5.5;
let height2 = 5.8;
if (height1 > height2) {
    console.log("35. first ");   
}else if (height2 > height1) {
     console.log("35. second ");
}else{
    console.log("35. not height ");
}
}

// ========36========
{
let men = 18;
let cnis = true;
if (men >= 18 && cnis) {
    console.log("36. approved driving lisince");
    
}else{
    console.log("39. your driving lisince is not approved");
    
}
}

// ========37=========
     
// =======38=======
{
let number = 90;
let sports = false;
if (number > 80 || sports) {
 console.log("38. scolership is approved");
    
}else{
    console.log("38. your marks is 75 ");
    
}
}

//=======39=======
let day1 = "saturday";
let day2 = "sunday";
if ("saturday" === day1) {
    console.log("39. saturday");   
}else if ("sunday" === day2) {
    console.log('39. sunday');    
}else{
    console.log("39. kferwwvewdCRF");
    
}

// ========40=======
let block = false;
if (!(block)) {
    console.log("40. block",block);
    
}else{
    console.log("40. block");
    
}

// =======41=======
{
let marks = 61;
if (marks >= 50) {
    console.log("41. passed");
    
}
}

// =======42=======
{
let age = 16;
if (age >= 16) {
    console.log("42. balag");
    
}
}

// =======43=======
{
let a = 6;

if (a % 2 == 0) {
    console.log("43. even number");
    
}else{
    console.log("43. odd number");
    
}
}


// =======44=======
{
let a = 7;

if (a % 2 == 0) {
    console.log("44. even number");
    
}else{
    console.log("44. odd number");
    
}
}

// ======45======
{
let a = 50;
if (a >= 50) {
    console.log("45. student is passed");
    
}else{
    console.log("45. student is failed");
    
}
}

// =======46=======
{
let number = +9;
if (number > 0) {
    console.log("46. this is possitive");
    
}else if (0 > number) {
    console.log("46. this is nagitive");
    
}else{
    console.log("46. this is zero");
    
}
}

// =======47========
{
let boy = 18;
if (boy <= 18) {
    console.log("47. ap vot da sakta ha");
    
}else {
    console.log("47. ap vot nahi da kakta ha");
    
}
}


// =======48========
{
let user = 12345;
if (user === 12345) {
    console.log("48. your password is approved");
    
}
else{
    console.log("48. your password is not approved");
    
}
}

// ======49=======
{
let marks = 49;
if (marks >= 90) {
    console.log("49. grade a");
    
}else if (marks >= 80) {
    console.log("49. grade b");
    
}else if (marks >= 70) {
    console.log("49. grade c");
    
}else if (marks >= 60) {
    console.log("49. garde d");
    
}else if (marks >= 50) {
    console.log("49. grade e");
    
}else{
    console.log("49. fail");
    
}
}

// =======50=======
{
let color = "red";
if (color == "red") {
    console.log("50. stop");
    
}else if (color == "yellow") {
    console.log("50. reddy");
    
}else if(color == "green"){
    console.log("50. go");
    
}
}
























