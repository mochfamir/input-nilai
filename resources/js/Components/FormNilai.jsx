import React from "react";
import { Button, Checkbox, Form, Input, InputNumber, message } from "antd";
import axios from "axios";

export default function FormNilai() {
    const [form] = Form.useForm();
    const onFinish = async (values) => {
        try {
            const bodyFormData = new FormData();

            for (const key in values) {
                if (Object.hasOwnProperty.call(values, key)) {
                    bodyFormData.append(key, values[key]);
                }
            }

            await axios.post("/api/mahasiswas", bodyFormData, {
                headers: {
                    accept: "application/json",
                    "Content-Type": "multipart/form-data",
                },
            });

            message.success("Input data mahasiswa berhasil!", 2);
            form.resetFields();
        } catch (error) {
            console.log(error);
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <Form
            form={form}
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 700,
            }}
            initialValues={{
                remember: true,
            }}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Nama"
                name="nama"
                rules={[
                    {
                        required: true,
                        message: "Masukan nama mahasiswa!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="NIM"
                name="nim"
                rules={[
                    {
                        required: true,
                        message: "Masukan NIM!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Nilai Quis"
                name="nilai_quis"
                rules={[
                    {
                        required: true,
                        message: "Input tidak sesuai!",
                    },
                ]}
            >
                <InputNumber />
            </Form.Item>

            <Form.Item
                label="Nilai Tugas"
                name="nilai_tugas"
                rules={[
                    {
                        required: true,
                        message: "Input tidak sesuai!",
                    },
                ]}
            >
                <InputNumber />
            </Form.Item>

            <Form.Item
                label="Nilai Absensi"
                name="nilai_absensi"
                rules={[
                    {
                        required: true,
                        message: "Input tidak sesuai!",
                    },
                ]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item
                label="Nilai Praktek"
                name="nilai_praktek"
                rules={[
                    {
                        required: true,
                        message: "Input tidak sesuai!",
                    },
                ]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item
                label="Nilai UAS"
                name="nilai_uas"
                rules={[
                    {
                        required: true,
                        message: "Input tidak sesuai!",
                    },
                ]}
            >
                <InputNumber />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}
