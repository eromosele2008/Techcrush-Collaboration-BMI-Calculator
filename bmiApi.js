// bmiApi.js
export function calculateBMI(weight, height) {
  const bmi = weight / (height * height);

  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 24.9) category = "Normal weight";
  else if (bmi < 29.9) category = "Overweight";
  else category = "Obese";

  return { bmi: bmi.toFixed(2), category };
}
//console.log(`testing`);
let calculator = calculateBMI(100, 3);
console.log(calculator);
