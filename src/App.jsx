import { GlobalStyles } from "./assets/styles/global";
import { lightTheme, darkTheme } from "./config/theme";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import actions from "./store/action";
import Authenticate from "./screens/Authenticate";
import Cookies from "js-cookie";
import Hero from "./screens/Hero";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import PrivateRoute from "./utils/private-route/PrivateRoute";

const mapState = (state) => ({ theme: state.theme });

const App = () => {
    const dispatch = useDispatch();
    const { theme } = useSelector(mapState);
    const [loading, setLoading] = useState(true);
    const activeTheme = theme === "dark" ? darkTheme : lightTheme;

    useEffect(() => {
        const accessToken = Cookies.get("ac");
        if (accessToken) {
            dispatch({ type: actions.SET_ACCESS_TOKEN, value: accessToken });
        }
        setLoading(false);
    }, []);

    if (loading) {
        return null;
    }

    return (
        <ThemeProvider theme={activeTheme}>
            <GlobalStyles />
            <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute exact path="/hero/:id" component={Hero} />
                <Route exact path="/login" render={(props) => <Authenticate {...props} />} />
                <Route component={NotFound} />
            </Switch>
        </ThemeProvider>
    );
};

export default App;
