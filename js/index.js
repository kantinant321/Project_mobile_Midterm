// $(function () {

//     firebase.auth().onAuthStateChanged(function (user) {
//         if (user) {
//             // User is signed in.
//             displayName = user.displayName;
//             email = user.email;
//             photoUrl = user.photoURL;
//             console.log(displayName, email, photoUrl);

//             $("#username").text(email);
//             $("#displayname").text(displayName);
//             $("#photo").attr("src",photoUrl);

//         } else {
//             window.location.href = 'signin.html';
//         }
//     });

//     var db = firebase.firestore();
//     db.collection("movie")
//   .get()
//   .then((querySnapshot) => {
//       querySnapshot.forEach((doc)=>{
//           var card =
//         `<div class="card">
//           <img class="card-img-top" src="${doc.data().posterURL}" alt="">
//           <div class="card-doby">
//              <h4 class="card-title">${doc.data().title} - ${doc.data().year}</h4>
//              <p class="card-text">${doc.data().detail}</p>
//              </div>
//         </div>`
//         $("#list").append(card);
//         $("#list2").append(card);
//       }
//       )
//   }
//   )});