//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBenRb4eo-Ac1R0cEAYFGa_m-4nbxrqa-I",
    authDomain: "kwitter-74276.firebaseapp.com",
    projectId: "kwitter-74276",
    storageBucket: "kwitter-74276.appspot.com",
    messagingSenderId: "424685548477",
    appId: "1:424685548477:web:95da1fda67d5c9bc8e18d4",
    measurementId: "G-N5ZB0CL2LG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();