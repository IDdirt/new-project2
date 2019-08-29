// get info from an html input text field

var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var result = document.getElementById('result');

// because this is a header and .value only works on inputs you need to use innerText
//result.value = "TEST";
//result.innerText = "TEST2";

//numField1.value = "X";
//numField2.value = "Y";

var form = document.getElementById('xIsWhatPercentOfY');
form.addEventListener('submit', function (event) {
   
   if (!numField1.value || !numField2.value) {
      alert("Please enter numbers for both X and Y")
   } else {   
      var x = parseFloat(numField1.value);
      var y = parseFloat(numField2.value);
      var resultThing = x / y;
      var percent = resultThing * 100;
      result.innerText = "Answer: " + percent + "%";
      event.preventDefault(); // This stops the page from being refreshed
   }

   
});
