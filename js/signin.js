function signUp(){
  
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  
  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  alert("Signed Up");
}


function signIn(){
  
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  
  const promise = auth.signInWithEmailAndPassword(email.value, password.value);

//   promise.catch(e => alert(e.message));
// alert("Signed In " + email.value);

if (email.value) {
  // User is signed in.
  console.log(email.value);
  window.location.href = 'index.html';
} 
}


function signOut(){
  auth.signOut();
  // alert("Signed Out");
  window.location.href = 'signin.html'
}


$(function () {
var db = firebase.firestore();
    db.collection("movie")
  .get()
  .then((querySnapshot) => {
      querySnapshot.forEach((doc)=>{
          var card =
        `<div class="card">
          <img class="card-img-top" src="${doc.data().posterURL}" alt="">
          <div class="card-doby">
             <h4 class="card-title">${doc.data().title} - ${doc.data().year}</h4>
             <p class="card-text">${doc.data().detail}</p>
             </div>
        </div>`
        $("#list").append(card);
        $("#list2").append(card);
      }
      )
  }
  )});

    // $("#signingoogle").click(function(){
    
    //     var provider = new firebase.auth.GoogleAuthProvider();
    //     provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    //     firebase.auth().signInWithRedirect(provider);
    //     firebase.auth().getRedirectResult().then(function(result) {
    //         if (result.credential) {
    //           // This gives you a Google Access Token. You can use it to access the Google API.
    //           var token = result.credential.accessToken;
    //         }
    //         // The signed-in user info.
    //         var user = result.user;
    //       }).catch(function(error) {
    //         // Handle Errors here.
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //         console.log(errorCode);
    //         $("#error").text(errorMessage);
    //       });

    // });




        
    // $("#signinemail").click(function(){

    //     var email = $("#email").val();
    //     var password = $("#password").val();

    //     firebase.auth()
    //     .signInWithEmailAndPassword(email, password)
    //     .catch(function(error) {
    //         // Handle Errors here.
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //         console.log(errorCode);
    //         $("#error").text(errorMessage);
    //         // ...
    //       });
    // });

// })