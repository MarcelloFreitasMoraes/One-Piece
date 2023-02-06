import * as React from "react";
import * as M from "@mui/material";
import * as S from "./styles";

export default function CardInfos({ data }: any) {
  const notImage =
    "https://i.pinimg.com/564x/22/96/b7/2296b76fcbad3dd2764033c667dde33c.jpg";

  return (
    <M.Card sx={{ maxWidth: "100rem", height: "auto", margin: "0 auto" }}>
    <S.img src={data.img !== "" ? data.img : notImage} alt="img" />
    <M.Grid>   
    <M.Typography
      gutterBottom
      variant="h5"
      component="div"
      sx={{
        width: "345px",
        color: "#000",
        margin: "5px 0",
        paddingLeft: "20px",
      }}
    >Name:
      {data.name}
    </M.Typography>
    <M.Typography
      gutterBottom
      variant="h5"
      component="div"
      sx={{
        width: "345px",
        color: "#000",
        margin: "5px 0",
        paddingLeft: "20px",
      }}
    >
     Age: {data.age}
    </M.Typography>
    <M.Typography
      gutterBottom
      variant="h5"
      component="div"
      sx={{
        width: "345px",
        color: "#000",
        margin: "5px 0",
        paddingLeft: "20px",
      }}
    >
     Height: {data.height}
    </M.Typography>
    <M.Typography
      gutterBottom
      variant="h5"
      component="div"
      sx={{
        width: "345px",
        color: "#000",
        margin: "5px 0",
        paddingLeft: "20px",
      }}
    >
     Birthday: {data.birthday}
    </M.Typography>
    <M.Typography
      gutterBottom
      variant="h5"
      component="div"
      sx={{
        width: "345px",
        color: "#000",
        margin: "5px 0",
        paddingLeft: "20px",
      }}
    >
     Bounty: ฿{' '}{data.bounty} 
    </M.Typography>
    </M.Grid>
  </M.Card>
  );
}
