import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageTAGCHG from '../img/TAGCH.jpg';
import ImageTNBLH from '../img/TNBLH.jpg';
import ImageUACAM from '../img/UACAM.jpg';
import ImageQuienesSomos from '../img/Tienda_QuienesSomos.jpg';
function Home() {
	return (
		<>
			<Header />
			<div className="container-home">
            <h1>Tienda Online</h1>
            <h2>Bienvenidos a nuestra tienda en línea</h2>
			</div>
			<div className="QuienesSomos">
				<h1>¿Quienes somos?</h1>
				<p>Somos una empresa dedicada a la venta de productos en línea, ofreciendo una amplia variedad de artículos para satisfacer las necesidades de nuestros clientes.</p>
				<p>Nuestra misión es proporcionar una experiencia de compra excepcional, con productos de alta calidad y un servicio al cliente inigualable.</p>
				<p>Nos enorgullece ser una tienda confiable y accesible, comprometida con la satisfacción de nuestros clientes y la mejora continua de nuestros servicios.</p>
				<img src={ImageQuienesSomos} alt="" width="" />
			</div>
			<div className="Objetivo">
				<h1>Nuestro objetivo</h1>
				<p>Nuestro objetivo es ser la tienda en línea preferida por nuestros clientes, ofreciendo una experiencia de compra fácil, segura y satisfactoria.</p>
				<p>Nos esforzamos por mantener un catálogo de productos actualizado y variado, adaptándonos a las tendencias del mercado y a las necesidades de nuestros clientes.</p>
				<p>Además, buscamos construir relaciones duraderas con nuestros clientes, basadas en la confianza, la transparencia y el compromiso con la calidad.</p>
			</div>
			<div className="Experiencia">
				<h1>Nuestra Experiencia como Tienda</h1>
				<p>Con años de experiencia en el comercio electrónico, hemos desarrollado un profundo conocimiento del mercado y de las expectativas de nuestros clientes.</p>
				<p>Hemos implementado tecnologías avanzadas para garantizar una plataforma de compra segura y eficiente, facilitando el proceso de selección y pago de productos.</p>
				<div className="Experiencias-Imagenes">
					<img src={ImageTNBLH} alt="" width={250} />
					<img src={ImageTAGCHG} alt="" width={250} />
					<img src={ImageUACAM} alt="" width={250} />
               </div>				            
				</div>
			<Footer />
		</>
	);
}
export default Home;
