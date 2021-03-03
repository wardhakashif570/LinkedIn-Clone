import InfoIcon from '@material-ui/icons/Info';
import React from 'react';
import './Widgets.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">

            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    )


    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>latest News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Wardha is Back","Top News---999 Readers")}
            {newsArticle("Trending","Corona Virus Updates")}
            {newsArticle("Wardha is Back","Top News---999 Readers")}
            {newsArticle("Trending","Corona Virus Updates")}
            {newsArticle("Wardha is Back","Top News---999 Readers")}
            {newsArticle("Trending","Corona Virus Updates")}
            {newsArticle("Wardha is Back","Top News---999 Readers")}
            {newsArticle("Trending","Corona Virus Updates")}
        </div>
    );
    
}

export default Widgets
