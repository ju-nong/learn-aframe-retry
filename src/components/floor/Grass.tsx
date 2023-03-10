import { Entity } from "@belivvr/aframe-react";

function Grass() {
    return (
        <Entity
            geometry={{
                primitive: "plane",
                width: 100,
                height: 100,
            }}
            material={{
                src: "texture/grass.jpg",
                repeat: { x: 100, y: 100 },
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
