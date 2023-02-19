// Write your solution in this file!
const employee=
 {
name: "Mohammed ",
adress : "Seiyun,Algeria street" 
} ;

function updateEmployeeWithKeyAndValue(employee,key,value){
  const newemp = {... employee};
  newemp[key] = value ;
  return newemp ; 
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
  employee[key] = value ; 
  return employee ; 
}
function deleteFromEmployeeByKey(employee,key){
  const newemp2 = {...employee} ; 
  delete newemp2[key];
  return newemp2;
}
function destructivelyDeleteFromEmployeeByKey(employeem,key){
  delete employee[key];
  return employee ; 
}
