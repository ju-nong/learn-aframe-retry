import React from "react";
import { Camera } from "@belivvr/aframe-react";
import { isMobileDevice } from "@utils/devices";

function Me() {
    return (
        <Camera
            position={{
                x: 0,
                y: 0,
                z: 0,
            }}
        />
    );
}

export { Me as default };
