import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {

    const navigate = useNavigate();
    const goBack = (event: React.MouseEvent<HTMLElement>) => {
        navigate("/");
    };

    return (
        <div>
            About this App!
            <button onClick={goBack}> Go Back</button>
        </div>
    );
};

export default About;