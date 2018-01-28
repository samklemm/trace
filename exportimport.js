  

  function exportFromLocation() {
    let streetnumber = document.getElementById('street_number');
    let streetname = document.getElementById('street_name');
    let city = document.getElementById('city');
    let state = document.getElementById('state');
    let zip = document.getElementById('zip');
    let date = document.getElementById("date").value;

  var selchbox = [];

  var inpfields = document.getElementsByTagName("*");

  for(var i=0; i< inpfields.length; i++) {
    if(inpfields[i].type == 'checkbox' && inpfields[i].checked == true) 
    	selchbox.push(inpfields[i].value);
  }

    let json1 = {
      "street_num": streetnumber,
      "street_name": streetname,
      "city": city,
      "state": state,
      "zip": zip, 
      "date": date,
      "harrassment": selchbox
    };
    
    alert("Here is a json location" + JSON.stringify(json1,1));  
  }




    function exportFromPerson() {
    let firstname =  document.getElementById("first_name").value;
    let lastname =  document.getElementById("last_name").value;
    let physical = document.getElementById("physical").value;
    let location = document.getElementById("location").value;
    let date = document.getElementById("date").value;

  var selchbox = [];

  var inpfields = document.getElementsByTagName("*");

  for(var i=0; i< inpfields.length; i++) {
    if(inpfields[i].type == 'checkbox' && inpfields[i].checked == true) 
      selchbox.push(inpfields[i].value);
  }

    let json2 = {
      "first_name": firstname,
      "last_name": lastname,
      "physical": physical,
      "location": location,
      "date": date,
      "harrassment": selchbox
    };
    
    alert("Here is a json person" + JSON.stringify(json2,1));  
  }
