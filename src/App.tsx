import { useState, useEffect } from "react";
import { isMobileDevice } from "@utils/devices";
import { Scene, Entity } from "@belivvr/aframe-react";
import { Grass } from "@components/floor";
import { JumpButton } from "@components/navigation";
import { Me } from "@components";

function App() {
    return (
        <Scene joystick>
            <Grass />
            <JumpButton size="medium" theme="dark" />
            <Me />
        </Scene>
    );
}

export default App;
