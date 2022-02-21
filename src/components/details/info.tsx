import React, { Component } from 'react'
import image from '../../images/potter.jpg'

class DetailsInfo extends Component {
    render() {
        return (
            <div className='details__container'>
                <div className="details__image-wrap">
                    <img className="details__image" src={image}/>
                </div>
                <div className="details__info">
                    <h4 className="details__info-title">
                        Evil Must Be Confronted.
                    </h4>
                    <div className="details__info-subtitle">
                        The rebellion begins! Lord Voldemort has returned, 
                        but the Ministry of Magic is doing everything it can 
                        to keep the wizarding world from knowing the truth – 
                        including appointing Ministry official Dolores Umbridge as the 
                        new Defence Against the Dark Arts professor at Hogwarts. 
                        When Umbridge refuses to teach practical defensive magic, 
                        Ron and Hermione convince Harry to secretly train a select 
                        group of students for the wizarding war that lies ahead. 
                        A terrifying showdown between good and evil awaits in this 
                        enthralling film version of the fifth novel in J.K. Rowling’s 
                        Harry Potter series. Prepare for battle!
                    </div>
                    <div className="details__info-grade grade">
                        6.8
                    </div>
                    <div className="details__info-type">
                        <div className="details__info-item-title">
                            Type
                        </div>
                        Movie
                    </div>
                    <div className="details__info-date">
                        <div className="details__info-item-title">
                            Release date
                        </div>
                        2007-06-28
                    </div>
                    <div className="details__info-duration">
                        <div className="details__info-item-title">
                            Run time
                        </div>
                        138 minutes
                    </div>
                    <div className="details__info-genres">
                        <div className="details__info-item-title">
                            Genres
                        </div>
                        Adventure  Fantasy  Mystery
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailsInfo
