// Initialize the default app

var config = {
    apiKey: "AIzaSyAReBR16X7iW7h-fHutiC_5on66_vhKKQM",
    authDomain: "mobileappsscoreboard.firebaseapp.com",
    databaseURL: "https://mobileappsscoreboard.firebaseio.com",
    projectId: "mobileappsscoreboard",
    storageBucket: "mobileappsscoreboard.appspot.com",
    messagingSenderId: "173914236267"
  };
  
var defaultApp = firebase.initializeApp(config);

console.log(defaultApp.name);  // "[DEFAULT]"

var defaultDatabase = defaultApp.database();

// Get a reference to the root of the Database
var rootRef = defaultDatabase.ref();

/*firebase.enableLogging(function(logMessage) {
  // Add a timestamp to the messages.
  console.log('[FIREBASE] ' + new Date().toISOString() + ': ' + logMessage);
});*/


function getPlace(number) {
	return rootRef.child("leaderboarddata/place" + number).once('value');
}

function updateElementID(elementID, value) {
	var setText = "";
	if (value == null)
		setText = "-";
	else
		setText = value;
	$("#" + elementID).text(setText);
}

function attachPlaceListener(number) {
	rootRef.child("leaderboarddata/place" + number).on('value', function(snapshot) {
	updateElementID("place" + number, snapshot.val());
});
}

function loadContent() {
	/*var intAPlusLo = 0.97, intAHi = 0.969999, intALo = 0.93, intAMinusHi = 0.929999, intAMinusLo = 0.9,
		intBPlusHi = 0.899999, intBPlusLo = 0.87, intBHi = 0.869999, intBLo = 0.83, intBMinusHi = 0.829999,
		intBMinusLo = 0.8, intCPlusHi = 0.799999, intCPlusLo = 0.77, intCHi = 0.769999, intCLo = 0.73, intCMinusHi = 0.729999,
		intCMinusLo = 0.7, intDPlusHi = 0.699999, intDPlusLo = 0.67, intDHi = 0.669999, intDLo = 0.63, intDMinusHi = 0.629999,
		intDMinusLo = 0.6;
	var intScore = parseFloat($("#testTotal").val());
	var aplus = "", aflat = "", aminus = "", bplus = "", bflat = "", bminus = "", cplus = "", cflat = "", cminus = "", dplus = "", dflat = "", dminus = "", fflat = "";
	aplus = "" + Math.ceil((intScore) * intAPlusLo) + " - " + (intScore == "" || intScore == null ? intScore = 0 : intScore);
	aflat = "" + Math.ceil(intScore * intALo) + " - " + Math.floor(intScore * intAHi);
	aminus = "" + Math.ceil(intScore * intAMinusLo) +" - " + Math.floor(intScore * intAMinusHi);
	bplus = "" + Math.ceil(intScore * intBPlusLo) + " - " + Math.floor(intScore * intBPlusHi);
	bflat = "" + Math.ceil(intScore * intBLo) + " - " + Math.floor(intScore * intBHi);
	bminus = "" + Math.ceil(intScore * intBMinusLo) + " - " + Math.floor(intScore * intBMinusHi);
	cplus = "" + Math.ceil(intScore * intCPlusLo) + " - " + Math.floor(intScore * intCPlusHi);
	cflat = "" + Math.ceil(intScore * intCLo) + " - " + Math.floor(intScore * intCHi);
	cminus = "" + Math.ceil(intScore * intCMinusLo) + " - " + Math.floor(intScore * intCMinusHi);
	dplus = "" + Math.ceil(intScore * intDPlusLo) + " - " + Math.floor(intScore * intDPlusHi);
	dflat = "" + Math.ceil(intScore * intDLo) + " - " + Math.floor(intScore * intDHi);
	dminus = "" + Math.ceil(intScore * intDMinusLo) + " - " + Math.floor(intScore * intDMinusHi);
	fflat = "0 - " + Math.floor(intScore * 0.599999);*/
	
	for (i = 1; i < 14; i++) {
		$("#place" + i).text("Loading...");
	}
	
	$(".score").each(function(index){
		attachPlaceListener(index + 1);
		//$(this).text(getPlace(index + 1));
	  });
	
	/*$("#aplus").text(aplus);
	$("#aflat").text(aflat);
	$("#aminus").text(aminus);
	$("#bplus").text(bplus);
	$("#bflat").text(bflat);
	$("#bminus").text(bminus);
	$("#cplus").text(cplus);
	$("#cflat").text(cflat);
	$("#cminus").text(cminus);
	$("#dplus").text(dplus);
	$("#dflat").text(dflat);
	$("#dminus").text(dminus);
	$("#fflat").text(fflat);*/
	/*$(".score").each(function(index){
	  var currentScore = $(this).text();
	  //if first part of the string aka GRADElow is > then second part of the string GRADEhigh then set the value to NA.
	  if (parseInt(currentScore.substring(0, currentScore.indexOf(" "))) > parseInt(currentScore.substring(currentScore.lastIndexOf(" ") + 1, currentScore.length))) {
		currentScore = "NA - NA";
		$(this).text(currentScore);
	  }
	});*/
}

$(document).ready(function(){
					loadContent(); 
					$(".buttonInner").click(loadContent());
				});



