import StartHeader from './startHeader';
import ResultHeader from './resultHeader';
import { Route, Switch } from 'react-router-dom';

function Header() {
    // (null as any).something;

    return (
        <div>
            <Switch>
                <Route exact path="/" component={StartHeader} />
                <Route path="/SearchResult" component={ResultHeader} />
            </Switch>
        </div>
    );
}

export default Header;