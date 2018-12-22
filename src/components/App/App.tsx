import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Board from '../Board';
import NotationInstruction from '../NotationInstruction';
import StartButton from '../StartButton';
import theme from '../../theme';

import './App.css';

class App extends React.Component {
  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="app">
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography variant="h6" color="inherit">
                Board Coordinates Practice
          </Typography>
            </Toolbar>
          </AppBar>
          <main>
            <div className="panel-before" />
            <div className="panel-main">
              <NotationInstruction />
              <Board />
            </div>
            <div className="panel-after">
              <StartButton />
            </div>
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
