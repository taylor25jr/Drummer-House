import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";

export function MediaIframe() {
  return (
    <Box
      component="ul"
      sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 0, m: 0 }}
      style={{ width: "100%", height: "100%", opacity: "0.8" }}
    >
      <Card component="li" style={{width:"100%", height:"100%"}}>
        <CardCover>
          <img
            src="https://i.ibb.co/zR10MNS/portrait3-Image.jpg"
            srcSet="https://i.ibb.co/zR10MNS/portrait3-Image.jpg"
            loading="lazy"
            alt=""
            style={{width:"100%", height:"100%"}}
          />
        </CardCover>
      </Card>
    </Box>
  );
}
