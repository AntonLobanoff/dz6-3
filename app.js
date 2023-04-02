const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const rub = document.querySelector("#rub");

som.value = "";
usd.value = "";
rub.value = "";

function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[0-9]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

// som.addEventListener("input", (e) => {
//     console.log(e.target.value)
//     const request = new XMLHttpRequest ()
//     request.open("GET","db.json")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()
//     request.addEventListener("load", () => {
//         const data = JSON.parse(request.response)
//         console.log(data)
//         usd.value = (e.target.value / data.usd).toFixed(2)
//     })
// })

const convert = (elem, target, target2) => {
  elem.addEventListener("input", async () => {
    // console.log(elem);
    // const request = new XMLHttpRequest();
    // request.open("GET", "db.json");
    // request.setRequestHeader("Content-type", "application/json");
    // request.send();
    // request.addEventListener("load", () => {
    //   const data = JSON.parse(request.response);
      //    if(isTrue){
      //     target.value = (elem.value / data.usd).toFixed(2)
      //    } else {
      //     target.value = (elem.value * data.usd).toFixed(2)
      //    }
      // isTrue ?
      // target.value = (elem.value / data.usd).toFixed(2)
      // :
      // target.value = (elem.value * data.usd).toFixed(2)
      //    elem.value === "" && (target.value = "")


      const response = await fetch("db.json")
      const data = await response.json()

      
      .then((data) =>{

      if (elem === usd) {
        target.value = (elem.value * data.usd).toFixed(2);
        target2.value = (target.value / data.rub).toFixed(2);
      }
      if (elem === rub) {
        target2.value = (elem.value * data.rub).toFixed(2);
        target.value = (target2.value / data.usd).toFixed(2);
      }
      if (elem === som) {
        target.value = (elem.value / data.usd).toFixed(2);
        target2.value = (elem.value / data.rub).toFixed(2);
      }
    })
    // });
  });
};
convert(som, usd, rub);
convert(usd, som, rub);
convert(rub, usd, som);
