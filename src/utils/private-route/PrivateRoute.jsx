import { Route, Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

const mapState = (state) => ({ accessToken: state.accessToken });

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { accessToken } = useSelector(mapState);
    const location = useLocation();

    return (
        <Route
            {...rest}
            render={(props) =>
                accessToken ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            search: location.search,
                            state: { referrer: location.pathname },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
