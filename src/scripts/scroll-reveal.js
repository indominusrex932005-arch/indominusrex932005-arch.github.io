import ScrollReveal from 'scrollreveal'

export default function initScrollReveal(defaultProps = null) {
    const targetElements = [
        { element: ".banner-text", animation: { delay: 700, origin: window.innerWidth > 768 ? "left" : "bottom" } },
        { element: ".banner-cta", animation: { delay: 1000, origin: window.innerWidth > 768 ? "left" : "bottom" } },
        { element: ".section-title", animation: { delay: 300, distance: "20px", origin: "bottom" } },
        { element: ".section-content", animation: { delay: 500, distance: "20px", origin: "bottom" } },
    ];
    ScrollReveal({ reset: false, distance: '20px', duration: 1000 });
    targetElements.forEach(({ element, animation }) => {
        ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation));
    });
}