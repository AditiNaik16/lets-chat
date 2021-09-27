var firebaseConfig = {
    apiKey: "AIzaSyDHl4V4VG-xOlx4Pj_FkEbdwFKSxLcaqgg",
    authDomain: "lets-chat-df470.firebaseapp.com",
    databaseURL: "https://lets-chat-df470-default-rtdb.firebaseio.com",
    projectId: "lets-chat-df470",
    storageBucket: "lets-chat-df470.appspot.com",
    messagingSenderId: "146994703146",
    appId: "1:146994703146:web:f9c9369005935e33b34c53"
  };
  
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML="welcome "+user_name;
function addroom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room Name -" + Room_Name);
row = "div class='room_name' id"+Room_names+" onclick='redirectToRoomName(this.id)' >#" +Room_Names +"</div><hr>";
document.getElementById("output").innerHTML += row;
     //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "room.html";
}

function logout() 
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");     
    window.location = "index.html";
}