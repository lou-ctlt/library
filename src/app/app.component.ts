import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library';
  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyBoAFftUITy-g1JLZjDeG_AvWUGjvnWhYA",
      authDomain: "library-52c3c.firebaseapp.com",
      databaseURL: "https://library-52c3c.firebaseio.com",
      projectId: "library-52c3c",
      storageBucket: "library-52c3c.appspot.com",
      messagingSenderId: "479847839799",
      appId: "1:479847839799:web:e074bbc1df3e3c63a567b2",
      measurementId: "G-RZGDZ1WG63"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
