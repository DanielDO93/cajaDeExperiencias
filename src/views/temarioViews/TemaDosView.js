import React, { Component } from 'react'
import {
  CardBody,
  CardHeader,
  Col,
  Row,
  
} from 'reactstrap'
import agradecimiento from '../../assets/img/ImgCaja/agradecimientos.jpg'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

 

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>Caja de Experiencias</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="">
            <Col xs="12" className="">
              <h2>Agradecimientos </h2>
              <p>¿Qué es un agradecimiento?</p>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="6">
             
              <p style={{ marginBottom: '0px' }}>
                <b>Agradecimiento</b>{' '}
              </p>
              <p>
                La gratitud es un sentimiento, emoción o actitud de
                reconocimiento de un beneficio que se ha recibido o recibirá.
              </p>
              <div className="centrado-fila">
              <img
                src={agradecimiento}
                style={{ width:400 }}
                alt="agradecimiento.png"
                className="img-fluid bordeImagen   animated  fadeInDown  delay-2s"
              />
              </div>
            </Col>
            <Col xs="6">
              <p>
                <b>Formas de dar un agradecimiento</b>
              </p>
              <ol>
                <li>Sé específico.</li>
                <p>Enfoca tu gratitud en lo que el empleado realmente hizo.</p>
              </ol>
              <ol>
                <li>Hazlo personal.</li>
                <p>
                  Conectar tu agradecimiento con la vida personal del receptor
                  hace que tu mensaje sea más efectivo.
                </p>
              </ol>
              <ol>
                <li>Usa medios Tradicionales.</li>
                <p>
                  Tomarte el tiempo de escribir una nota muestra un nivel de
                  apreciación más profundo que simplemente enviar un email o un
                  mensaje de texto.
                </p>
              </ol>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
