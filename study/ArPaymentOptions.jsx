import React, { Component } from "react";
import { Modal, Row, Col, Button } from "react-bootstrap";
class ArPaymentOptions extends Component {
    render() {
        const { paymentStatus, onCloseModal } = this.props;
        return (
            <div>
                <Modal
                    show={paymentStatus}
                    onHide={onCloseModal}
                    className="modalStylePayment biggerHalf requestEarlyPayModals"
                >
                    <Modal.Body>
                        <div className="modalStylePaymentInner">
                            <Row className="equal">
                                <Col md={5}>
                                    <div className="modalStylePaymentInnerLeft">
                                        <Row>
                                            <Col md={12}>
                                                <div className="mspInnerPad">
                                                    <h2>Confirm Details123</h2>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className="invDetailsWrap">
                                            <Row>
                                                <Col
                                                    md={6}
                                                    className="text-right"
                                                >
                                                    Invoice No :
                                                </Col>
                                                <Col
                                                    md={6}
                                                    className="text-left pl-0"
                                                >
                                                    0000
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col
                                                    md={6}
                                                    className="text-right"
                                                >
                                                    Due Date :
                                                </Col>
                                                <Col
                                                    md={6}
                                                    className="text-left pl-0"
                                                >
                                                    2019 12 04
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col
                                                    md={6}
                                                    className="text-right"
                                                >
                                                    Customer Name :
                                                </Col>
                                                <Col
                                                    md={6}
                                                    className="text-left pl-0"
                                                >
                                                    XYZ
                                                </Col>
                                            </Row>
                                            
                                            <Row>
                                                <Col
                                                    md={6}
                                                    className="text-right"
                                                >
                                                    Terms :
                                                </Col>
                                                <Col
                                                    md={6}
                                                    className="text-left pl-0"
                                                >
                                                    NET 60
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col
                                                    md={6}
                                                    className="text-right"
                                                >
                                                    Effective Pay Date :
                                                </Col>
                                                <Col
                                                    md={6}
                                                    className="text-left pl-0"
                                                >
                                                    2019 12 04
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col
                                                    md={6}
                                                    className="text-right"
                                                >
                                                    Total Amount :
                                                </Col>
                                                <Col
                                                    md={6}
                                                    className="text-left pl-0"
                                                >
                                                    $00.00
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col
                                                    md={6}
                                                    className="text-right"
                                                >
                                                    Premium :
                                                </Col>
                                                <Col
                                                    md={6}
                                                    className="text-left pl-0"
                                                >
                                                    $00.00
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="invTotalPayment">
                                            <Row>
                                                <Col
                                                    md={6}
                                                    className="text-right nowrap"
                                                >
                                                    Amount after Premium&nbsp;:
                                                </Col>
                                                <Col
                                                    md={6}
                                                    className="text-left  pl-0"
                                                >
                                                    <h4>$799.00</h4>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Col>
                                <Col
                                    md={7}
                                    className="modalStylePaymentInnerRight"
                                >
                                    <Row>
                                        <Col md={12}>
                                            <h2>Additional Options</h2>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <div class="pmsMemoWrap">
                                                <input type="checkbox" />
                                                <div class="pmsCheckBlock">
                                                    <h3>
                                                        Offer Early Payment
                                                        Discount
                                                    </h3>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={12}>
                                            <div class="slideDays">
                                                <p className="offerLabel">
                                                    Pay within
                                                </p>
                                                <div className="float-left days">
                                                    <span>0</span>
                                                    &nbsp;days
                                                </div>
                                                <input
                                                    id="myRange"
                                                    type="range"
                                                    min={0}
                                                    value="0"
                                                    max=""
                                                    className="slider float-left"
                                                />
                                                <div className="float-left days">
                                                    10 days
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={12}>
                                            <div className="discountRate m-b-30">
                                                <p className="earlyPayLabel">
                                                    Discount Rate
                                                </p>
                                                <input
                                                    type="number"
                                                    max={99}
                                                    min={0}
                                                />
                                                %
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={12}>
                                            <div class="pmsMemoWrap">
                                                <input type="checkbox" />
                                                <div class="pmsCheckBlock">
                                                    <h3>
                                                        Allow Late payment for a
                                                        Premium
                                                    </h3>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={12}>
                                            <div class="slideDays">
                                                <p className="offerLabel">
                                                    Pay after
                                                </p>
                                                <div className="float-left days">
                                                    <span>0</span>
                                                    &nbsp;days
                                                </div>
                                                <input
                                                    id="myRange"
                                                    type="range"
                                                    min={0}
                                                    value="0"
                                                    max=""
                                                    className="slider float-left"
                                                />
                                                <div className="float-left days">
                                                    10 days
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={12}>
                                            <div className="discountRate m-b-30">
                                                <p className="earlyPayLabel">
                                                    Premium Rate
                                                </p>
                                                <input
                                                    type="number"
                                                    max={99}
                                                    min={0}
                                                />
                                                %
                                            </div>
                                        </Col>
                                    </Row>

                                    <div className="rightFooterBtn">
                                        <Row>
                                            <Col md={12} className="text-right">
                                                <Button
                                                    className="but-gray"
                                                    onClick={onCloseModal}
                                                >
                                                    Return
                                                </Button>
                                                <Button className="btn-green m-l-5">
                                                    Confirm
                                                </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default ArPaymentOptions;
