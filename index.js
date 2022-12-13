

let sharebtn = document.querySelector(".share");
let title = window.location.title;
let url1 = window.location.href;

sharebtn.addEventListener("click", () => {
  if (navigator.share) {
    navigator
      .share({
        title: `${title}`,
        url: `${url1}`,
      })
      .then(() => {})
      .catch((error) => {});
  }
});

// Experiment
const firebaseConfig = {
  apiKey: "AIzaSyBCtc366UZk_AmwvLnW8M1uLWfhtSSl7QE",
  authDomain: "login-project-6f9a7.firebaseapp.com",
  projectId: "login-project-6f9a7",
  storageBucket: "login-project-6f9a7.appspot.com",
  messagingSenderId: "730863267827",
  appId: "1:730863267827:web:c86e835dd437d07852ac86",
  measurementId: "G-ZHESQSC6H9",
};

// Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

//   const auth = firebase.auth()
//   const database = firebase.database()

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
var database = firebase.database();
userAuth();
function userAuth(){
    firebase.auth().onAuthStateChanged((user) => {
        let userName;
    if (user) {
        // User logged in already or has just logged in.
        let person = user.uid;
        var ref = firebase.database().ref('users/' + person);

        ref.on(
        'value',
        function (snapshot) {
            userName = snapshot.val().username;
            console.log(lgbtn.classList)
            logIn.innerHTML=`<div class ="User"> Hi! ${userName}</div> `
            
        },
        function (error) {
            console.log("Error: " + error.code);
        }
        );
        
    } else {
    }
    });
}

// document.getElementsByClassName("logout")[0].addEventListener("click",()=>{
    
// })

let links = document.getElementsByClassName("links")[0];
let lgbtn = document.getElementsByClassName("lgbtn")[0];
let logIn = document.getElementsByClassName("logIn")[0];
let container = document.getElementsByClassName("grid")[0];
lgbtn.addEventListener('click', () => {
    console.log("clicked");
      window.location.href = window.location.href + "\login";
    
    // else{
    //     firebase.auth().signOut().then(() => {
    //         userAuth();
    //       }).catch((error) => {
    //         // An error happened.
    //       });
    // }
});
function myFunction(x) {
  x.classList.toggle("change");
  links.classList.toggle("show");
  logIn.classList.toggle("showbtn");
  container.classList.toggle("transition");
}