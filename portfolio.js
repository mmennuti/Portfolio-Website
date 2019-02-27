var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement("img", {
          src: "./media/portrait.jpg",
          alt: "Self portrait of Michael Mennuti"
        }),
        React.createElement(
          "div",
          null,
          React.createElement(
            "h1",
            null,
            "Michael Mennuti"
          )
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Tabs = function (_React$Component2) {
  _inherits(Tabs, _React$Component2);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this2 = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _this2.state = {
      activeTab: props.activeTab
    };
    return _this2;
  }

  _createClass(Tabs, [{
    key: "selectTab",
    value: function selectTab(index, event) {
      event.preventDefault();
      this.setState({
        activeTab: index
      });
    }
  }, {
    key: "_renderTitles",
    value: function _renderTitles() {
      function labels(child, index) {
        var activeClass = this.state.activeTab === index ? "active" : "";
        return React.createElement(
          "li",
          { key: index },
          React.createElement(
            "a",
            {
              href: "#",
              className: activeClass,
              onClick: this.selectTab.bind(this, index)
            },
            child.props.label
          )
        );
      }

      return React.createElement(
        "ul",
        { className: "tabs__labels" },
        this.props.children.map(labels.bind(this))
      );
    }
  }, {
    key: "_renderContent",
    value: function _renderContent() {
      return React.createElement(
        "div",
        { className: "tabs__content" },
        this.props.children[this.state.activeTab]
      );
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "tabs" },
        this._renderTitles(),
        this._renderContent()
      );
    }
  }]);

  return Tabs;
}(React.Component);

var Pane = function (_React$Component3) {
  _inherits(Pane, _React$Component3);

  function Pane(props) {
    _classCallCheck(this, Pane);

    return _possibleConstructorReturn(this, (Pane.__proto__ || Object.getPrototypeOf(Pane)).call(this, props));
  }

  _createClass(Pane, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.props.children
      );
    }
  }]);

  return Pane;
}(React.Component);

var textDevelopment = React.createElement(
  "div",
  null,
  React.createElement(
    "p",
    null,
    "I have been making software for about eleven years now. I studied computer science and game design at the Jack Baskin School of Engineering at the University of California, Santa Cruz."
  ),
  React.createElement(
    "p",
    null,
    "After I graduated with my B.S. in computer Science, I moved to Madison, Wisconsin to work at Epic, the leading electronic health record vendor. I worked there for seven years, designing and developing reporting and analytics software for medical organizations."
  )
);
var textDesign = React.createElement(
  "div",
  null,
  React.createElement(
    "p",
    null,
    "During my studies in game design, and as a professional software developer, I've had the opportunity to develop my skills in user experience and graphic design."
  )
);
var textIllustration = React.createElement(
  "div",
  null,
  React.createElement(
    "p",
    null,
    "I like to draw"
  )
);

var App = function (_React$Component4) {
  _inherits(App, _React$Component4);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Header, null),
        React.createElement(
          Tabs,
          { activeTab: 0 },
          React.createElement(
            Pane,
            { label: "Development" },
            textDevelopment
          ),
          React.createElement(
            Pane,
            { label: "Design" },
            textDesign
          ),
          React.createElement(
            Pane,
            { label: "Illustration" },
            textIllustration
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.querySelector("#app"));