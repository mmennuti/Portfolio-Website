// This is the header with the page's title, and a self portrait.
// Todo: Add theme selection
class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <img
          src="./media/portrait.jpg"
          alt="Self portrait of Michael Mennuti"
        />
        <div>
          <h1>Michael Mennuti</h1>
          <em>"This page is under construction..."</em>
        </div>
      </div>
    )
  }
}

// This is a tab managing component. It contains one or more Panes, each of which with a label and some content.
class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: props.activeTab
    }
  }

  selectTab(index, event) {
    event.preventDefault()
    this.setState({
      activeTab: index
    })
  }

  _renderTitles() {
    function labels(child, index) {
      let activeClass = this.state.activeTab === index ? "active" : ""
      return (
        <li key={index}>
          <a
            href="#"
            className={activeClass}
            onClick={this.selectTab.bind(this, index)}
          >
            {child.props.label}
          </a>
        </li>
      )
    }

    return (
      <ul className="tabs__labels">
        {this.props.children.map(labels.bind(this))}
      </ul>
    )
  }

  _renderContent() {
    return (
      <div className="tabs__content">
        {this.props.children[this.state.activeTab]}
      </div>
    )
  }

  render() {
    return (
      <div className="tabs">
        {this._renderTitles()}
        {this._renderContent()}
      </div>
    )
  }
}

// This component represents one pane that a tab activates.
// Todo: Add a gallery component
class Pane extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

// Put this in an array to make it easier to edit later. Could eventually pull from some sort of database, but that seems like overkill unless I start adding details to each.
const technologies = [
  "C#",
  "VisualBasic 6",
  "M(UMPS)",
  "Microsoft SQL Server",
  "ASP.NET",
  "WebForms",
  "JavaScript",
  "TypeScript",
  "jQuery",
  "AJAX React.js",
  "HTML5",
  "CSS3",
  "SCSS",
  "Unity3D",
  "C++",
  "OpenGL",
  "Java",
  "Python",
  "C",
  "SVN",
  "git"
]

const techList = technologies.map((tech, index) => <li key={index}>{tech}</li>)

// This is the markup for the text of the development pane.
const textDevelopment = (
  <div>
    <p>
      I have been making software for about eleven years now. I studied computer
      science and game design at the Jack Baskin School of Engineering at the
      University of California, Santa Cruz.
    </p>
    <p>
      After I graduated with my B.S. in computer Science, I moved to Madison,
      Wisconsin to work at Epic, the leading electronic health record vendor. I
      worked there for seven years, designing and developing reporting and
      analytics software for medical organizations. I particularly specialized
      in integration projects, linking functionality between our various
      reporting tools, but I've also worked on backend database work, web
      services, front end implementation, and various sorts of optimization.
      <p>Some of the technologies I've used include:</p>
      <p>
        <ul>{techList}</ul>
      </p>
    </p>
  </div>
)

// This is the markup for the text of the design pane.
const textDesign = (
  <div>
    <p>
      During my studies in game design, and as a professional software
      developer, I've had the opportunity to develop skills in user experience
      and graphic design. After all, what is the point of a game if not to
      ellicit a particular experience in a player? I've worked on all stages of
      design: requirements gathering, wireframing, prototyping, usability
      heuristic analysis, user testing, iteration, and of course implementation.
    </p>
    <p>
      I've even worked in design for accessibility, both for folks with
      dexterity limitations who rely on keyboard controls to navigate and
      application, and for people with visual disabilities. That includes
      colorblind users (like myself), those who require high contrast
      interfaces, and even fully blind users. Designing an application to be
      usable through a screen reader really changes how you think about
      usability.
    </p>
  </div>
)

// This is the markup for the text of the illustration pane.
const textIllustration = (
  <div>
    <p>
      For as long as I can remember I've loved to draw, paint, sculpt, really
      create any visual media. When I learned I was colorblind, I was
      discouraged from pursuing a career in art, but I persisted in doodling in
      the margins of my notes. In the last few years, I've started taking my
      drawing more seriously. Now in my spare time, I'm studying figure drawing,
      artistic anatomy, portraiture, draftsmanship, vehicle design, and pretty
      much anything else that tickles my fancy.
    </p>
  </div>
)

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Tabs activeTab={0}>
          <Pane label="Development">{textDevelopment}</Pane>
          <Pane label="Design">{textDesign}</Pane>
          <Pane label="Illustration">{textIllustration}</Pane>
        </Tabs>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector("#app"))
