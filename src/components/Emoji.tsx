import { Entity } from "@belivvr/aframe-react";
import "@aframe/emoji-click";

function Emoji() {
    return (
        <Entity
            position={{
                x: 0,
                y: 0.1,
                z: -5,
            }}
            gltfModel="#emoji-gltf"
            emoji-ref
        />
    );
}

export { Emoji as default };
