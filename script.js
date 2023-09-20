getAge = (birthday) => {
  const today = new Date()
  let birthdate = new Date(birthday);
  let year = today.getFullYear() - birthdate.getUTCFullYear();
  let month = today.getMonth() - birthdate.getUTCMonth();
  let day = today.getDate() - birthdate.getUTCDate();

  if (month === 0 && today.getDate() < birthdate.getUTCDate()) {
    year--;
  } 
  else if (month < 0) {
    year--;
    month = 12 + month;
  }

  return [year, month, day];
}

console.log(getAge("2002-07-19"));