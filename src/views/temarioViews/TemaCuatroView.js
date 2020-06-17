import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import cuatro from '../../assets/img/ImgErgonometria/cuatro.jpeg'
import cuatro02 from '../../assets/img/ImgErgonometria/cuatro02.png'

class TemaCuatroView extends Component {
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
          <Row>
            <Col xs="12">
              <h2 className="animated fadeInDown">
                <b>Tipos de Experiencias</b>
              </h2>
            </Col>
          </Row>
          <Row className="centrado-fila text-center">
            <Col xs="2">
              <p>Gratuitas</p>
            </Col>
            <Col xs="2">
              <p>De Valor</p>
            </Col>
            <Col xs="2">
              <p>Dignas y seguras</p>
            </Col>
            <Col xs="2">
              <p>De acompañamiento</p>
            </Col>
            <Col xs="2">
              <p>Posibles, factibles y accesibles</p>
            </Col>
          </Row>
          <Row className="centrado-fila text-center">
            <Col xs="2">
              <span className="icon-location-pin"></span>
            </Col>
            <Col xs="2">
              <span className="icon-location-pin"></span>
            </Col>
            <Col xs="2">
              <span className="icon-location-pin"></span>
            </Col>
            <Col xs="2">
              <span className="icon-location-pin"></span>
            </Col>
            <Col xs="2">
              <span className="icon-location-pin"></span>
            </Col>
          </Row>
          <Row className="centrado-fila text-center">
            <Col xs="12">
              <div style={{ borderBottom: '4px solid' }}></div>
            </Col>
          </Row>
          <Row className="centrado-fila text-center">
            <Col xs="2">
              <p>
                Compartit un sentimiento o emocion y comprender porque nace el
                gusto a algo.
              </p>
            </Col>
            <Col xs="2">
              <p>Crear un sentimiento de valor por algo intangible.</p>
            </Col>
            <Col xs="2">
              <p>
                Actividades que te generan un sentimiento de seguridad y
                confianza.
              </p>
            </Col>
            <Col xs="2">
              <p>
                Acompañar a una persona para que comparta la misma experiencia
                pero creando una nueva pero ahora juntos.
              </p>
            </Col>
            <Col xs="2">
              <p>
                Compartir una experiencia en la que cualquiera pueda realizar
                sin importar su condicion.
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaCuatroView
