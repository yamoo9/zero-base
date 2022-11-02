import { UploadButton, STATUS } from '../components/index.js';
export default function App(_ref) {
  var status = _ref.status;
  return React.createElement("div", {
    className: "App"
  }, React.createElement("h2", null, "\uC0C1\uD0DC \uD2B8\uB79C\uC9C0\uC158"), React.createElement(UploadButton, {
    status: status
  }), React.createElement("h2", null, "\uC0C1\uD0DC \uBDF0"), React.createElement(UploadButton, null), React.createElement(UploadButton, {
    status: STATUS.pending
  }), React.createElement(UploadButton, {
    status: STATUS.resolved
  }), React.createElement(UploadButton, {
    status: STATUS.rejected
  }), React.createElement(UploadButton, {
    disabled: true
  }), React.createElement("h2", null, "\uCEE4\uC2A4\uD140 \uBDF0"), React.createElement(UploadButton, {
    status: STATUS.pending,
    size: 16,
    color: "#706efd",
    lang: "en",
    title: "\uB85C\uB529 \uC911..."
  }, "loading"));
}
//# sourceMappingURL=App.js.map