/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
  var totalYear = experience;
  var presentSalary =startingSalary;
  for(var yearCount =1; yearCount<=totalYear; yearCount++){
    presentSalary=presentSalary+(presentSalary*0.05);
  }
  var salary= presentSalary.toFixed(2);
  console.log(salary)