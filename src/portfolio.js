class Header extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
  	return (
	<div>
		<img src="./media/portrait.jpg" alt="Self portrait of Michael Mennuti" />
		<div>
		  <h1>Michael Mennuti</h1>
		</div>
	</div>
    )
  }
}

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
	
	_renderTitles(){
		function labels(child, index) {
			let activeClass = (this.state.activeTab === index ? 'active': '')
			return (
				<li key={index}>
					<a href="#"
						className={activeClass}
						onClick={this.selectTab.bind(this, index)}>
							{child.props.label}
					</a>
				</li>
			)
		}
		
		return(
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
			);
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

class Pane extends React.Component {
	constructor(props){
		super(props)
	}
	
	render(){
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}

var textDevelopment=<div>
			<p>I have been making software for about eleven years now. I studied computer science and game design at the Jack Baskin School of Engineering at the University of California, Santa Cruz.</p>
			<p>After I graduated with my B.S. in computer Science, I moved to Madison, Wisconsin to work at Epic, the leading electronic health record vendor. I worked there for seven years, designing and developing reporting and analytics software for medical organizations.</p>
		</div>
var textDesign = <div>
					<p>During my studies in game design, and as a professional software developer, I've had the opportunity to develop my skills in user experience and graphic design.</p>
				 </div>
var textIllustration = <div>
						<p>I like to draw</p>
						</div>

class App extends React.Component {
  
  
  render() {
    return (
      <div>
		<Header />
		<Tabs activeTab={0}>
			<Pane label="Development">
				{textDevelopment}
			</Pane>
			<Pane label="Design">
				{textDesign}
			</Pane>
			<Pane label="Illustration">
				{textIllustration}
			</Pane>
		</Tabs>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector("#app"))
