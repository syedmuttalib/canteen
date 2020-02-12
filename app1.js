// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBnsAtdGG3Qefrd5qjO-YxkVI-HmhJJbjA",
    authDomain: "canteen-2433d.firebaseapp.com",
    databaseURL: "https://canteen-2433d.firebaseio.com",
    projectId: "canteen-2433d",
    storageBucket: "canteen-2433d.appspot.com",
    messagingSenderId: "701565464426",
    appId: "1:701565464426:web:2a3b2e9b4c0e95a10a3f13",
    measurementId: "G-F6CPTVTS4G"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
$("#btn2").click(function(){


  var email =  $("#email").val();

  var password = $("#password").val();

  var result = firebase.auth().signInWithEmailAndPassword(email, password); 
  result.catch(function(error){
    // Handle Errors here
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log(errorCode);
    console.log(errorMessage);
  });
  


})