import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {CardColumns, Container, Row, ButtonGroup, ToggleButton} from "react-bootstrap";
import axios from "axios";
import PageCard from "./PageCard";

function CountryPage(props) {

    const [newsArray, setNewsArray] = useState([])
    const [category, setCategory] = useState("general")

    const radios = [
        { name: 'General', value: 'general' },
        { name: 'Business', value: 'business' },
        { name: 'Entertainment', value: 'entertainment' },
        { name: 'Health', value: 'health' },
        { name: 'Science', value: 'science' },
        { name: 'Sports', value: 'sports' },
        { name: 'Technology', value: 'technology' },
    ];


    let { id } = useParams()

    useEffect(()=>{
        axios.get(`https://newsapi.org/v2/top-headlines?country=${id}&category=${category}&apiKey=b085493a09bc48d8869853e6fffd2e9f`)
            .then(res => {
                let apiArray = res.data.articles
                setNewsArray(apiArray)
            })
    },[category])

    let header = ""

    switch(id) {
        case "SG" :
            header="Singapore News"
            break
        case "MY" :
            header="Malaysia News"
            break
        case "NG" :
            header="Nigeria News"
            break
        case "SA" :
            header="Saudi Arabia News"
            break
    }

    return (
        <Container>
            <Row>
                <h1>{header}</h1>
            </Row>
            <Row>
                <ButtonGroup className="mb-2">
                    {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant="secondary"
                            name="radio"
                            value={radio.value}
                            checked={category === radio.value}
                            onChange={(e) => setCategory(e.currentTarget.value)}
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
            </Row>
            <CardColumns>
            {newsArray.map((article,id)=>(
                <PageCard key={id} article={article}/>
            ))}
            </CardColumns>
        </Container>

    );
}

export default CountryPage;
