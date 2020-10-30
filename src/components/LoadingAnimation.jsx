import animation from "../assets/animations/loading.json";
import Lottie from "react-lottie";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

const LoadingAnimation = () => <Lottie options={defaultOptions} height={60} width={60} />;

export default LoadingAnimation;
