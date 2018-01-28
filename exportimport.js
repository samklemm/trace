  

  function exportFrom() {
    let firstname =  document.getElementById("firstname").value;
    let lastname =  document.getElementById("lastname").value;
    let physical = document.getElementById("physical").value;
    let location = document.getElementById("location").value;
    let date = document.getElementById("example-date-input").value;

  var selchbox = [];

  var inpfields = document.getElementsByTagName("*");

  for(var i=0; i< inpfields.length; i++) {
    if(inpfields[i].type == 'checkbox' && inpfields[i].checked == true) 
    	selchbox.push(inpfields[i].value);
  }

    let json1 = {
      "first_name": firstname,
      "last_name": lastname,
      "physical": physical,
      "location": location,
      "date": date,
      "harrassment": selchbox
    };
    
    alert("Here is a json " + JSON.stringify(json1,1));  

  }