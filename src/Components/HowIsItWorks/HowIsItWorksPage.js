import React from 'react';
import {Gallery} from "../Gallery/Gallery";
import {HowIsItWorks} from "./HowIsItWorks";

export const HowIsItWorksPage = ({setModalTypeOneOrder}) => {
    return (
        <>
            <HowIsItWorks setModalTypeOneOrder={setModalTypeOneOrder}/>
            <Gallery/>
        </>
    );
};
