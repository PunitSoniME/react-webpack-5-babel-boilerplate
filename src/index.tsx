import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./styles/index.scss";

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));


const AppRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={props => (
        // <Layout>
        <Suspense fallback={<div>Loading...</div>}>
            <Component {...props} />
        </Suspense>
        // </Layout>
    )}></Route>
}

class App extends React.Component {
    render() {
        return (
            <Router>

                <Link to="/">Home</Link>
                <br />
                <Link to="/login">Login</Link>

                <br /> <br /> <br /> <br /> <br />

                <AppRoute exact path="/" component={Home} />
                <AppRoute exact path='/login' component={Login} />


            </Router>
        );
    }
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);