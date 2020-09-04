import React from 'react';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import { ThemeProvider } from "@material-ui/styles";
import CoinsContextProvider from './contexts/CoinsContext';
import DetailsContextProvider from './contexts/DetailsContext';
import Header from './components/Common/Header';
import Coins from './components/Coins';
import CurrencyDetails from './components/CoinDetails';
import NotFound from './components/NotFound';
import Theme from "./components/Common/Theme";
import './assets/css/styles.css';

const App = () => (
    
    <BrowserRouter>
        <ThemeProvider theme={Theme}>
            <Header />
            <Switch>
                <Route exact path="/">
                    <CoinsContextProvider>
                        <Coins />
                    </CoinsContextProvider>
                </Route>
                <Route path='/currency/info/:id'>
                <DetailsContextProvider>
                    <CurrencyDetails />
                </DetailsContextProvider>
                </Route>
                <Route component={ NotFound } />  
            </Switch>
        </ThemeProvider>    
    </BrowserRouter>

);

App.displayName = 'App';

export default App;

