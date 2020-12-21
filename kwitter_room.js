
 var firebaseConfig = {
      apiKey: "AIzaSyCUSMJScnqRbwhZu0_Zh8e7aFUM28l3WNI",
      authDomain: "kwitter-83c3c.firebaseapp.com",
      databaseURL: "https://kwitter-83c3c-default-rtdb.firebaseio.com",
      projectId: "kwitter-83c3c",
      storageBucket: "kwitter-83c3c.appspot.com",
      messagingSenderId: "708710413825",
      appId: "1:708710413825:web:a3006c54300cd4e5673200",
      measurementId: "G-GYTMM3ZYC9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
