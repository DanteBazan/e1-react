import React from 'react'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import About from './About/About'
import Productos from './Productos/Productos'
import Footer from './Footer/Footer'

function App() {
  return (
    <>
      <Header linkHeader={"https://previews.123rf.com/images/tachyglossus/tachyglossus1705/tachyglossus170500065/78904596-plantilla-de-logotipo-de-tienda-de-libros-con-composici%C3%B3n-de-letras.jpg"} link1="Home" link2="Sobre Nosotros" link3="Productos" />
      <main>
        <Hero heroTitle="Bienvenido a Best Books" heroText="Te traemos tus libros preferidos a los mejores precios del mercado, para que nos creas estaria bueno que cheques nuestros productos y los precios que tenemos, espero disfrutes de los productos y la pagina web." heroLink="Productos" heroImg="https://static.vecteezy.com/system/resources/previews/002/780/999/original/book-day-lettering-and-bundle-of-books-icons-on-a-purple-background-vector.jpg" />
        <About aboutTitle="Sobre Nosotros" aboutTextDescription="Somos una tienda online que tratamos de traer los mejores libros a los mejores precios del mercado, contamos con una amplia variedad de libros y generos a uno de los mejores precios que vas a encontrar en interne, tambien contamos con envios a todas partes del pais, tambien aceptamos si tu producto no llega en las mejores condiciones, en ese caso se te enviara nuevamente el producto." />
        <Productos />
      </main>
      <Footer />
    </>
  )
}

export default App
