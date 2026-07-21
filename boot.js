// Bootstrap — mounts the app and paints icons once the first render lands.
// Kept in its own file (rather than inline in index.html) so the build can
// transpile it alongside the other JSX; inline scripts would be left behind.
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(window.App, null));
setTimeout(() => window.lucide && window.lucide.createIcons(), 120);