   
   function exportFromLocation() {
    let streetnumber = document.getElementById("street_number").value;
    let streetname = document.getElementById("street_name").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let zip = document.getElementById("zip").value;
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
