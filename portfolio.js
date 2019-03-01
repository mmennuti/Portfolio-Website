var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is the header with the page's title, and a self portrait.
// Todo: Add theme selection
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
        { id: "header" },
        React.createElement("img", {
          src: "./media/portrait.jpg",
          alt: "Self portrait of Michael Mennuti",
          id: "portrait"
        }),
        React.createElement(
          "div",
          { id: "topright" },
          React.createElement(
            "h1",
            { id: "headerText" },
            "Michael Mennuti"
          ),
          React.createElement(
            "em",
            null,
            "\"This page is under construction...\""
          )
        )
      );
    }
  }]);

  return Header;
}(React.Component);

// This is a tab managing component. It contains one or more Panes, each of which with a label and some content.


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
              onClick: this.selectTab.bind(this, index),
              className: activeClass
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

// This component represents one pane that a tab activates.
// Todo: Add a gallery component


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

// Technologies I've used are in an array to make it easier to edit later. Could eventually pull from some sort of database, but that seems like overkill unless I start adding details to each.


var technologies = ["C#", "VisualBasic 6", "M(UMPS)", "Microsoft SQL Server", "ASP.NET", "WebForms", "JavaScript", "TypeScript", "jQuery", "AJAX", "HTML5", "CSS3", "SCSS", "SVN"];

var hobbyTechs = ["Unity3D", "C++", "OpenGL", "Java", "Python", "C", "Git", "React.js", "UnrealScript", "Datalog", "Perl"];

function List(techArray) {
  return techArray.map(function (tech, index) {
    return React.createElement(
      "li",
      { key: index },
      tech
    );
  });
}

// Markup for the text of the development pane.
var textDevelopment = React.createElement(
  "div",
  { "class": "text" },
  React.createElement(
    "p",
    null,
    "I have been making software for about eleven years now. I studied computer science and game design at the Jack Baskin School of Engineering at the University of California, Santa Cruz from 2007 to 2011, graduating with a B.S. in computer science and a focus in computer game design."
  ),
  React.createElement(
    "p",
    null,
    "After I graduated, I moved to the frigid north--Madison, Wisconsin, to be specific--to work at Epic, the leading electronic health record vendor. I worked there for seven years, designing and developing reporting and analytics software for medical organizations. I particularly specialized in integration projects, linking functionality between our various reporting tools, but I've also worked on backend database work, web services, front end implementation, and various sorts of optimization."
  ),
  React.createElement(
    "p",
    null,
    "I've used a variety of technologies in my professional work:"
  ),
  React.createElement(
    "p",
    null,
    React.createElement(
      "ul",
      null,
      List(technologies)
    )
  ),
  React.createElement(
    "p",
    null,
    "I've also dabbled in these other technologies in my own time or when I was in school:"
  ),
  React.createElement(
    "p",
    null,
    React.createElement(
      "ul",
      null,
      List(hobbyTechs)
    )
  )
);

// Markup for the text of the design pane.
var textDesign = React.createElement(
  "div",
  { "class": "text" },
  React.createElement(
    "p",
    null,
    "During my studies in game design, and as a professional software developer, I've had the opportunity to develop skills in user experience and graphic design. After all, what is the point of a game if not to ellicit a particular experience in a player? I've worked on all stages of design: requirements gathering, wireframing, prototyping, usability heuristic analysis, user testing, iteration, and of course implementation."
  ),
  React.createElement(
    "p",
    null,
    "I've even worked in design for accessibility, both for folks with dexterity limitations who rely on keyboard controls to navigate and application, and for people with visual disabilities. That includes colorblind users (like myself), those who require high contrast interfaces, and even fully blind users. Designing an application to be usable through a screen reader really changes how you think about usability."
  )
);

// Markup for the text of the illustration pane.
var textIllustration = React.createElement(
  "div",
  { "class": "text" },
  React.createElement(
    "p",
    null,
    "For as long as I can remember I've loved to draw, paint, sculpt, really create any visual media. When I learned I was colorblind, I was discouraged from pursuing a career in art, but I persisted in doodling in the margins of my notes. In the last few years, I've started taking my drawing more seriously. Now in my spare time, I'm studying figure drawing, artistic anatomy, portraiture, draftsmanship, vehicle design, and pretty much anything else that tickles my fancy."
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
        { id: "appBody" },
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