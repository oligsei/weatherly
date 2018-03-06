import * as React from 'react';
import { Route } from 'react-router';
import './App.css';
import { AppFooter } from './AppFooter';
import { AppHeader } from './AppHeader';
import { City } from './city/City';
import { Locations } from './locations/Locations';

export class App extends React.Component {
    public render(): React.ReactNode {
        return (
            <div>
                <AppHeader/>
                <Route exact={true} path="/" component={Locations}/>
                <Route path="/city" component={City}/>
                <AppFooter/>
            </div>
        );
    }
}
