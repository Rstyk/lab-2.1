// Lab_02.cpp
// < Чучман Володимир >
// Лабораторна робота № 2.
// Лінійні програми.
// Варіант 26

a = prompt("a: ")
b = prompt("b: ")
console.log(a)
z1 = (((Math.cos(a) - Math.cos(b))) * ((Math,cos(a) - Math.cos(b)))) - ((Math.sin(a) - Math.sin(b)) * (Math.sin(a) - Math.sin(b))); // Розрахунок за першою формулою: z1 = cosa + cos2a + cos6a + cos7a

z2 =  (-4 * (Math.sin((a - b) / 2) * Math.sin((a - b) / 2))) * Math.cos(a + b); // Розрахунок за другою формулою: z2 = 4cosa/2 * cos5a/2 * cos4a
console.log(`z1 = ${z1}`)
console.log(`z2 = ${z2}`)