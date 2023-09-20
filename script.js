getAge = (birthday) => {
  const today = new Date();
  const birthdate = new Date(birthday);
  let year = today.getFullYear() - birthdate.getFullYear();
  let month = today.getMonth() - birthdate.getMonth();
  let day = today.getDate() - birthdate.getDate();

  console.log(today.getDate());
  console.log(birthdate.getDate());
  console.log(birthdate);
  if (month === 0 && today.getDate() < birthdate.getDate()) {
    year--;
  } 
  else if (month < 0) {
    year--;
    month = 12 + month;
  }

  return [year, month, day];
}

console.log(getAge("2002-10-19"));