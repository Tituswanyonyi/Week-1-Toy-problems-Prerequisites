function studentsResults() {
    let marks = parseInt(prompt("Enter student marks (between 0 and 100): "));
  /*This line defines the studentsResults function that prompts the user to enter a number between 0 and 100, 
  converts the input to an integer, and assigns it to the marks variable*/
  
  
  let grade;
  
    switch (true) {
      case (marks >= 79):
        grade = "A";
  //The first case is when marks are greater than or equal to 79, so it will return "A".
  
        break;
      case (marks >= 60 && marks <= 79):
        grade = "B";
  //The second case is when marks are between 60-79, so it will return "B".
        break;
      case (marks >= 50 && marks <= 59):
        grade = "C";
  //The third case is when marks are between 50-59, so it will return "C".
        break;
      case (marks >= 40 && marks <= 49):
        grade = "D";
  // The third case is when marks are between 40-49, so it will return "C".
        break;
      default:
        grade = "E";
  //if there was no match with any of those cases, then the default would be returned which would be "E." that is 39 and below marks
        break;
    }
  
    return ` student marks:${marks} student grade:${grade} `;
  //Returns a formatted string that displays the student's marks and grade.
  }
  
  console.log(studentsResults());