function details() {
	var in1 = document.getElementById("input1").value;
	var in2 = document.getElementById("input2").value;


	document.getElementById("out1").textContent = "";
	document.getElementById("out2").textContent = "";
	document.getElementById("out3").textContent = "";
	document.getElementById("out4").textContent = "";
	document.getElementById("out5").textContent = "";

	document.getElementById("out1").textContent = "welocome to nit calicut website";

	var groups = {"CS":"COMPUTER SCIENCE AND ENGNEERING BRANCH",
                   "EC":"ELECTRONICS AND COMMUNICATION ENGNEERING BRANCH",
                   "EE":"ELECTRICAL AND ELECTRONICS ENGNEERING BRANCH",
                   "ME":"MECANICAL ENGNEERING BRANCH",
                   "CV":"CIVIL ENGNEERING BRANCH",
                   "CH":"CHEMICAL ENGNEERING BRANCH",
                   "BT":"BIOTECHNOLOGY BRANCH",
                   "cs":"COMPUTER SCIENCE AND ENGNEERING BRANCH",
                   "ec":"ELECTRONICS AND COMMUNICATION ENGNEERING BRANCH",
                   "ee":"ELECTRICAL AND ELECTRONICS ENGNEERING BRANCH",
                   "me":"MECANICAL ENGNEERING BRANCH",
                   "cv":"CIVIL ENGNEERING BRANCH",
                   "ch":"CHEMICAL ENGNEERING BRANCH",
                   "bt":"BIOTECHNOLOGY BRANCH"   };
    var years = {"16":"2k16-2k20",
                 "17":"2k17-2k21",
                 "18":"2k18-2k22",
                 "19":"2k19-2k23",
                 "20":"2k20-2k24",
                 "21":"2k21-2k25",
                 "22":"2k22-2k26" };


	if (in2[0] == "B" || in2[0] == "b" && in2.length == 9) {
		document.getElementById("out1").textContent = "hello Mr./Ms. " + in1 + "!";
		document.getElementById("out2").textContent = "Welcome To Nit Calicue Website.";

		if (in2[2] == "6" || in2[2] == "7") {
			document.getElementById("out3").textContent = "You Completed Your B.tech in NIT Calicut" + " the year of passed-out is:" + years[in2[1]+in2[2]];
			document.getElementById("out4").textContent = "Your Completed Course is:" + groups[in2[7]+in2[8]];
		}
		else {
			document.getElementById("out3").textContent = "currenty your are stydying in Nit calicut, and you are:" + years[in2[1]+in2[2]] + " Batch";
            document.getElementById("out4").textContent = "Your Currently studying in :" + groups[in2[7]+in2[8]];
		}
             
        var name = "";
		for (var i in in1) {
			if (in1[i] == " ") {
				break;
			}
			name += in1[i];
		}

		roll = "";
		for (var i = 1; i <= 6;i++ ) {
			roll += in2[i]
		}

        document.getElementById("out5").textContent = "your collage mail id is:" + name.toLowerCase() + "_b" + roll + in2[7].toLowerCase() + in2[8].toLowerCase() + "@nitc.ac.in";
	}
	else {
		document.getElementById("out2").textContent = "sorry you entered invalid login details!";
		document.getElementById("out3").textContent = "please once again enter the correct emailid and roll number";
	}
    
}
