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

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());


var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return false; //don't redirect
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    //firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'
};


//=======================================================================================================================//


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
	
	for (i = 1; i < 14; i++) {
		$("#place" + i).text("Loading...");
	}
	
	$(".score").each(function(index){
		attachPlaceListener(index + 1);
		//$(this).text(getPlace(index + 1));
	  });

}

$(document).ready(function(){
					loadContent(); 
					//$(".buttonInner").click(loadContent());
					/*ui.start('#firebaseui-auth-container', {
					  signInOptions: [
						firebase.auth.GoogleAuthProvider.PROVIDER_ID,
						firebase.auth.EmailAuthProvider.PROVIDER_ID
					  ],
					  // Other config options...
					});*/
					$("#loader").hide();
					$("#submitButton").click(function() {
						alert("Button clicked\n" + $("#dbaseKeyPath").val() + "\n" + $("#dbaseVal").val());
						try {
							rootRef.child($("#dbaseKeyPath").val()).set($("#dbaseVal").val());
						} catch (err) {
							alert("error: " + err.message);
						}						
					});
});




