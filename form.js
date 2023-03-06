const chaos = ["alastor","discord","akechi","chaos","darkorn","jevil","spamton","wilbur","death","loki","vox","joey"];
    function sub() {
        let chaosmode = false;
        let fname = document.getElementById("fname").value.toString();
        let lname = $("#lname").val();
        let subject = $("#subject").val();
       for (let i = 0; i < chaos.length; i++) {
      if (fname.toLowerCase() == chaos[i]) {
          chaosmode = true;
          
      }
      }
    if (chaosmode == false) {
        if (fname.trim() != "" && lname.trim() != "" && subject.trim() != "")
        alert("your response has been sent")
    }     
    
    }
       
    
    