import logo from './logo.svg';
import React, { useEffect } from "react";
import { isAndroid, isIOS } from "react-device-detect";
import './App.css';

function App() {
  useEffect(() => {
    if (isAndroid) {
      const url =
        "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DF5261F93-D02A-4200-85FC-6548A4F73F91%26utm_content%3Dlo%26utm_medium%3Dbadge";

      window.location.replace(url);
    } else if (isIOS) {
      window.location.replace("instagram://");

      setTimeout(() => {
        window.location.replace(
          "https://apps.apple.com/us/app/instagram/id389801252"
        );
      }, 10000);
    } else {
      window.location.replace("https://www.bajajfinserv.in/");
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
