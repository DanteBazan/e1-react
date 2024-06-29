import React from 'react'
import "./About.css"

function About({ aboutTitle, aboutTextDescription }) {
    return (
        <section className='about'>
            <h2 className='about-title'>{aboutTitle}</h2>
            <article className='about-description'>
                <p className='about-description-text'>{aboutTextDescription}</p>
            </article>
        </section>
    )
}

export default About
