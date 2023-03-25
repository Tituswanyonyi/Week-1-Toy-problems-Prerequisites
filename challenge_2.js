// Speed Detector (Toy Problem)
const speed = parseInt(prompt("Enter the speed of the car:"));
//The parseInt() function is used to convert the input string to an integer.
if (speed <= 70) {
  console.log("Ok");
  //checks whether the speed variable is less than or equal to 70. If the condition is true, the code in the first block will run; otherwise, the code in the second block will run.
} else {
  const demeritPoints = Math.floor((speed - 70) / 5);
  console.log(`Points: ${demeritPoints}`);
//if the speed is greater than 70 , this line calculates how many demerit points should be assigned to the driver based on their speed


  if (demeritPoints > 12) {
    console.log("License suspended");
  }
}
