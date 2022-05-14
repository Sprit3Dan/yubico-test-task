import React from "react";
import logo from "../../media/yubico_logo.png";

import "./Header.css";

/** {@link MainHeader} component renders application-wide header. */
const MainHeader: React.FC<{}> = () => (
    <div className="header">
        <img src={logo} alt="logo" />
    </div>
);

export default MainHeader;
