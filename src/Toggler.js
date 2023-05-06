import { useState } from "react";
import "./styles.css";

export default function Toggler() {
  const [on, setOn] = useState(false);
  return (
    <div className="wrapper" onClick={() => setOn((o) => !o)}>
      <div aria-checked={on} className="toggler">
        <div className="stars"></div>
        <div className="ballWrapper">
          <div className="ball">
            <div className="krator1"></div>
            <div className="krator2"></div>
            <div className="krator3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
