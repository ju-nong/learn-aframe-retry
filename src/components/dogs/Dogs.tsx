import React from "react";
import { Entity, Box } from "@belivvr/aframe-react";

function Dogs() {
    const dogs = ["ari1", "ari2", "esul", "yongsook"];

    return (
        <Entity
            position={{
                x: 0,
                y: 4,
                z: -9,
            }}
        >
            {dogs.map((dog, index) => (
                <Box
                    width={5}
                    height={5}
                    depth={5}
                    material={{
                        src: `images/${dog}.png`,
                        transparent: true,
                    }}
                    position={{
                        x: index * 5,
                        y: 0,
                        z: 0,
                    }}
                    lookControls={{
                        magicWindowTrackingEnabled: true,
                    }}
                />
            ))}
        </Entity>
    );
}

export { Dogs as default };
