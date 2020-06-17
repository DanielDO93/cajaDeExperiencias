import React, { Component } from 'react'
import {
  CardBody,
  CardHeader,
  Col,
  Row,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import classnames from 'classnames'
import dos01 from '../../assets/img/ImgErgonometria/dos-01.jpg'
import dos02 from '../../assets/img/ImgErgonometria/dos-02.jpg'
import dos03 from '../../assets/img/ImgErgonometria/dos-03.jpg'

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
            <Col xs="12" className="animated zoomInUp delay-1s">
              <h2>Agradecimientos </h2>
            </Col>
          </Row>
          <Row>
            <Col xs="6">
              <p>¿Qué es un agradecimiento?</p>
              <p style={{ marginBottom: '0px' }}>
                <b>Agradecimiento</b>{' '}
              </p>
              <p>
                La gratitud es un sentimiento, emoción o actitud de
                reconocimiento de un beneficio que se ha recibido o recibirá.
              </p>
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
