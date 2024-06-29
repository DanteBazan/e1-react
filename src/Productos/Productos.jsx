import React from 'react'
import "./Productos.css"
import CardProduct from '../ExternalComponents/CardProduct'

function Productos() {
    return (
        <section className='products'>
            <h3 className='products-title'>Productos</h3>
            <article className='container-products'>
                <CardProduct cardImg={"https://images.cdn3.buscalibre.com/fit-in/360x360/c3/f9/c3f908496daf29119971c587a761a752.jpg"} cardTitle="A dos metros de ti" cardButton="Comprar" cardPrice={5000} />
                <CardProduct cardImg={"https://images.cdn3.buscalibre.com/fit-in/360x360/ea/e8/eae8f5754f7a235d210c594051f80d4a.jpg"} cardTitle="Sigue mi voz" cardButton="Comprar" cardPrice={6000} />
                <CardProduct cardImg={"https://www.penguinlibros.com/ar/2390863-thickbox_default/boulevard-libro-1.jpg"} cardTitle="Boulevard" cardButton="Comprar" cardPrice={5000} />
                <CardProduct cardImg={"https://images.cdn2.buscalibre.com/fit-in/360x360/1d/3c/1d3ce26841f5fcac60116e761d5ddafd.jpg"} cardTitle="Despues de el" cardButton="Comprar" cardPrice={5000} />
                <CardProduct cardImg={"https://books.google.com.ar/books/publisher/content?id=CdjHDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U31fWLlJWlU6uAPMzwbhWte3Ss8xQ&w=1280"} cardTitle="Nosotros en la luna" cardButton="Comprar" cardPrice={5000} />
                <CardProduct cardImg={"https://books.google.com.ar/books/publisher/content?id=MzJ7EAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0p41NBNVfQ1X24C5g5wRgt2smJzA&w=1280"} cardTitle="Heartstopper" cardButton="Comprar" cardPrice={5000} />
                <CardProduct cardImg={"https://books.google.com.ar/books/publisher/content?id=DiI8AwAAQBAJ&pg=PA1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1i8nBu5rM2m9OBFgk_g00jMC2YeA&w=1280"} cardTitle="Ventajas de ser invisible" cardButton="Comprar" cardPrice={5000} />
                <CardProduct cardImg={"https://images.cdn1.buscalibre.com/fit-in/360x360/2e/e5/2ee563357a00bb7d031d06f4d0f2982d.jpg"} cardTitle="Mundo al reves" cardButton="Comprar" cardPrice={5000} />
            </article>

        </section>
    )
}

export default Productos
