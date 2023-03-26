import React, { useState, useEffect } from "react";
import CountryGame from "./CountryGame";
import worldImg from "./world.jpg";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function UpdateAlert() {
  const [show, setShow] = useState(true);

  function activateAndUpdateServiceWorker() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistration().then(function (registration) {
        if (registration) {
          registration.waiting.postMessage({ type: "SKIP_WAITING" });
          registration.update().then(function () {
            window.location.reload();
          });
        }
      });
    }
  }

  return (
    <>
      <Alert show={show} variant="info">
        <Alert.Heading>A new version is available.</Alert.Heading>
        <p>Click to install the latest updates</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button
            onClick={() => {
              activateAndUpdateServiceWorker();
            }}
            variant="info"
          >
            Update
          </Button>
          <Button onClick={() => setShow(false)} variant="outline-info">
            Maybe Later
          </Button>
        </div>
      </Alert>
    </>
  );
}

function App() {
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    // Check for service worker updates
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          // Check if there is an updated version of the service worker
          registration.addEventListener("updatefound", () => {
            const installingWorker = registration.installing;
            if (installingWorker) {
              installingWorker.addEventListener("statechange", () => {
                if (installingWorker.state === "installed") {
                  // An updated version of the service worker is available
                  setUpdateAvailable(true);
                }
              });
            }
          });
        })
        .catch((error) => {
          console.log("Error registering service worker:", error);
        });
    }
  }, []);

  return (
    <div className="flag-app">
      {updateAvailable && <UpdateAlert />}
      <header
        className="title-header"
        style={{ backgroundImage: `url(${worldImg})` }}
      >
        <h1 className="title-text">Guess The Flag</h1>
      </header>
      <CountryGame />
    </div>
  );
}

export default App;
