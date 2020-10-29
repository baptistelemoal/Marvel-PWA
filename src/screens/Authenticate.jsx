import Container from "../components/Container";
import Image from "../components/Image";
import Input from "../components/Input";
import Title from "../components/Title";
import useApi from "../hooks/use-api";
import logo from "../assets/images/logo.png";

const Authenticate = () => {
    const api = useApi();

    const submitForm = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <Image src={logo} alt="Marvel" width="30%" center={true} spaceBottom={true} />
            <Container>
                <form onSubmit={submitForm}>
                    <Title>Bienvenue</Title>
                    <Input placeholder="Adresse mail" />
                    <Input placeholder="Mot de passe" type="password" />
                </form>
            </Container>
        </div>
    );
};

export default Authenticate;
