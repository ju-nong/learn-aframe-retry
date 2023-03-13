import { useState, useEffect } from "react";
import { isMobileDevice } from "@utils/devices";
import {
    Entity,
    Scene,
    Sky,
    Text,
    Assets,
    AssetItem,
} from "@belivvr/aframe-react";
import { Grass } from "@components/floor";
import { JumpButton } from "@components/navigation";
import { Me, Emoji } from "@components";
import Dogs from "@components/dogs/Dogs";
import "@aframe/emoji-click";

function App() {
    return (
        <Scene joystick>
            <Assets>
                <AssetItem id="emoji-gltf" src="models/Thonker.gltf" />
            </Assets>

            {/* 하늘 */}
            <Sky
                id="forest-sky"
                radius={100}
                material={{
                    src: "texture/forest.jpeg",
                }}
            />

            {/* 바닥 */}
            <Grass />

            {/* 환영인사 */}
            <Text
                align="center"
                color="#fff"
                baseline="center"
                width={10}
                position={{
                    x: 0,
                    y: 1,
                    z: -5,
                }}
                side="double"
                value="오 어서오시고"
                shader="msdf"
                font="https://raw.githubusercontent.com/myso-kr/aframe-fonts-korean/master/fonts/ofl/nanumgothic/NanumGothic-ExtraBold.json"
                animation={{
                    dir: "alternate",
                    dur: 1000,
                    easing: "easeInQuad",
                    elasticity: 400,
                    loop: 10000000,
                    property: "scale",
                    to: "1.3 1.3 1.3",
                }}
                lookControls={{
                    magicWindowTrackingEnabled: true,
                }}
            />

            {/* 이모지 */}
            <Emoji />

            <JumpButton size="medium" theme="dark" />
            <Me />
        </Scene>
    );
}

export default App;
