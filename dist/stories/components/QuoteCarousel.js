"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteCarousel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./quote-carousel.css");
var QuoteCarousel = function (_a) {
    var quotes = _a.quotes, _b = _a.autoRotate, autoRotate = _b === void 0 ? true : _b, _c = _a.rotationInterval, rotationInterval = _c === void 0 ? 5000 : _c, _d = _a.backgroundColor, backgroundColor = _d === void 0 ? 'var(--vs-color-secondary)' : _d, _e = _a.textColor, textColor = _e === void 0 ? 'var(--vs-color-text-lighter)' : _e, _f = _a.quoteMarkColor, quoteMarkColor = _f === void 0 ? 'var(--vs-color-text-lighter)' : _f;
    var _g = (0, react_1.useState)(0), currentIndex = _g[0], setCurrentIndex = _g[1];
    var _h = (0, react_1.useState)(false), isTransitioning = _h[0], setIsTransitioning = _h[1];
    (0, react_1.useEffect)(function () {
        if (!autoRotate)
            return;
        var interval = setInterval(function () {
            setIsTransitioning(true);
            setTimeout(function () {
                setCurrentIndex(function (prev) { return (prev + 1) % quotes.length; });
                setIsTransitioning(false);
            }, 500);
        }, rotationInterval);
        return function () { return clearInterval(interval); };
    }, [autoRotate, quotes.length, rotationInterval]);
    var handleDotClick = function (index) {
        if (index === currentIndex)
            return;
        setIsTransitioning(true);
        setTimeout(function () {
            setCurrentIndex(index);
            setIsTransitioning(false);
        }, 500);
    };
    var currentQuote = quotes[currentIndex];
    var styles = {
        '--quote-carousel-bg': backgroundColor,
        '--quote-carousel-text': textColor,
        '--quote-carousel-quote-mark': quoteMarkColor,
    };
    return ((0, jsx_runtime_1.jsx)("section", { className: "quote-carousel", style: styles, children: (0, jsx_runtime_1.jsxs)("div", { className: "quote-carousel__container", children: [(0, jsx_runtime_1.jsx)("div", { className: "quote-carousel__content ".concat(isTransitioning ? 'fade-out' : 'fade-in'), children: (0, jsx_runtime_1.jsxs)("div", { className: "quote-carousel__quote-wrapper", children: [(0, jsx_runtime_1.jsxs)("div", { className: "quote-carousel__pull-quote", children: [(0, jsx_runtime_1.jsx)("span", { className: "quote-carousel__quote-mark" }), currentQuote.pullQuote] }), (0, jsx_runtime_1.jsx)("div", { className: "quote-carousel__body", children: currentQuote.body }), (0, jsx_runtime_1.jsxs)("div", { className: "quote-carousel__citation", children: [(0, jsx_runtime_1.jsx)("div", { className: "quote-carousel__citation-name", children: currentQuote.citation.name }), (0, jsx_runtime_1.jsx)("div", { className: "quote-carousel__citation-role", children: currentQuote.citation.role }), (0, jsx_runtime_1.jsx)("div", { className: "quote-carousel__citation-company", children: currentQuote.citation.company })] })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "quote-carousel__navigation", children: quotes.map(function (_, index) { return ((0, jsx_runtime_1.jsx)("button", { className: "quote-carousel__dot ".concat(index === currentIndex ? 'active' : ''), onClick: function () { return handleDotClick(index); }, "aria-label": "View quote ".concat(index + 1) }, index)); }) })] }) }));
};
exports.QuoteCarousel = QuoteCarousel;
