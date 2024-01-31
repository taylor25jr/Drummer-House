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
      <Card component="li" style={{ width: "100%", height: "100%" }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
            style={{ height: "100%" }}
          >
            <source src="/src/assets/iframe.mp4" type="video/mp4" />
          </video>
        </CardCover>
      </Card>
    </Box>
  );
}
