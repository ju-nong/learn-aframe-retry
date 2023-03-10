import { useState } from "react";
import { Camera } from "@belivvr/aframe-react";
import { isMobileDevice } from "@utils/devices";
import "@aframe/look-controls-touch-y-axios";
import "@aframe/jump";

interface MeProps {
    speed?: number;
    fly?: boolean;
}

const DEFAULT_CONFIG = {
    SPEED: 15,
    FLY: false,
};

function Me({ speed, fly }: MeProps) {
    const initSpeed = speed ?? DEFAULT_CONFIG.SPEED;

    const [stateSpeed, setStateSpeed] = useState(initSpeed);
    const [stateFly, setStateFly] = useState(fly ?? DEFAULT_CONFIG.FLY);

    window.addEventListener("keyup", function (event) {
        if (!event.shiftKey) {
            setStateSpeed(initSpeed);
        }
    });

    window.addEventListener("keydown", function (event) {
        if (event.shiftKey) {
            setStateSpeed(initSpeed * 2);
        }
    });

    return (
        <Camera
            jump="pressToJump: #jump;"
            position={{
                x: 0,
                y: 0,
                z: 0,
            }}
            lookControls={{
                magicWindowTrackingEnabled: !isMobileDevice,
            }}
            wasdControls={{
                acceleration: stateSpeed,
                fly: stateFly,
            }}
        />
    );
}

export { Me as default };
