"use strict";
var KTLayoutDocumentation = function () {
    var e;
    return {
        init: function (t) {
            var i;
            e = document.querySelector("#kt_docs_aside_menu_wrapper"),
                function (e) {
                    var t = e;
                    if (void 0 === t && (t = document.querySelectorAll(".highlight")), t && t.length > 0)
                        for (var i = 0; i < t.length; ++i) {
                            var n = t[i].querySelector(".highlight-copy");
                            if (n) new ClipboardJS(n, {
                                target: function (e) {
                                    var t = e.closest(".highlight"),
                                        i = t.querySelector(".tab-pane.active");
                                    return null == i && (i = t.querySelector(".highlight-code")), i
                                }
                            }).on("success", (function (e) {
                                var t = e.trigger.innerHTML;
                                e.trigger.innerHTML = "copied", e.clearSelection(), setTimeout((function () {
                                    e.trigger.innerHTML = t
                                }), 2e3)
                            }))
                        }
                }(t), e && (i = e.querySelector(".menu-link.active")) && !0 !== KTUtil.isVisibleInContainer(i, e) && e.scroll({
                    top: KTUtil.getRelativeTopPosition(i, e),
                    behavior: "smooth"
                })
        }
    }
}();
KTUtil.onDOMContentLoaded((function () {
    KTLayoutDocumentation.init()
}));
