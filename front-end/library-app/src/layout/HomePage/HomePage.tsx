import React from 'react';
import { Carousel } from "./Component/Carousel";
import { ExploreTopBooks } from "./Component/ExploreTopBooks";
import { Heros } from "./Component/Heros";
import { LibraryServices } from "./Component/LibraryServices";

export const HomePage = () => {
    return (
        <>
            <ExploreTopBooks/>
            <Carousel/>
            <Heros/>
            <LibraryServices/>
        </>
    );
}