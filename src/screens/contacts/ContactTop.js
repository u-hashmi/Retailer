import * as React from "react";
import Box from "@mui/material/Box";

import { COLORS, CONSTS, GRADIENT } from "../../theme";

const ContactTop = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "160px",
        margin: "10px 0px",
        borderRadius: CONSTS.borderRadBase,
        background: GRADIENT.primaryGradient,
        "&:hover": {
          background: GRADIENT.secondaryGradient,
          animation: "ease",
          boxShadow: `2px 2px 8px ${COLORS.primary + "66"}`
        }
      }}
    />
  );
};

export default ContactTop;
