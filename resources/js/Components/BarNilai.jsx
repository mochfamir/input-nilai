import React, { useState, useEffect } from "react";
import { Bar } from "@ant-design/plots";

export default function BarNilai(props) {
    return <Bar {...props.config} />;
}
