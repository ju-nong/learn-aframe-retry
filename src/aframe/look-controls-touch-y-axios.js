// 모바일 환경에서 상하 시점 번경을 위한 코드
AFRAME.components["look-controls"].Component.prototype.onTouchMove = function (
    t,
) {
    if (this.touchStarted && this.data.touchEnabled) {
        const { clientWidth, clientHeight } = this.el.sceneEl.canvas;
        const { pageX, pageY } = t.touches[0];
        const { x, y } = this.touchStart;

        this.pitchObject.rotation.x +=
            0.6 * Math.PI * ((pageY - y) / clientHeight);
        this.yawObject.rotation.y += Math.PI * ((pageX - x) / clientWidth);

        this.pitchObject.rotation.x = Math.max(
            Math.PI / -2,
            Math.min(Math.PI / 2, this.pitchObject.rotation.x),
        );

        this.touchStart = {
            x: pageX,
            y: pageY,
        };
    }
};
