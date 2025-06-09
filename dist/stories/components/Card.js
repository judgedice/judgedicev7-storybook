"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./card.css");
var Card = function (_a) {
    var title = _a.title, description = _a.description, features = _a.features, ctaText = _a.ctaText, _b = _a.variant, variant = _b === void 0 ? 'default' : _b, backgroundImage = _a.backgroundImage, onCtaClick = _a.onCtaClick;
    var cardClass = "card ".concat(variant !== 'default' ? variant : '');
    var backgroundStyle = backgroundImage
        ? { backgroundImage: "url(".concat(backgroundImage, ")") }
        : {};
    return ((0, jsx_runtime_1.jsxs)("div", { className: cardClass, children: [(0, jsx_runtime_1.jsx)("div", { className: "card-image", style: backgroundStyle, children: (0, jsx_runtime_1.jsx)("h2", { className: "card-title", children: title }) }), (0, jsx_runtime_1.jsxs)("div", { className: "card-details", children: [(0, jsx_runtime_1.jsx)("h3", { className: "detail-title", children: title }), (0, jsx_runtime_1.jsx)("p", { className: "detail-description", children: description }), (0, jsx_runtime_1.jsx)("ul", { className: "detail-features", children: features.map(function (feature, index) { return ((0, jsx_runtime_1.jsx)("li", { children: feature }, index)); }) }), (0, jsx_runtime_1.jsx)("button", { className: "detail-cta", onClick: onCtaClick, children: ctaText })] })] }));
};
exports.Card = Card;
