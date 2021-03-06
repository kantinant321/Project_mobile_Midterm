function Searchmovie() {
    const search = document.getElementById('searchText').value;
    const rpsearchText = search.replace(/ /g, "");
    var db = firebase.firestore();
    $("#Research").empty();
    db.collection("movie").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const title = doc.data().title;
        const rptitlemovie = title.replace(/ /g, "");
        var card = `
  <div class="card mb-3" style="max-width: 540px;">
  <div>
      <div class="col">
      <div>
        <img src="${doc.data().posterURL}" class="card-img">
        <h5 class="card-title">${doc.data().title}</h5>
      </div>
      </div>
      <div class="col">
      
      </div>
     
    </div>
  </div>
                  `;
        if (rptitlemovie.toLowerCase().indexOf(rpsearchText.toLowerCase()) != -1) {
          $("#Research").append(card);
        }
      });
    })
  }
  
  function buttonsearch(listN) {
    var db = firebase.firestore();
    $("#Research").empty();
    db.collection("movie").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var Gn = `${doc.data().Catagory}`
        var card = `
  <div class="card mb-3" style="max-width: 540px;">
  <div id="s${doc.data().listN}">
      <div class="col">
      <div>
        <img src="${doc.data().posterURL}" class="card-img">
        <h5 class="card-title">${doc.data().title}</h5>
      </div>
      </div>
      <div class="col">
      
      </div>
     
    </div>
  </div>
                  `;
        if (Gn.toLowerCase().indexOf(listN) != -1) {
          $("#Research").append(card);
        }else{
          if(listN === 0){
          $("#Research").append(card);
        }}
      });
    })
  }