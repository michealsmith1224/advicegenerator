import "animate.css";

import "./App.css";
import { useEffect, useState } from "react";
import AlertDismissible from "./components/add-alert";
import Loadingcomp from "./components/loadingcomp";
import { Errorcomp } from "./components/errorcomp";

function App() {
  const [advice, setadvice] = useState(null);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    fetch("	https://api.adviceslip.com/advice")
      .then((data) => {
        return data.json();
      })
      .then((advices) => {
        // console.log(advices.slip.advice);
        setloading(false);
        setadvice(advices);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const handlefetch = () => {
    fetch("	https://api.adviceslip.com/advice")
      .then((data) => {
        return data.json();
      })
      .then((advices) => {
        // console.log(advices.slip.advice);
        setloading(false);
        setadvice(advices);
      })
      .catch((err) => {
        console.log("unable to fetch. Check network connection");
        setloading(true);
      });
  };
  return (
    <div className="ad-gen-body container ">
      <div className="ad-gen-banner-info-overlay ">
        <AlertDismissible
          color="primary"
          heading="Friendly Advice!!!!"
          text="Click on the DICE to fetch advice"
        />
      </div>
      <div className="add-gen-conatiner container text-white p-5 text-center animate__animated animate__fadeIn">
        <div className="ad-gen-title">
          <h3>advice #{loading === true ? "" : advice.slip.id}</h3>
        </div>
        {/* =================  the body  ======================= */}
        <div className="main-ad-gen-body">
          <p>"{loading === true ? <Loadingcomp /> : advice.slip.advice}"</p>
        </div>
        {/* ============== end of the body  ====== */}
        <div className="ad-gen-horizontal-line">
          <div className="pause-icon">
            <i className="bi bi-pause ad-gen-pause"></i>
          </div>
          <div className="line">
            <hr />
          </div>
        </div>
        <div className="ad-gen-dic">
          <button onClick={handlefetch} className="btn">
            <i className="bi bi-dice-5-fill ad-gen-dice"></i>
          </button>
        </div>
      </div>
      {loading && <Errorcomp />}
    </div>
  );
}

export default App;
