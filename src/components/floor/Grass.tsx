import { Entity } from "@belivvr/aframe-react";

function Grass() {
    return (
        <Entity
            geometry={{
                primitive: "plane",
                width: 1000,
                height: 1000,
            }}
            material={{
                // src: "texture/grass.jpg",
                src: "texture/grass-detail.jpg",
                repeat: { x: 1000, y: 1000 },
            }}
            position={{
                x: 0,
                y: -1,
                z: 0,
            }}
            rotation={{
                x: -90,
                y: 0,
                z: 0,
            }}
        />
    );
}

export { Grass as default };
