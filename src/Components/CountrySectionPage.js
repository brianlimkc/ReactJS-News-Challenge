import React, {useEffect} from 'react';
import {Container} from "react-bootstrap";
import CountrySection from "./CountrySection";

function CountrySectionPage(props) {

    return (
        <Container>
            <CountrySection country={"SG"} header={"Singapore"}/>
            <CountrySection country={"MY"} header={"Malaysia"}/>
            <CountrySection country={"NG"} header={"Nigeria"}/>
            <CountrySection country={"SA"} header={"Saudi Arabia"}/>
        </Container>
    );
}

export default CountrySectionPage;
