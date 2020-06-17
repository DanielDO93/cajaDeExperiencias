import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'
import caja from '../../assets/img/ImgCaja/caja.jpg'

class TemaTresView extends Component {
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
            <Col xs="12" className="animated zoomInUp delay-0s">
              <h2>¿Qué es una caja de experiencias? </h2>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="12" sm="6" md="7">
              <p className="animated zoomInUp delay-1s">
                Una de los mejores obsequios que se pueden ofrecer son aquellos
                que no tiene un valor económico, si no sentimental, el poder
                compartir una vivencia, una anécdota, un sentimiento una emoción
                una experiencia. Esta puede ser la mejor forma de puedes
                compartir una gratitud.
              </p>
            </Col>
            <Col xs="12" sm="6" md="5">
              <img
                src={caja}
                style={{ width: 560 }}
                alt="caja"
                className="img-fluid bordeImagen   animated  fadeInDown  delay-2s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaTresView
