import React, { Component } from 'react'
import {
  CardBody,
  CardHeader,
  Col,
  Row,
  UncontrolledCollapse,
  Button,
  Card,
} from 'reactstrap'
import miedo from '../../assets/img/ImgCaja/miedo.jpg'
import enfado from '../../assets/img/ImgCaja/enfado.jpg'
import tristeza from '../../assets/img/ImgCaja/tristeza.jpg'
import alegria from '../../assets/img/ImgCaja/alegria.jpg'
import amor from '../../assets/img/ImgCaja/amor.jpg'

class TemaUnoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Caja de Experiencias</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12">
              <h2 className="animated zoomInUp delay-1s">
                <b>SENTIMIENTOS </b>
              </h2>
            </Col>
          </Row>
          <Row className="">
            <Col md="4">
              <Button
                color="primary"
                id="toggler"
                style={{ marginBottom: '1rem' }}
              >
                 <img
                      src={miedo}
                      style={{ width: 300 }}
                      alt="miedo.jpg"
                      className="img-fluid bordeImagen  animated  fadeInDown  delay-0s"
                    /><br/>
                Miedo
              </Button>
              <UncontrolledCollapse toggler="#toggler">
                <Card>
                  <CardBody>
                    <p className="text-justify">
                      {' '}
                      El miedo es una emoción caracterizada por una intensa
                      sensación desagradable provocada por la percepción de un
                      peligro, real o supuesto, presente, futuro o incluso
                      pasado. Es una emoción primaria que se deriva de la
                      aversión natural al riesgo o la amenaza, y se manifiesta
                      en todos los animales, lo que incluye al ser humano. La
                      máxima expresión del miedo es el terror. Además el miedo
                      está relacionado con la ansiedad.
                    </p>
                   
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
            </Col>
            <Col md="4">
              {' '}
              <Button
                color="primary"
                id="toggler2"
                style={{ marginBottom: '1rem' }}
              >
                 <img
                      src={enfado}
                      style={{ width: 300 }}
                      alt="enfado"
                      className="img-fluid bordeImagen  animated  fadeInDown  delay-0s"
                    /><br/>
                Enfado
              </Button>
              <UncontrolledCollapse toggler="#toggler2">
                <Card>
                  <CardBody>
                    <p className="text-justify">
                      {' '}
                      El enfado es una alteración del ánimo que provoca
                      indignación, furia y/o anhelo de venganza o revancha. El
                      concepto se emplea como sinónimo de enojo.
                    </p>
                   
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
            </Col>
            <Col md="4">
              {' '}
              <Button
                color="primary"
                id="toggler3"
                style={{ marginBottom: '1rem' }}
              >
                 <img
                      src={tristeza}
                      style={{ width: 300 }}
                      alt="tristeza"
                      className="img-fluid bordeImagen  animated  fadeInDown  delay-0s"
                    /><br/>
                Tristeza
              </Button>
              <UncontrolledCollapse toggler="#toggler3">
                <Card>
                  <CardBody>
                    <p className="text-justify">
                      {' '}
                      Tristeza es un estado anímico que ocurre por un
                      acontecimiento desfavorable que suele manifestarse con
                      signos exteriores como el llanto, pesimismo, melancolía,
                      falta de ánimo, baja autoestima, en otros estados de
                      insatisfacción.
                    </p>
                   
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
            </Col>
          </Row>
          <Row className="centrado-fila" >
            <Col xs="12" sm="10" md="9" className="">
              <Row className="">
                <Col md="6">
                  <Button
                    color="primary"
                    id="toggler4"
                    style={{ marginBottom: '1rem' }}
                  >
                    <img
                          src={alegria}
                          style={{ width: 300 }}
                          alt="alegria"
                          className="img-fluid bordeImagen  animated  fadeInDown  delay-1s"
                        /><br/>
                    Alegría
                  </Button>
                  <UncontrolledCollapse toggler="#toggler4">
                    <Card>
                      <CardBody>
                        <p className="text-justify">
                          El valor de la Alegría es sinónimo de dicha,
                          contentura o júbilo. La alegría produce sensaciones de
                          agrado, esperanza y estima. La fuente más común, más
                          profunda y más grande de la alegría es el amor, por
                          cuanto implica también una relación con los demás.
                        </p>
                        
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </Col>
                <Col md="6">
                  <Button
                    color="primary"
                    id="toggler5"
                    style={{ marginBottom: '1rem' }}
                  >
                     <img
                          src={amor}
                          style={{ width: 300 }}
                          alt="amor"
                          className="img-fluid bordeImagen  animated  fadeInDown  delay-1s"
                        /><br/>
                    Amor
                  </Button>
                  <UncontrolledCollapse toggler="#toggler5">
                    <Card>
                      <CardBody>
                        <p className="text-justify">
                          El amor es un sentimiento de afecto universal que se
                          tiene hacia una persona, animal o cosa. Amor también
                          hace referencia a un sentimiento de atracción
                          emocional y sexual que se tiene hacia una persona con
                          la que se desea tener una relación o convivencia bajo
                          el mismo techo.
                        </p>
                       
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaUnoView
