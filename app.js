wdi_16_names = ["Alexander Mireles", "Andre Trelles", "Andrew Ham", "Ari Kanamori", "Busyra Anwar", "Carlos Meza", "Chris Garvin", "Cristal Chavez", "Daley Meistrell", "Daniel Manuel", "Jefferson Choi", "Jessica Grinberg", "John Ward", "Kate Wood", "Kevin Mehrabi", "Max Tran", "Max Plisskin", "Megan Kakitsubo", "Meryl Harden", "Mike McCready", "Nick Dalke","Niels Bischoff", "Paul Aglione", "Rahul Sidhu", "Samuel Chun", "Samuel Amiri", "Sophie Chor","Steve Soter", "Taylor Adams", "Yo Wakita"];

// var namePick = wdi_16_names[Math.floor(Math.random() * wdi_16_names.length)];
// console.log(namePick);


function namePicker() {
	// var namePick = wdi_16_names.splice(Math.floor(Math.random() * wdi_16_names.length),1);

	var random = Math.floor(Math.random() * wdi_16_names.length)

	var namePick = wdi_16_names[random];

	document.getElementById("choosen_one").innerHTML = namePick;

	wdi_16_names.splice(random,1);

	console.log(namePick);

	if (wdi_16_names.length===0) {
     document.getElementById("choosen_one").innerHTML = "done";	
 }


};



// document.write(namePick);

// document.getElementById("chosen_one").innerHTML = namePicker;

// if wdi_16_names
// document.getElementById("chosen_one").innerHTML = (namePick);

// wdi_16_names.splice(namePick,1);