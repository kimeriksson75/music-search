import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Artist from './components/pages/Artist';
import Album from './components/pages/Album';
import MusicmatchState from './context/musicmatch/musicmatchState';

import 'antd/dist/antd.css';
const { Footer, Content } = Layout;

function App() {
  return (
    <MusicmatchState>
      <Router>
        <Layout className='layout'>
          <Header />
          <Content style={{ padding: '12px' }}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/artist/:id' component={Artist} />
              <Route exact path='/album/:id' component={Album} />
              <Route exact path='/about' component={About} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <p>All rights reserved</p>
          </Footer>
        </Layout>
      </Router>
    </MusicmatchState>
  );
}

export default App;
