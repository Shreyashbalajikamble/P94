const firebaseConfig = {
  apiKey: "AIzaSyAwNgtnDxLcllGUpKU_UEYtXHLeMxBoJi8",
  authDomain: "let-chat-313b6.firebaseapp.com",
  databaseURL: "https://let-chat-313b6-default-rtdb.firebaseio.com",
  projectId: "let-chat-313b6",
  storageBucket: "let-chat-313b6.appspot.com",
  messagingSenderId: "692251292857",
  appId: "1:692251292857:web:e064812134ce149cdc5768"
};

firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("welcome").innerHTML=user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function addRoom(){
room=document.getElementById("add_room").value;
firebase.database().ref("/").child(room).update({
      room1 : room,
})
localStorage.setItem("room_name",room);
window.location="kwitter_page.html";
}
