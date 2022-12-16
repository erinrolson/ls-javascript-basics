/*
Write a function to calculate a person's BMI.
The function should have two parameters: height(cm), weight(kg) 
*/
function calculateBMI(cm, kg){
  let bmi = kg / (cm/100)**2;
  return bmi.toFixed(2);
}

console.log(calculateBMI(180, 80));