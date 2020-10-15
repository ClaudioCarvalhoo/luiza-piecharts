import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { PieChart } from "react-minimal-pie-chart";
import {
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@material-ui/core";
import LabeledColorPicker from "./LabeledColorPicker";
import Autocomplete from "@material-ui/lab/Autocomplete";

function App() {
  const [percentage, setPercentage] = useState(74);
  const [color, setColor] = useState("#008080");
  const [chartBackgroundColor, setChartBackgroundColor] = useState("#bfbfbf");
  const [labelColor, setLabelColor] = useState("#008080");
  const [title, setTitle] = useState("Título");
  const [fontSize, setFontSize] = useState(50);
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [font, setFont] = useState("Roboto");
  const [size, setSize] = useState(500);
  const [showPercentage, setShowPercentage] = useState(true);

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      paddingTop="50px"
      style={{ backgroundColor: backgroundColor, paddingBottom: "8px" }}
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography
          style={{
            fontFamily: font,
            fontSize: `${fontSize}px`,
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          {title}
        </Typography>
        <Box width={`${size}px`} height={`${size}px`}>
          <PieChart
            data={[{ value: 1, key: 1, color: color }]}
            reveal={percentage}
            lineWidth={20}
            startAngle={270}
            label={() => `${percentage}` + (showPercentage ? "%" : "")}
            labelStyle={{
              fontSize: "25px",
              fontFamily: "sans-serif",
              fill: labelColor,
            }}
            labelPosition={0}
            background={chartBackgroundColor}
            rounded
            animate
          />
        </Box>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginTop="100px"
        flexWrap="wrap"
      >
        <TextField
          label="Percentual"
          type="number"
          value={percentage}
          onChange={(e) => {
            let val = parseInt(e.target.value);
            if (Number.isInteger(val)) {
              setPercentage(val);
            } else if (e.target.value === "") {
              setPercentage(0);
            }
          }}
          style={{ marginLeft: "20px", marginRight: "20px" }}
        />
        <TextField
          label="Título"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          style={{ marginLeft: "20px", marginRight: "20px" }}
        />
        <TextField
          label="Lado do círculo (px)"
          type="number"
          value={size}
          onChange={(e) => {
            let val = parseInt(e.target.value);
            if (Number.isInteger(val)) {
              setSize(parseInt(val));
            } else if (e.target.value === "") {
              setSize(0);
            }
          }}
          style={{ marginLeft: "20px", marginRight: "20px" }}
        />
        <TextField
          label="Tamanho da fonte (px)"
          type="number"
          value={fontSize}
          onChange={(e) => {
            let val = parseInt(e.target.value);
            if (Number.isInteger(val)) {
              setFontSize(parseInt(val));
            } else if (e.target.value === "") {
              setFontSize(0);
            }
          }}
          style={{ marginLeft: "20px", marginRight: "20px" }}
        />
        <Autocomplete
          value={font}
          onChange={(event, newValue) => {
            setFont(newValue);
          }}
          options={[
            "Roboto",
            "Helvetica",
            "Open Sans",
            "Lato",
            "Ubuntu",
            "Sans-Serif",
          ]}
          renderInput={(params) => <TextField label="Fonte" {...params} />}
          style={{ marginLeft: "20px", marginRight: "20px", width: "179px" }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={showPercentage}
              color="primary"
              onChange={() => setShowPercentage(!showPercentage)}
            />
          }
          label='Mostrar "%"'
          labelPlacement="top"
        />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginTop="20px"
        flexWrap="wrap"
      >
        <LabeledColorPicker
          title="Cor da linha"
          color={color}
          setColor={setColor}
        />
        <LabeledColorPicker
          title="Cor da trilha"
          color={chartBackgroundColor}
          setColor={setChartBackgroundColor}
        />
        <LabeledColorPicker
          title="Cor do rótulo"
          color={labelColor}
          setColor={setLabelColor}
        />
        <LabeledColorPicker
          title="Cor do fundo"
          color={backgroundColor}
          setColor={setBackgroundColor}
        />
      </Box>
    </Box>
  );
}

export default App;
