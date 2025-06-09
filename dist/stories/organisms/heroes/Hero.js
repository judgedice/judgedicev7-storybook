"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./hero-css-styles.css");
var Hero = function (_a) {
    var imageUrl = _a.imageUrl, _b = _a.imageAlt, imageAlt = _b === void 0 ? '' : _b, imageHeading = _a.imageHeading, imageSubtext = _a.imageSubtext, contentHeading = _a.contentHeading, contentSubtext = _a.contentSubtext, ctaText = _a.ctaText, _c = _a.ctaBorder, ctaBorder = _c === void 0 ? true : _c, onCtaClick = _a.onCtaClick, _d = _a.layout, layout = _d === void 0 ? 'image-left' : _d, _e = _a.darkBgColor, darkBgColor = _e === void 0 ? '#1a3b3a' : _e;
    var heroClass = "hero ".concat(layout);
    var getImageStyle = function () {
        if (!imageUrl)
            return {};
        var backgroundImage = typeof imageUrl === 'string'
            ? "url(".concat(imageUrl, ")")
            : "url(".concat(imageUrl.toString(), ")");
        return { backgroundImage: backgroundImage };
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: heroClass, children: [(0, jsx_runtime_1.jsx)("div", { className: "hero-image-section", children: (0, jsx_runtime_1.jsx)("div", { className: "hero-image", style: getImageStyle(), role: "img", "aria-label": imageAlt, children: (0, jsx_runtime_1.jsx)("div", { className: "hero-image-overlay", children: (0, jsx_runtime_1.jsxs)("div", { className: "hero-image-content", children: [(0, jsx_runtime_1.jsx)("h1", { className: "hero-image-heading", children: imageHeading }), (0, jsx_runtime_1.jsx)("p", { className: "hero-image-subtext", children: imageSubtext })] }) }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "hero-content-section", style: { backgroundColor: darkBgColor }, children: (0, jsx_runtime_1.jsxs)("div", { className: "hero-content", children: [(0, jsx_runtime_1.jsx)("h2", { className: "hero-content-heading", children: contentHeading }), (0, jsx_runtime_1.jsx)("p", { className: "hero-content-subtext", children: contentSubtext }), ctaText && ((0, jsx_runtime_1.jsx)("button", { className: "hero-cta ".concat(ctaBorder ? 'bordered' : 'filled'), onClick: onCtaClick, children: ctaText }))] }) })] }));
};
exports.Hero = Hero;
