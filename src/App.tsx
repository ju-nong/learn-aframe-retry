import { useState, useEffect } from "react";
import { isMobileDevice } from "@utils/devices";
import { Scene, Sky, Box } from "@belivvr/aframe-react";
import { Grass } from "@components/floor";
import { JumpButton } from "@components/navigation";
import { Me } from "@components";
import Dogs from "@components/dogs/Dogs";

function App() {
    return (
        <Scene joystick>
            <Sky
                id="forest-sky"
                radius={100}
                material={{
                    src: "texture/forest.jpeg",
                }}
            />
            <Grass />
            <Dogs />

            <JumpButton size="medium" theme="dark" />
            <Me />
        </Scene>
    );
}

export default App;
