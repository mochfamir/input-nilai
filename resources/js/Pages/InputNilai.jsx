import { Card, Col, Row } from "antd";
import React from "react";
import FormNilai from "../Components/FormNilai";

export default function Home() {
    return (
        <Row justify="center" align="middle">
            <Col span={12}>
                <Card title="Form Input Nilai Mahasiswa">
                    <FormNilai />
                </Card>
            </Col>
        </Row>
    );
}
