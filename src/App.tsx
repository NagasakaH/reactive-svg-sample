import React, { useEffect, useRef } from "react";
import { ReactComponent as Test } from "./test.drawio.svg";
import { reactiveSVGSettings, loadSettings } from "@nagasakah/reactive-svg";

const settings: reactiveSVGSettings = {
  baseURL: `${process.env.PUBLIC_URL}md/`,
  events: [
    {
      name: "rect1",
      markdownFile: "helloworld.md",
    },
  ],
};
function App() {
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (ref.current) {
      loadSettings(settings, ref.current);
    }
  }, [ref]);
  return (
    <div className="App">
      <Test ref={ref} />
    </div>
  );
}

export default App;
