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
  $("#year").attr('max','4');
  $("#month").attr('max','2');
  $("#day").attr('max','2');

  $("#year").on("input", () => {
    if ($("#year").val() >= 4) {
      $("#year").val($("#year").val().substr(0, 4));
    }
  });

  $("#month").on("input", () => {
    if ($("#month").val() >= 2) {
      $("#month").val($("#month").val().substr(0, 2));
    }
  });

  $("#day").on("input", () => {
    if ($("#day").val() >= 4) {
      $("#day").val($("#day").val().substr(0, 2));
    }
  });

  $("#enter-button").on("click", () => {
    let yearValue = $("#year").val();
    let monthValue = $("#month").val();
    let dayValue = $("#day").val();

    const dateInput = new Date(`${yearValue}-${monthValue}-${dayValue}`);
    const currentDate = new Date();

    if ($("#day").val() === "" || $("#month").val() === "" || $("#year").val() === "") {
      alert("Please fill in all the fields.");
    } 
    else if (isNaN(dateInput) || currentDate < dateInput) {
      alert("Enter a valid birthday.");
    }
    else {
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