$(document).ready(() => {
  getAge = (birthday) => {
    const today = new Date()
    let birthdate = new Date(birthday);
    console.log(birthdate);
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
    if ($("#day").val() === "" || $("#month").val() === "" || $("#year").val() === "") {
      console.log("a");
    } else {
      let yearValue = $("#year").val();
      let monthValue = $("#month").val();
      let dayValue = $("#day").val();

      let ageArray = getAge(`${yearValue}-${monthValue}-${dayValue}`);

      $("#year-display").html(ageArray[0]);
      $("#month-display").html(ageArray[1]);
      $("#day-display").html(ageArray[2]);
      $("#year-display").css("color", "hsl(259, 100%, 65%)");
      $("#month-display").css("color", "hsl(259, 100%, 65%)");
      $("#day-display").css("color", "hsl(259, 100%, 65%)");
    }
  })
})