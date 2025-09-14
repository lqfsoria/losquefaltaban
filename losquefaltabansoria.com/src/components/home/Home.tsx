import React from "react";
import "./home.css";
import lqfLogo from "../../assets/lqf-logo.512.png";
import Table from "react-bootstrap/esm/Table";

const Home: React.FC = () => {
  return (
    <>
      <main className="px-3">
        <section style={{ minHeight: "100vh" }}>
          <img
            src={lqfLogo}
            alt="Los Que Faltaban Soria"
            title="Los Que Faltaban Soria"
            className="main-image"
          />
          <h1>Los que Faltaban</h1>
          <p className="lead">
            Asociación Cultural y Taurina de Soria
          </p>
          <p className="lead">
            <a
              href="#nosotros"
              className="btn btn-lg btn-secondary fw-bold border-white bg-white"
            >
              Saber más
            </a>
          </p>
        </section>
        <section id="nosotros"className="container marketing mb-auto bg-light text-dark p-5 text-start">
          <header>
            <h2 className="featurette-heading fw-normal lh-1">Nosotros</h2>
            <p>
              La Asociación Cultural Peña Los Que Faltaban, se crea con carácter
              civil y sin ánimo de lucro, siendo sus fines y objetivos el{" "}
              <strong>
                promover las fiestas de San Juan, en la ciudad de Soria
              </strong>
              .
            </p>
            <p>
              Con arreglo a las leyes, nuestra asociación tiene personalidad
              jurídica propia y goza de capacidad de obrar plena.
            </p>
            <p>
              Está compuesta por una asamblea general integrada por la totalidad
              de sus componentes y asociados, y por una Junta Directiva elegida
              de entre sus miembros.
            </p>
            <p>
              Es pretensión principal de la Peña Los Que Faltaban{" "}
              <strong>
                hacer de las Fiestas de San Juan unos días de incansable
                alegría, aportando buen humor, buen hacer, jovialidad y apoyo a
                todos nuestros festejos y actos
              </strong>
              .
            </p>
            <p className="text-end">
              <em>
                Por{" "}
                <a href="mailto:rafael.esteras@losquefaltabansoria.com">
                  Rafael Esteras (Rapi)
                </a>
                , Presidente 2004.
              </em>
            </p>
          </header>
          {/* <article className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                First featurette heading.
                <span className="text-body-secondary">
                  It'll blow your mind.
                </span>
              </h2>
              <p className="lead">
                Some great placeholder content for the first featurette here.
                Imagine some exciting prose here.
              </p>
            </div>
            <div className="col-md-5">
              <svg
                aria-label="Placeholder: 500x500"
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                height="500"
                preserveAspectRatio="xMidYMid slice"
                role="img"
                width="500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Placeholder</title>
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-bg)"
                ></rect>
                <text
                  x="50%"
                  y="50%"
                  fill="var(--bs-secondary-color)"
                  dy=".3em"
                >
                  500x500
                </text>
              </svg>
            </div>
          </article>
          <hr className="featurette-divider bg-dark" />
          <article className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                Oh yeah, it’s that good.
                <span className="text-body-secondary">See for yourself.</span>
              </h2>
              <p className="lead">
                Another featurette? Of course. More placeholder content here to
                give you an idea of how this layout would work with some actual
                real-world content in place.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <svg
                aria-label="Placeholder: 500x500"
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                height="500"
                preserveAspectRatio="xMidYMid slice"
                role="img"
                width="500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Placeholder</title>
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-bg)"
                ></rect>
                <text
                  x="50%"
                  y="50%"
                  fill="var(--bs-secondary-color)"
                  dy=".3em"
                >
                  500x500
                </text>
              </svg>
            </div>
          </article> */}
          <hr className="featurette-divider" />
          <article className="row featurette text-start">
            <h3 className="featurette-heading fw-normal lh-1">
              <a id="acta">Acta de Fundación.</a>
            </h3>
            <p>
              Nuestra Peña se funda en el año de 1966, por iniciativa de siete
              amigos sorianos. Estos siete fundadores fueron:{" "}
            </p>
            <ul>
              <li>José Luis Blasco Lázaro (1&ordm; PRESIDENTE)</li>
              <li>Juan Luis Antón </li>
              <li>Lorenzo Lorenzo Lerma </li>
              <li>Víctor Chicote Gil </li>
              <li>José María Recio </li>
              <li>Ildefonso Esteras </li>
              <li>Javier la Torre </li>
            </ul>
            <p>
              En ese año la Peña contó con la inscripción de 47 peñistas, el
              uniforme estaba compuesto por camisa y pantalón blanco, chaleco
              granate, faja negra con flecos y zapatillas blancas con cintas
              granates, en el chaleco al lado izquierdo, bordado el escudo de
              los doce linajes, este uniforme se ha mantenido hasta hoy sin
              ninguna modificación sustanciosa.{" "}
            </p>
            <p>
              La sede social de la peña en sus inicios estaba situada en el Bar
              Juma, en la calle García Solier, bar que posteriormente se llamó
              Bar Castilla, nombre que este bar mantiene actualmente, por
              cuestiones organizativas la sede estuvo trasladada temporalmente
              un año al Bar Benjamín, en la Avda. Valladolid, para volver al Bar
              Castilla.
              <br />
              Actualmente la Sede Social se sitúa en la Cafetería Alameda en el
              Paseo del Espolón.
            </p>
            <p className="text-end">
              <em>
                Por
                <a href="mailto:rafael.esteras@losquefaltabansoria.com">
                  Rafael Esteras (Rapi)
                </a>
                , Presidente 2004.
              </em>
            </p>
          </article>

          <hr className="featurette-divider" />

          <article className="row featurette text-start">
            <h3>
              <a id="anuario">
                Anuario de Presidentes y n&ordm; de componentes.
              </a>
            </h3>
            <p>
              A continuaci&oacute;n se detallan cada uno de los presidentes de
              nuestra pe&ntilde;a, junto con el n&uacute;mero (conocido) de
              integrantes de la misma.
            </p>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Año</th>
                  <th>Presidente</th>
                  <th>Peñistas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td align="center">1966</td>
                  <td>José Luis Blasco Lázaro</td>
                  <td align="center">47</td>
                </tr>
                <tr>
                  <td align="center">1967</td>
                  <td>Juan Luis Antón</td>
                  <td align="center">&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">1968-1974</td>
                  <td>José Maria Recio</td>
                  <td align="center">&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">1975</td>
                  <td>Pedro Llorente Santa Catalina</td>
                  <td align="center">&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">1976</td>
                  <td>Alejandro Estepa</td>
                  <td align="center">&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">1977</td>
                  <td>Ángel Palacios</td>
                  <td align="center">&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">1978</td>
                  <td>Mariano Del Amo Delgado</td>
                  <td align="center">&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">1979-1982</td>
                  <td>Jaime Fernández</td>
                  <td align="center">&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">1983-1985</td>
                  <td>Gabriel García Heras</td>
                  <td align="center">&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">1986-1988</td>
                  <td>Javier Yubero</td>
                  <td align="center">85</td>
                </tr>
                <tr>
                  <td align="center">1989</td>
                  <td>Veridiano Molina Molina</td>
                  <td align="center">96</td>
                </tr>
                <tr>
                  <td align="center">1990</td>
                  <td>Eusebio García Eras</td>
                  <td align="center">120</td>
                </tr>
                <tr>
                  <td align="center">1991</td>
                  <td>Juan José Jiménez Millán</td>
                  <td align="center">138</td>
                </tr>
                <tr>
                  <td align="center">1992</td>
                  <td>Efren Gómez Santana</td>
                  <td align="center">136</td>
                </tr>
                <tr>
                  <td align="center">1993</td>
                  <td>Vicente Ambrona Cestero</td>
                  <td align="center">139</td>
                </tr>
                <tr>
                  <td align="center">1994</td>
                  <td>Alejandro Andrés Jiménez</td>
                  <td align="center">148</td>
                </tr>
                <tr>
                  <td align="center">1995</td>
                  <td>Jesús Recio Casero</td>
                  <td align="center">&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">1996</td>
                  <td>Arturo Viñaras</td>
                  <td align="center">156</td>
                </tr>
                <tr>
                  <td align="center">1997</td>
                  <td>
                    Oscar Giaquinta García, Carlos García Fernández
                  </td>
                  <td align="center">168</td>
                </tr>
                <tr>
                  <td align="center">1998</td>
                  <td>
                    Oscar Molina Molina, Javier Martínez Mínguez, Misael Arauzo Martínez
                  </td>
                  <td align="center">162</td>
                </tr>
                <tr>
                  <td align="center">1999</td>
                  <td>Félix López Peñaranda</td>
                  <td align="center">173</td>
                </tr>
                <tr>
                  <td align="center">2000</td>
                  <td>Vicente Gómez De La Iglesia</td>
                  <td align="center">181</td>
                </tr>
                <tr>
                  <td align="center">2001</td>
                  <td>Sergio Hornos Blázquez</td>
                  <td align="center">188</td>
                </tr>
                <tr>
                  <td align="center">2002</td>
                  <td>José Alberto Martínez Lastra</td>
                  <td align="center">197</td>
                </tr>
                <tr>
                  <td align="center">2003</td>
                  <td>Santiago Martínez Lastra</td>
                  <td align="center">215</td>
                </tr>
                <tr>
                  <td align="center">2004</td>
                  <td>Rafael Esteras García</td>
                  <td align="center">235</td>
                </tr>
                <tr>
                  <td align="center">2005</td>
                  <td>Javier Gonzalo García</td>
                  <td align="center">253</td>
                </tr>
                <tr>
                  <td align="center">2006</td>
                  <td>Juan Carlos Pérez Ciria</td>
                  <td align="center"></td>
                </tr>
                <tr>
                  <td align="center">2007</td>
                  <td>Alfnso Izquierdo Moreno</td>
                  <td align="center"></td>
                </tr>
                <tr>
                  <td align="center">2008</td>
                  <td>Jordán Fernández Barranco</td>
                  <td align="center"></td>
                </tr>
                <tr>
                  <td align="center">2009</td>
                  <td>Eloy Lafuente Fuentelsanz</td>
                  <td align="center"></td>
                </tr>
                <tr>
                  <td align="center">2010</td>
                  <td>Óscar Acebes</td>
                  <td align="center"></td>
                </tr>
                <tr>
                  <td align="center">2011</td>
                  <td>Rubén Pardo Barranco</td>
                  <td align="center"></td>
                </tr>
                <tr>
                  <td align="center">2012</td>
                  <td>Diego Altelarrea</td>
                  <td align="center"></td>
                </tr>
                <tr>
                  <td align="center">2013</td>
                  <td>Erneto del Río Soriano</td>
                  <td align="center"></td>
                </tr>
                <tr>
                  <td align="center">2014</td>
                  <td>Íñigo Fradejas Díez</td>
                  <td align="center"></td>
                </tr>
                <tr>
                  <td align="center">2015</td>
                  <td>Víctor Reyes Estepa</td>
                  <td align="center"></td>
                </tr>
                <tr>
                  <td align="center">2016</td>
                  <td>Roberto Chico Blázquez</td>
                  <td align="center"></td>
                </tr>
                <tr>
                  <td align="center">2017</td>
                  <td>Ricardo Yagüe Ruiz</td>
                  <td align="center"></td>
                </tr>
                <tr>
                  <td align="center">2018</td>
                  <td>Néstor Martín Crespo</td>
                  <td align="center"></td>
                </tr>
                <tr>
                  <td align="center">2019</td>
                  <td>Mario Recio Casero</td>
                  <td align="center"></td>
                </tr>
                <tr>
                  <td align="center">2020-2022</td>
                  <td>Eloy Esqueta Herrera</td>
                  <td align="center"></td>
                </tr>
                <tr>
                  <td align="center">2023</td>
                  <td>Santiago Sanz Andrés</td>
                  <td align="center"></td>
                </tr>
                <tr>
                  <td align="center">2024</td>
                  <td>Javier Yubero Lafuente</td>
                  <td align="center"></td>
                </tr>
                <tr>
                  <td align="center">2025</td>
                  <td>Diego Castillo Cano</td>
                  <td align="center">
                    <strong></strong>
                  </td>
                </tr>
              </tbody>
            </Table>
            <p>
              <a href="#">Volver arriba </a>
            </p>
          </article>
        </section>
      </main>
    </>
  );
};

export default Home;
