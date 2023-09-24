$(document).ready(() => {
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
  
  $("#enter-button").on("click", () => {
    console.log("b");

    if ($("#day").val() === "" || $("#month").val() === "" || $("#year").val() === "") {
      console.log("a");
    } else {
    }
  })


})