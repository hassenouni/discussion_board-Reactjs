import React, { Component } from "react";
import ThreadDisplay from "./ThreadDisplay/components/ThreadDisplay";
import firebase from "firebase/app";
import "firebase/database";



class App extends Component {
  constructor(props) {
    super(props);

    const config = 
    {
      apiKey: "AIzaSyD9y-Y8PLdZLvhbUb9h1oHp_PTeS_LoyDI",
      authDomain: "forumdiscussionapp.firebaseapp.com",
      databaseURL: "https://forumdiscussionapp.firebaseio.com",
      projectId: "forumdiscussionapp",
      storageBucket: "forumdiscussionapp.appspot.com",
      messagingSenderId: "944508963387",
      appId: "1:944508963387:web:9a2ee29348b92d09c9ea1e",
      measurementId: "G-2Y5713HB6G"
    };
    this.app = firebase.initializeApp(config);
    this.database = this.app.database();
  }

  render() {
    return <ThreadDisplay database={this.database} />;
  }
}
export default App;
