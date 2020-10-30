import { useDispatch } from "react-redux";
import actions from "../store/action";
import Cookies from "js-cookie";
import styled from "styled-components";

const LogoutContainer = styled.div`
    text-align: center;
`;

const LogoutButton = styled.button`
    color: ${({ theme }) => theme.flash};
    font-family: inherit;
    font-size: inherit;
    border: none;
    background: none;
    cursor: pointer;
`;

const Logout = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        Cookies.remove("ac");
        dispatch({ type: actions.SET_ACCESS_TOKEN, value: undefined });
    };

    return (
        <LogoutContainer>
            <LogoutButton onClick={handleLogout}>Déconnexion</LogoutButton>
        </LogoutContainer>
    );
};

export default Logout;
