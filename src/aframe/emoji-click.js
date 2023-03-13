AFRAME.registerComponent("emoji-ref", {
    init: function () {
        const data = this;
        const el = data.el;

        el.addEventListener("click", function () {
            alert("hihi");
        });
    },
});
