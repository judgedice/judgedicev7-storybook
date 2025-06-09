"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Document;
var jsx_runtime_1 = require("react/jsx-runtime");
var document_1 = require("next/document");
function Document() {
    return ((0, jsx_runtime_1.jsxs)(document_1.Html, { lang: "en", children: [(0, jsx_runtime_1.jsx)(document_1.Head, {}), (0, jsx_runtime_1.jsxs)("body", { className: "antialiased", children: [(0, jsx_runtime_1.jsx)(document_1.Main, {}), (0, jsx_runtime_1.jsx)(document_1.NextScript, {})] })] }));
}
