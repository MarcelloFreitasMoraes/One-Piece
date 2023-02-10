import * as React from "react";
import * as M from "@mui/material";
import * as S from "./styles";
import Modals from "../Modal";
import InfoIcon from '@mui/icons-material/Info';

const style = {
  margin: '20px 25px 0 0'
};

export default function CardInfos({ data, open, handleClose, handleOpen }: any) {
  const notImage =
    "https://i.pinimg.com/564x/22/96/b7/2296b76fcbad3dd2764033c667dde33c.jpg";

  return (
    <M.Container maxWidth="xl">
      <M.Card sx={{ display: "flex", maxWidth: "150rem", height: "45rem", margin: "0 auto" }}>
        <S.Img src={data?.img !== "" ? data?.img : notImage} alt="img" />
        <M.Grid>
          <M.Grid sx={{ display: 'flex', justifyContent: 'space-between' }} >
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
              Name: {' '}
              {data?.name}
            </M.Typography>

            {data?.fruit?.returned !== 0 && (
              <M.Grid sx={{ cursor: 'pointer' }} onClick={handleOpen}>
                <InfoIcon sx={style} />
              </M.Grid>

            )}

          </M.Grid>
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
            Age: {data?.age}
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
            Job: {data?.job}
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
            Height: {data?.height}
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
            Status: {data?.status}
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
            Birthday: {data?.birthday}
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
            Bounty: ฿ {' '} {data.bounty}
          </M.Typography>
          <br />
          <M.Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              //width: "345px",
              color: "#000",
              margin: "5px 0",
              paddingLeft: "20px",
            }}
          >
            Description: {data.description}
          </M.Typography>
        </M.Grid>
      </M.Card>
      <div>
        <Modals data={data} open={open} handleClose={handleClose} handleOpen={handleOpen} />
      </div>
    </M.Container>
  );
}
