import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { ColorPicker } from "material-ui-color";
import React from "react";

export default function LabeledColorPicker({ title, color, setColor }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      marginRight="20px"
      marginLeft="20px"
    >
      <Typography>{title}</Typography>
      <ColorPicker
        value={color}
        onChange={(newColor) => {
          setColor(`#${newColor.hex}`);
        }}
      />
    </Box>
  );
}
