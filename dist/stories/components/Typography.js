"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typography = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./typography.css");
var Typography = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'body' : _b, _c = _a.weight, weight = _c === void 0 ? 'normal' : _c, _d = _a.color, color = _d === void 0 ? 'text' : _d, _e = _a.align, align = _e === void 0 ? 'left' : _e, _f = _a.className, className = _f === void 0 ? '' : _f, children = _a.children;
    // Map variant to HTML element
    var getElement = function (variant) {
        if (variant.startsWith('h'))
            return variant;
        if (variant === 'subtitle')
            return 'h2';
        return 'p';
    };
    var Component = getElement(variant);
    var classes = [
        'vs-typography',
        "vs-typography--".concat(variant),
        "vs-typography--".concat(weight),
        "vs-typography--".concat(color),
        "vs-typography--".concat(align),
        className,
    ].join(' ');
    return (0, jsx_runtime_1.jsx)(Component, { className: classes, children: children });
};
exports.Typography = Typography;
