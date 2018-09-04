import firebase from 'firebase';

firebase.auth().signInWithEmailAndPassword(email, password).then(() => Actions.home()).catch((error) => {
    // Handle Errors here.
    //Verificar o c�digo e tratar o erro
       var errorCode = error.code;
              
       var errorMessage = error.message;
     // ...
   });
