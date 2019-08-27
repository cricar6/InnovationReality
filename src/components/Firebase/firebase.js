import * as firebase from 'firebase';

import 'firebase/database';

let config = {
    apiKey: "AIzaSyCBPPkx5ask36z1lc_InZpKXYhbs4Lc27s",
    authDomain: "innlabvirtual-684a1.firebaseapp.com",
    databaseURL: "https://innlabvirtual-684a1.firebaseio.com",
    projectId: "innlabvirtual-684a1",
    storageBucket: "innlabvirtual-684a1.appspot.com",
    messagingSenderId: "314530013710",
    appId: "1:314530013710:web:6b52cb735ed666de"
};

class Firebase {
    constructor() {
        firebase.initializeApp(config);

        this.db = firebase.database();
    }

    message = uid => this.db.ref('post/' + uid);
    messages = () => this.db.ref('posts/');

}

export default Firebase;