let loginSelect = document.getElementsByClassName("login")[0];
let SignupSelect = document.getElementsByClassName("signup")[0];

loginSelect.addEventListener("click", () => {
    SignupSelect.classList.remove("active");
    loginSelect.classList.add("active");
    document.getElementsByClassName("SignPage")[0].classList.add("Not-visible");
    document.getElementsByClassName("logPage")[0].classList.remove("Not-visible");
    document.getElementsByClassName("errormsg")[0].innerHTML=""
});
SignupSelect.addEventListener("click", () => {
    loginSelect.classList.remove("active");
    SignupSelect.classList.add("active");
    document.getElementsByClassName("logPage")[0].classList.add("Not-visible");
    document.getElementsByClassName("SignPage")[0].classList.remove("Not-visible");
    document.getElementsByClassName("errormsg")[0].innerHTML=""
});

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

// signUp
let SignBtn = document.getElementById("Signing");
SignBtn.addEventListener("click", () => {
    SignUp();
});
let LoginBtn = document.getElementById("logged");
LoginBtn.addEventListener("click", () => {
    LogIn();
});


function SignUp() {
    let name = document.getElementById("floatingInput").value;
    let email = document.getElementById("floatingInput1").value;
    let password = document.getElementById("floatingPassword").value;
    let Confpassword = document.getElementById("floatingPassword1").value;
    if (password == Confpassword) {
        console.log("OKK");
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
        var user = userCredential.user;
        console.log(user.uid);
        addtodatabase(name, email, user.uid);
        window.location.href = "index.html";
        })
        .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        document.getElementsByClassName("errormsg")[0].innerHTML=`${errorMessage}`;
        // ..
        });
    }
    else{
        document.getElementsByClassName("errormsg")[0].innerHTML="Password Mismatch";
    }
}

function LogIn(){
    let email = document.getElementById("floatingInput0").value;
    let password = document.getElementById("floatingPassword0").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        window.location.href = "index.html";
        
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        document.getElementsByClassName("errormsg")[0].innerHTML=`${errorMessage}`
    });
}

function addtodatabase( name, email, userId) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
    });
  }
