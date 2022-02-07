var btn = document.getElementById("newIdeaBtn");
btn.addEventListener("click", function() {
  fetch('https://www.boredapi.com/api/activity/')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      document.getElementById("newActHere").innerHTML = data.activity;
      document.getElementById("actTextHere").innerHTML = data.type;
      document.getElementById("participantsInv").innerHTML = data.participants;
    });


});
