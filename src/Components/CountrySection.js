import React, {useEffect, useState} from 'react';
import SectionCard from "./SectionCard";
import {Col, Row, CardGroup} from "react-bootstrap";
import axios from "axios";
import {logDOM} from "@testing-library/react";

function CountrySection(props) {

    const [newsArray, setNewsArray] = useState([])


    useEffect(()=>{
        axios.get(`https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=b085493a09bc48d8869853e6fffd2e9f`)
            .then(res => {
                let tempArray = []
                let apiArray = res.data.articles
                for (let i = 0; i < 6; i++) {
                    tempArray.push(apiArray[i])
                }
                setNewsArray(tempArray)
            })
    },[])

    return (
        <>
        <Row>
            <h1>{props.header} Top Headlines</h1>
        </Row>
        <Row>
            <CardGroup>
            {newsArray.map((article,id)=>(
                // <Col key={id} className={"md={2}"}>
                <SectionCard article={article}/>
                // </Col>
            ))}
            </CardGroup>
        </Row>
        <Row><p> </p></Row>
        </>
    );
}

export default CountrySection;
