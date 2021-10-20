    import {initializeApp} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js"

    var firebaseConfig = {
        apiKey: keys.APIKEY,
        authDomain: keys.AUTHDOMAIN,
        databaseURL: keys.DATABASEURL,
        projectId: keys.PROJECTID,
        storageBucket: keys.STORAGEBUCKET,
        messagingSenderId: keys.MESSAGINGSENDERID,
        appId: keys.APPID
      };
    
    
    const app=initializeApp(firebaseConfig);
    


