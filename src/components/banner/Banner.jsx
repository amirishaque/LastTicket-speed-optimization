import React from 'react';
import '../../styles/banner/style.css';

export default function Banner({ bannerHeading, bannerText }) {
    return (
        <>
            <div className="small-banner">
                <div className="container column-direction">
                    <h1>{bannerHeading}</h1>
                    <p>{bannerText}</p>
                    <div className='date-wrapper-banner'>
                        <span><strong>Start Date : </strong>Thursday, 23rd December 2023</span>
                        <span><strong>End Date : </strong>Thursday, 23rd December 2024</span>
                    </div>
                    {/* <form class="search-form">
                            <input type="text" placeholder="Search For An Event" />
                            <input type="submit" value="Search" />
                        </form> */}
                </div>
            </div>
        </>
    )
}
