import { useDispatch, useSelector } from "react-redux";
import actions from "../store/action";
import styled from "styled-components";

const SwitchThemeContainer = styled.button`
    font-family: inherit;
    font-size: inherit;
    padding: 12px 16px;
    border-radius: 6px;
    border: 2px solid ${({ theme }) => theme.flash} !important;
    background: none;
    color: ${({ theme }) => theme.flash};
    cursor: pointer;
`;

const mapState = (state) => ({ theme: state.theme });

const SwitchTheme = () => {
    const { theme } = useSelector(mapState);
    const dispatch = useDispatch();

    const toogleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        dispatch({ type: actions.SET_THEME, value: newTheme });
    };

    return <SwitchThemeContainer onClick={toogleTheme}>{theme === "light" ? "Mode sombre" : "Mode light"}</SwitchThemeContainer>;
};

export default SwitchTheme;
