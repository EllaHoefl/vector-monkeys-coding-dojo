import React, { createRef } from 'react'
import 'semantic-ui-css/semantic.min.css';
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Router } from '@reach/router'
import FancyDiv from 'components/FancyDiv'
import Dynamic from 'containers/Dynamic'
import { Menu, Sticky } from 'semantic-ui-react'
import { CombinedLink } from 'components/CombinedLink';
import './app.css'


// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

class App extends React.Component {
  contextRef = createRef<HTMLDivElement>();

  render () {
    return (
      <Root>
        <div className="pageWrapper">
          <div ref={this.contextRef}>
            <Sticky context={this.contextRef}>
              <Menu secondary
                style={{ paddingTop: '1em' }}
              >
                <Menu.Item>
                <img
                  width={80}
                  src="../resources/logo.png"
                  alt="Vector Monkey Coding Dojo Logo"
                />
                </Menu.Item>
                <CombinedLink to="/">Home</CombinedLink>
                <CombinedLink to="/mission">Mission Statement</CombinedLink>
                <CombinedLink to="/coursematerial">Course Material</CombinedLink>
                <CombinedLink to="/deepdives">Deep Dives</CombinedLink>
                <CombinedLink to="/projects">Projects</CombinedLink>
                <CombinedLink to="/monkeys">Meet the Monkeys</CombinedLink>
                {/* <CombinedLink to="/dynamic">Dynamic</CombinedLink> */}
              </Menu>
            </Sticky>
          </div>
          <div className="contentWrapper">
            <FancyDiv>
              <React.Suspense fallback={<em>Loading...</em>}>
                <Router>
                  <Dynamic path="dynamic" />
                  <Routes path="*" />
                </Router>
              </React.Suspense>
            </FancyDiv>
          </div>
        </div>
      </Root>
    )
  }
}

export default App
