import React, { useEffect, useState } from 'react';
import Header from './header/header';
import Cover from './slides/cover';
import AboutIWS from './slides/about-iws';
import PurposeAndGoals from './slides/purpose-and-goals';
import Methods from './slides/methods';
import SitemapPublic from './slides/sitemap-public';
import TargetGroups from './slides/target-groups';
import DatabaseSchema from './slides/database-schema';
import RestApiNpm from './slides/rest-api-npm';
import RestApiEndpoints from './slides/rest-api-endpoints';
import Footer from './footer/footer';

class App extends React.Component {
  constructor() {
    super();

    this.slideForward  = this.slideForward.bind(this);
    this.slideBackward = this.slideBackward.bind(this);

    this.state = {
      count:  0,
      slides: [
        <Cover />,
        <AboutIWS />,
        <PurposeAndGoals />,
        <Methods />,
        <DatabaseSchema />,
        <RestApiNpm />,
        <RestApiEndpoints />,
        <SitemapPublic />,
        <TargetGroups />,
      ],
      titles: [
        'Inclusive Web Solutions webbplats',
        'Om Inclusive Web Solutions',
        'Syfte',
        'Metoder',
        'Databasscheman',
        'REST-webbtjänst (paket)',
        'REST-webbtjänst (endpoints, CRUD, statuskoder)',
        'Sitemap publik webbplats',
        'Målgrupper',
      ]
    }
  }

  render() {
    return (
      <div id="page-wrapper">
        <Header />
        <main>
          {this.state.slides[this.state.count]}
          <div id="buttons">
            <div id="buttons-inner-wrap">
              <button id="back-btn" onClick={this.slideBackward} 
                disabled={this.state.count <= 0 ? true : false}>Bakåt</button>
              <button id="forward-btn" onClick={this.slideForward}>Framåt</button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  slideForward() {
    this.setState({count: this.state.count + 1});
    document.title = this.state.titles[this.state.count + 1];
  }

  slideBackward() {
    this.setState({count: this.state.count - 1});
    document.title = this.state.titles[this.state.count - 1];
  }
}

export default App;
