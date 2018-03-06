import * as React from 'react';
import { Link } from 'react-router-dom';

export class AppHeader extends React.Component {

    public render(): React.ReactNode {
        return (
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to={`/city`}>City</Link>
                </nav>
            </header>
        );
    }
}
