import { useState, useEffect } from "react";
import { Scene, Entity } from "@belivvr/aframe-react";
import { Grass } from "@components/floor";
import { JumpButton } from "@components/navigation";
import { Me } from "@components";

function App() {
    return (
        <Scene>
            <Grass />
            <JumpButton size="medium" theme="dark" />
            <Me />
        </Scene>
    );
}

export default App;
