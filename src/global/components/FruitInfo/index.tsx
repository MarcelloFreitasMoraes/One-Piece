import * as React from "react";
import * as M from "@mui/material";
import * as S from "./styles";

export default function CardFuit ({ data }: any) {
  
  return (
    <M.Container maxWidth="xl" >
    <M.Card sx={{display: "flex", maxWidth: "100%", height: "auto", margin: "0 auto", marginTop: '20px' }}>
    <S.Fruit src={data.fruit.img !== "" ? data.fruit.img : ""} alt="Fuit" />
      <M.Grid sx={{  }} > 
      <M.Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            color: "#000",
            margin: "5px 0",
            paddingLeft: "20px",
          }}
        >
          Fruit: {" "}{data.fruit.name !== "" ? data.fruit.name : ""}      
        </M.Typography>
      <M.Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            color: "#000",
            margin: "5px 0",
            paddingLeft: "20px",
          }}
        >
          Power: {" "}{data.fruit.power !== "" ? data.fruit.power : ""}      
        </M.Typography>
      <M.Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            color: "#000",
            margin: "5px 0",
            paddingLeft: "20px",
          }}
        >
          Type: {" "}{data.fruit.type !== "" ? data.fruit.type : ""}      
        </M.Typography>
      <M.Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            color: "#000",
            margin: "5px 0",
            paddingLeft: "20px",
          }}
        >
          Description: {" "}{data.fruit.description !== "" ? data.fruit.description : ""}      
        </M.Typography>
        </M.Grid>
    </M.Card>
    </M.Container>
  );
}
