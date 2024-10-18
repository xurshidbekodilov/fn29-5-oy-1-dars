// FOR EACH

//1. Berilgan massivdagi har bir elementning qiymatini ekranga chiqarish uchun `forEach` metodidan foydalaning.
// let arr = [1,2,3,4,5,6]
// arr.forEach(function(value){
//     console.log(value);
// })

//2. Berilgan massivdagi har bir elementga 5 qo'shib, natijani ekranga chiqarish uchun `forEach` metodidan foydalaning.
// let arr = [1,2,3,4,5,6]
// arr.forEach(function(value){
//  console.log(value+5);
// })

//3. Berilgan massivdagi barcha toq sonlarni ekranga chiqarish uchun `forEach` metodidan foydalaning
// let arr = [1,2,3,4,5,6]
// arr.forEach(function(value){
//     if(value%2==1 && value > 0){
//         console.log(value);
//     }
// })

//4. Berilgan massivdagi elementlar sonini hisoblang va natijani ekranga chiqarish uchun `forEach` metodidan foydalaning
// let arr = [1,2,3,4,5];
// let sum = 0;
// arr.forEach(function(value){
//     sum += 1;
// })
// console.log(sum);

//5. Berilgan massivdagi har bir elementni kattaroq massivdagi boshqa massivga ko'chirib, 
//yangi massivni ekranga chiqarish uchun `forEach` metodidan foydalaning
// let arr = [1,2,3,4,5];
// let bigArr = [6,7,8,9,10,11,12,12];
// arr.forEach(function(value){
//     bigArr.push(value);
// })
// console.log(bigArr);


//map

//1. Berilgan massivdagi barcha elementlarning qiymatini 2 baravar oshiruvchi yangi massiv yarating va natijani ekranga chiqaring.
// let arr = [1,2,3,4,5];
// let res = arr.map(function(value){
//     return value*2;
// })
// console.log(res);

//2. Berilgan massivdagi har bir sonning kvadratini hisoblab, yangi massiv yarating va natijani ekranga chiqaring
// let arr = [1,2,3,4,5];
// let res = arr.map(function(value){
//     return value**2;
// })
// console.log(res);

//3.Berilgan massivdagi barcha satrlarni katta harflar bilan yangi massivda saqlang va natijani ekranga chiqaring
// let arr = ['olma','nok', 'behi'];
// let res = arr.map(function(value){
//     return value.toUpperCase();
// })
// console.log(res);

//4. Berilgan massivdagi har bir sonni manfiy qiymatga aylantirib, yangi massiv yarating va natijani ekranga chiqaring
// let arr = [1,2,3,4,5];
// let res = arr.map(function(value){
//     if(typeof(value)==='number'){
//        return value *= -1;
//     }
// })
// console.log(res);

//5. Berilgan massivdagi sonlarga 3 ni qo'shib, yangi massiv yarating va natijani ekranga chiqaring
// let arr = [1,2,3,4,5];
// let res = arr.map(function(value){
//     if(typeof(value)=='number'){
//         return value += 3;
//     }
// })
// console.log(res);


//filter

//1. Berilgan massivdagi barcha juft sonlarni filtrlab, yangi massivga saqlang va natijani ekranga chiqaring.
// let arr = [1,2,6,3,4,5];
// let res = arr.filter(function(value){
//     return value%2==0;
// })
// console.log(res);

//2. Berilgan massivdagi faqat musbat sonlarni tanlab, yangi massiv yarating va natijani ekranga chiqaring
// let arr = [0,1,2,-1,-2,-5,7,5,9,-8];
// let res = arr.filter(function(value){
//     return value>0;
// })
// console.log(res);

//3. Massivdagi uzunligi 5 ta belgidan katta bo'lgan so'zlarni tanlab, yangi massiv yarating va natijani ekranga chiqaring.
// let str = ['salom', 'assalom', 'hayr', 'dasturlash', 'it'];
// let res = str.filter(function(value){
//     return value.length > 5;
// })
// console.log(res);

//4. Berilgan massivdagi 18 yoshdan katta bo'lgan shaxslarning yoshlarini yangi massivga saqlang va natijani ekranga chiqaring
// let ages = [15, 22, 17, 30, 19, 13, 25];
// let res = ages.filter(function(value) {
//     return value > 18;
// })
// console.log(res);

//5. Massivdagi qiymatlari 10 dan kichik bo'lgan barcha sonlarni filtrlab, yangi massiv yarating va natijani ekranga chiqaring.
// let numbers = [15, 2, 17, 30, 9, 13, 25, 7];
// let res = numbers.filter(function(value){
//     return value < 10;
// })
// console.log(res);


//find

//1. Berilgan massivdagi 10 dan katta bo‘lgan barcha sonlarni filtrlab, yangi massiv yarating va natijani ekranga chiqaring
// bu misolni find bn ishlab bolmaydi. shu sabab filter bn ishlayapman
// let numbers = [15, 2, 17, 30, 9, 13, 25, 7];
// let res = numbers.filter(function(value){
//     return value < 10;
// })
// console.log(res);

//2. Massivdan faqat musbat sonlarni tanlab, yangi massiv hosil qiling va natijani ekranga chiqaring
// let arr = [0,1,2,-1,-2,-5,7,5,9,-8];
// let res = arr.filter(function(value){
//     return value>0;
// })
// console.log(res);

//3. Berilgan so'zlar massividan uzunligi 4 belgidan katta bo‘lgan so‘zlarni filtrlab, yangi massiv yarating va natijani ekranga chiqaring
// let str = ['salom', 'assalom', 'hayr', 'dasturlash', 'it'];
// let res = str.filter(function(value){
//     return value.length > 4;
// })
// console.log(res);

//4. Berilgan massivdagi faqat juft sonlarni filtrlab, yangi massiv yarating va natijani ekranga chiqaring
//1. Berilgan massivdagi barcha juft sonlarni filtrlab, yangi massivga saqlang va natijani ekranga chiqaring.
// let arr = [1,2,6,3,4,5];
// let res = arr.filter(function(value){
//     return value%2==0;
// })
// console.log(res);

//5. Berilgan sonlar massividan faqat 0 va undan katta bo'lgan sonlarni filtrlab, yangi massiv yarating va natijani ekranga chiqaring
// let arr = [0,1,2,-1,-2,-5,7,5,9,-8];
// let res = arr.filter(function(value){
//     return value >= 0;
// })
// console.log(res);


//some and every

//1. Berilgan massivda 0 dan kichik bo‘lgan son mavjud yoki yo‘qligini aniqlang
// let arr = [0,1,2,-1,-2,-5,7,5,9,-8];
// let res  = arr.some(function(value){
//     return value <=0;
// })
// console.log(res);

//2. Massivdagi elementlardan hech bo‘lmaganda biri juft son ekanligini tekshiring.
// let arr = [0,1,2,-1,-2,-5,7,5,9,-8];
// let res = arr.some(function(value){
//     return value%1==0;
// })
// console.log(res);

//3. Berilgan massivdagi barcha sonlar musbat ekanligini tekshiring.
// let arr = [0,1,2,-1,-2,-5,7,5,9,-8];
// let res = arr.every(function(value){
//     return value>0;
// })
// console.log(res);

//5. Massivdagi barcha elementlarning satr ekanligini aniqlang.
// let arr = ['salom', 'dunyo', 'frontend', 'mobil'];
// let res = arr.every(function(value){
//     return typeof(value) === 'string';
// })
// console.log(res);