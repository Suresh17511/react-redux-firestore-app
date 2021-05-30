import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyB1vs6db5Tg8N4AZvUPt2xbCh_UE2zemdk',
  authDomain: 'my-plans-32533.firebaseapp.com',
  projectId: 'my-plans-32533',
  storageBucket: 'my-plans-32533.appspot.com',
  messagingSenderId: '55818563696',
  appId: '1:55818563696:web:674ed14a4819ae203804b5',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timeStampsInSnapshots: true});

export default firebase;
