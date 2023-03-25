
//add event listener to the case plus button
document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newCaseNumber = updateCaseNumber(true);

  updateCaseTotalPrice(newCaseNumber);
  
});


document.getElementById('btn-case-minus').addEventListener('click',  function(){
  const newCaseNumber = updateCaseNumber(false);

  updateCaseTotalPrice(newCaseNumber);

});