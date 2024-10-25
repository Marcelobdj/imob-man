import FlatList from "./FlatList"
import Banner from "./Banner"
import React from "react"
import BestFlatList from "./BestFlatList"

const Home=()=>{
    return (
        <React.Fragment>
            <Banner/>
            <FlatList/>
            <BestFlatList/>
        </React.Fragment>
    )
}

export default Home;