// TASK 1

// function reverseNumber(num) {
//     const reversedStr = num.toString().split('').reverse().join('');
//     const reversedNum = parseInt(reversedStr);
//     return reversedNum;
// }

//   const x = 32243;
//   console.log(reverseNumber(x));

// TASK 2 

// let user = {
//     name: 'john',
//     age: 25
    
// }
// console.log(user.name)
// console.log(user.age)

// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let key = prompt("What do you want to know about the user?", "name");
  
//   // access by variable
//   alert( user[key] );




// function calculateBMI(weight, height) {
//     const heightMeters = height / 100;
//     const bmi = weight / (heightMeters * heightMeters);
//     return bmi;
//   }
  
//   function getWeightGroup(bmi) {
//     if (bmi < 18.5) {
//       return "Underweight";
//     } else if (bmi >= 18.5 && bmi <= 24.9) {
//       return "Normal weight";
//     } else if (bmi >= 25 && bmi <= 29.9) {
//       return "Overweight";
//     } else {
//       return "Obese";
//     }
//   }
  
//   const weight = 70;
//   const height = 170;
//   const bmi = calculateBMI(weight, height);
//   console.log(`BMI: ${bmi.toFixed(2)} - Weight group: ${getWeightGroup(bmi)}`);
  
