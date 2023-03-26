import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Table } from "antd";
import BarNilai from "../Components/BarNilai";

export default function Home() {
    const [mahasiswas, setMahasiswas] = useState([]);
    const [selectedGrade, setSelectedGrade] = useState(null);

    async function getMahasiswas() {
        const { data } = await axios
            .get("/api/mahasiswas")
            .then(({ data }) => data);

        const dataGrading = data.map((datum) => {
            const tmp = { ...datum, grade: "" };
            const {
                nilai_quis,
                nilai_tugas,
                nilai_uas,
                nilai_absensi,
                nilai_praktek,
            } = datum;
            const avgNilai =
                [
                    nilai_quis,
                    nilai_tugas,
                    nilai_uas,
                    nilai_absensi,
                    nilai_praktek,
                ].reduce((a, b) => a + b) / 5;

            if (avgNilai <= 65) {
                tmp["grade"] = "D";
            } else if (avgNilai <= 75) {
                tmp["grade"] = "C";
            } else if (avgNilai <= 85) {
                tmp["grade"] = "B";
            } else if (avgNilai <= 100) {
                tmp["grade"] = "A";
            }
            return tmp;
        });

        setMahasiswas(dataGrading);
    }

    useEffect(() => {
        getMahasiswas();
    }, []);

    return (
        <Row
            justify="center"
            align="top"
            gutter={[16, 16]}
            style={{ padding: "10px" }}
        >
            <Col span={12}>
                <Card title="Data Grade Mahasiswa">
                    <BarNilai
                        config={{
                            data: ["A", "B", "C", "D"].map((x) => ({
                                value: x,
                                count: mahasiswas.filter(
                                    (mhs) => mhs.grade === x
                                ).length,
                            })),
                            xField: "count",
                            yField: "value",
                            seriesField: "value",
                            legend: {
                                position: "top-left",
                            },
                            onReady: (plot) => {
                                plot.on("element:click", (...args) => {
                                    setSelectedGrade(args[0].data.data.value);
                                });
                            },
                        }}
                    />
                </Card>
            </Col>
            <Col span={12}>
                <Card
                    title={`${
                        selectedGrade
                            ? "Grade:" + selectedGrade
                            : "Silakan klik grade untuk melihat"
                    }`}
                >
                    <Table
                        dataSource={mahasiswas.filter(
                            (mhs) => mhs.grade === selectedGrade
                        )}
                        columns={[
                            {
                                title: "NIM",
                                dataIndex: "nim",
                                key: "nim",
                            },
                            {
                                title: "Nama",
                                dataIndex: "nama",
                                key: "nama",
                            },
                            {
                                title: "Absensi",
                                dataIndex: "nilai_absensi",
                                key: "absensi",
                            },
                            {
                                title: "Tugas",
                                dataIndex: "nilai_tugas",
                                key: "tugas",
                            },
                            {
                                title: "Praktek",
                                dataIndex: "nilai_praktek",
                                key: "praktek",
                            },
                            {
                                title: "Quis",
                                dataIndex: "nilai_quis",
                                key: "quis",
                            },
                            {
                                title: "UAS",
                                dataIndex: "nilai_uas",
                                key: "uas",
                            },
                        ]}
                    />
                </Card>
            </Col>
        </Row>
    );
}
