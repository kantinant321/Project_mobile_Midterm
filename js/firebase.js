var firebaseConfig = {
  apiKey: "AIzaSyD-U38IgqepA_sczk63XlkcNVH8Wp2SzM4",
  authDomain: "movietest-affbf.firebaseapp.com",
  databaseURL: "https://movietest-affbf.firebaseio.com",
  projectId: "movietest-affbf",
  storageBucket: "movietest-affbf.appspot.com",
  messagingSenderId: "994130682311",
  appId: "1:994130682311:web:6195382241044a003479e2",
  measurementId: "G-YXH7F9XZE8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics(); 
const auth = firebase.auth();