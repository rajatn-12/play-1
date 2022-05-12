import logo from './logo.svg';
import React, { useEffect } from "react";
import { isAndroid, isIOS } from "react-device-detect";
import './App.css';

function App() {
  useEffect(() => {
    if (isAndroid) {
      const url =
        "intent://play.google.com/#Intent;scheme=https;package=com.instagram.android;end";

      window.location.replace(url);
    } else if (isIOS) {
      // window.location.replace("instagram://");

      // setTimeout(() => {
      //   window.location.replace(
      //     "https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo"
      //   );
      // }, 10000);

      const urlIOS = "https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo";

      window.location.replace(urlIOS);
    } else {
      window.location.replace("https://instagram.com");
    }
  }, []);
  return (
    <div className="App">
      <div>
        If you have not been automatically redirected, click on the following link:
      </div>
      {isAndroid ? (
        <a href="https://play.google.com/store/apps/details?id=com.instagram.android">
          Open Android app
        </a>
      ) : isIOS ? (
        <a href="https://apps.apple.com/us/app/instagram/id389801252">
          Open iOS app
        </a>
      ) : (
        <a href="https://instagram.com">Open Web app</a>
      )}
    </div>
  );
}

export default App;
