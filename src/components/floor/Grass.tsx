import { Entity } from "@belivvr/aframe-react";

function Grass() {
    return (
        <Entity
            geometry={{
                primitive: "plane",
                width: 100,
                height: 100,
            }}
            rotation={{
                x: -90,
                y: 0,
                z: 0,
            }}
            material={{
                src: "texture/grass.jpg",
                repeat: { x: 100, y: 100 },
            }}
        />
    );
}

export { Grass as default };
