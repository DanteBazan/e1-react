import React from 'react'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import About from './About/About'
import Productos from './Productos/Productos'
import Footer from './Footer/Footer'

function App() {
  return (
    <>
      <Header linkHeader={"../public/imgs/logo-books.jpg"} link1="Home" link2="Sobre Nosotros" link3="Productos" link4="Footer" />
      <main>
        <Hero heroTitle="Bienvenido a Best Books" heroText="Te traemos tus libros preferidos a los mejores precios del mercado, para que nos creas estaria bueno que cheques nuestros productos y los precios que tenemos, espero disfrutes de los productos y la pagina web." heroLink="Productos" heroImg="../public/imgs/hero-img.jpg" />
        <About aboutTitle="Sobre Nosotros" aboutTextDescription="Somos una tienda online que tratamos de traer los mejores libros a los mejores precios del mercado, contamos con una amplia variedad de libros y generos a uno de los mejores precios que vas a encontrar en interne, tambien contamos con envios a todas partes del pais, tambien aceptamos si tu producto no llega en las mejores condiciones, en ese caso se te enviara nuevamente el producto. " />
        <Productos />
      </main>
      <Footer />
    </>
  )
}

export default App
