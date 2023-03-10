import { useState, useEffect } from "react";
import { Scene, Entity } from "@belivvr/aframe-react";
import { Grass } from "@components/floor";

function App() {
    return (
        <Scene>
            <Grass />
        </Scene>
    );
}

export default App;
