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
        $("#list2").append(card);
      }
      )
  }
  );