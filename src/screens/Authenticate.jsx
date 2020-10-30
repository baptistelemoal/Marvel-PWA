import { isSecureCookie } from "../utils/utils";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import actions from "../store/action";
import axios from "axios";
import Button from "../components/Button";
import Container from "../components/Container";
import Cookies from "js-cookie";
import Error from "../components/Error";
import Form from "../components/Form";
import Image from "../components/Image";
import Input from "../components/Input";
import logo from "../assets/images/logo.png";
import Space from "../components/Space";
import Title from "../components/Title";

const mapState = (state) => ({ accessToken: state.accessToken });
const authUrl = process.env.REACT_APP_LOGIN_ROUTE;

const Authenticate = () => {
    const { accessToken } = useSelector(mapState);
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [error, setError] = useState();
    const history = useHistory();
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        if (!emailValue || !passwordValue) {
            setError("Veuillez saisir tous les champs.");
            return;
        }
        authenticate();
    };

    const authenticate = async () => {
        const authPromise = await axios.post(authUrl, {
            username: emailValue,
            password: passwordValue,
        });
        if (authPromise.data) {
            const token = authPromise.data?.details;
            Cookies.set("ac", token, { path: "/", secure: isSecureCookie() });
            dispatch({ type: actions.SET_ACCESS_TOKEN, value: token });
        }
    };

    useEffect(() => {
        if (accessToken) {
            history.push("/characters");
        }
    }, [accessToken]);

    return (
        <div>
            <Space spaceBottom={32}>
                <Image src={logo} alt="Marvel" width="30%" center={true} spaceBottom={true} />
            </Space>
            <Container>
                <Form onSubmit={onSubmit}>
                    <Title>Bienvenue</Title>
                    {error && (
                        <Space spaceBottom={16}>
                            <Error>{error}</Error>
                        </Space>
                    )}
                    <Input
                        placeholder="Adresse mail"
                        type="email"
                        name="email"
                        value={emailValue}
                        onChange={(value) => setEmailValue(value)}
                    />
                    <Input
                        placeholder="Mot de passe"
                        type="password"
                        name="password"
                        value={passwordValue}
                        onChange={(value) => setPasswordValue(value)}
                    />
                    <Button>Se connecter</Button>
                </Form>
            </Container>
        </div>
    );
};

export default Authenticate;
