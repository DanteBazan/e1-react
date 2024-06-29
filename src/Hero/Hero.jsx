import React from "react"
import "./Hero.css"

function Hero({ heroTitle, heroText, heroLink, heroImg }) {
    return (
        <section className='hero'>
            <article className='hero-description'>
                <h2 className='hero-description-title'>{heroTitle}</h2>
                <p className='hero-description-text'>{heroText}</p>
                <a className='hero-description-link' href="#">{heroLink}</a>
            </article>
            <article>
                <img className="hero-img" src={heroImg} alt="logo-hero" />
            </article>
        </section>
    )
}

export default Hero
