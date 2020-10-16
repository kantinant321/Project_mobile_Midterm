$(function () {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            var email = user.email;
            $("#username").text(email);

        } else {
            window.location.href = 'signin.html';
        }
    });

    $("#signout").click(function () {
        firebase.auth().signOut()
            .then(function () {
                // Sign-out successful.
            }).catch(function (error) {
                // An error happened.
            });
    });

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
      }
      )
  }
  )});