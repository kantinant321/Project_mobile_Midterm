function m() {
  var db = firebase.firestore();
  db.collection("movie")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var num = `${doc.data().listN}`
        var card =
          `<div class="card">
          <img class="card-img-top" src="${doc.data().posterURL}" alt="">
          <div class="card-doby">
             <h4 class="card-title">${doc.data().title} - ${doc.data().year}</h4>
             <p class="card-text">${doc.data().detail}</p>
             </div>
        </div>`
          $("#D"+ num).append(card);
        
      }
      )
    }
    )
};

$(function () {
  var db = firebase.firestore();
  db.collection("movie").get().then((querySnapshot) => {
         
      querySnapshot.forEach((doc) => {
              var num = `${doc.data().listN}`
              var card = ` <img src="${doc.data().posterURL}" width="375" height="550" id="m1">
              `;
              $("#m" + num).append(card);
          });
      })
})