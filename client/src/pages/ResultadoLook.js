import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import RecogidaLook from "../components/RecogidaLook";


function ResultadoLook() {

    return (
        <div>
            <form>
                <div>
                    <img alt="Foto de arriba Full Fashion" src="https://cicadex.com/wp-content/uploads/2018/09/350-858-camisa-Hom-gris-copia-600x600.jpg" width={350} />
                    <label>Arriba</label>
                    <input type="checkbox" value="cambiar"></input>
                    <br></br>
                </div>
                <div>
                    <img alt="Foto de arriba Full Fashion" src="https://cicadex.com/wp-content/uploads/2018/09/350-858-camisa-Hom-gris-copia-600x600.jpg" width={350} />
                    <label>Arriba</label>
                    <input type="checkbox" value="cambiar"></input>
                </div>
                <div>
                    <img alt="Foto de arriba Full Fashion" src="https://cicadex.com/wp-content/uploads/2018/09/350-858-camisa-Hom-gris-copia-600x600.jpg" width={350} />
                    <label>Arriba</label>
                    <input type="checkbox" value="cambiar"></input>
                </div>
                <div>
                    <img alt="Foto de abajo Full Fashion" src="https://www.poloswing.es/1693-thickbox_default/pantalon-cuadros-gales.jpg" width={350} />
                    <label>Abajo</label>
                    <input type="checkbox" value="cambiar"></input>
                </div>
                <div>
                    <img alt="Foto de abajo Full Fashion" src="https://www.poloswing.es/1693-thickbox_default/pantalon-cuadros-gales.jpg" width={350} />
                    <label>Abajo</label>
                    <input type="checkbox" value="cambiar"></input>
                </div>
                <div>
                    <img alt="Foto de abajo Full Fashion" src="https://www.puralopez.com/uploads/images/products/zapato-tacon-charol-negro-punta-redonda-pura-lopez-nela1.jpg" width={350} />
                    <label>Zapatos</label>
                    <input type="checkbox" value="cambiar"></input>
                </div>
                <br></br>
                <div>
                    <button>Cambiar las seleccionadas</button>
                    <p>*Recuerda que solo tienes 10 cambios de 2 prendas máximo cada vez</p>
                    <button>Seguir para finalizar compra</button>
                </div>
            </form>
        </div>
    );
}

export default ResultadoLook;