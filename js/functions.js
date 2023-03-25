function updateCaseNumber(isIncrease){
  const caseNumberField = document.getElementById("case-number-field");
  const caseNumberString = caseNumberField.value;
  const previousCaseNumber = parseInt(caseNumberString);

  let newCaseNumber;
  if(isIncrease === true) {
    newCaseNumber = previousCaseNumber + 1;
  }else{
    newCaseNumber = previousCaseNumber - 1;
  }

  caseNumberField.value = newCaseNumber;

  return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
  const caseTotalPrice = newCaseNumber * 59;
  const caseTotalElement = document.getElementById('case-total');
  caseTotalElement.innerText = caseTotalPrice;
}



function updatePhoneNumber(isIncrease){
  const phoneNumberField = document.getElementById("phone-number-field");
  const phoneNumberString = phoneNumberField.value;
  const previousPhoneNumber = parseInt(phoneNumberString);

  let newPhoneNumber;
  if(isIncrease === true) {
    newPhoneNumber = previousPhoneNumber + 1;
  }else{
    newPhoneNumber = previousPhoneNumber - 1;
  }

  phoneNumberField.value = newPhoneNumber;

  return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber){
  const phoneTotalPrice = newPhoneNumber * 1219;
  const phoneTotalElement = document.getElementById('phone-total');
  phoneTotalElement.innerText = phoneTotalPrice;
}