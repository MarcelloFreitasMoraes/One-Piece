import * as React from "react";
import * as S from "./styles";
import * as M from "@mui/material";
import { ModalProps } from "./types";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};

export default function Modals({ handleClose, open, data }: ModalProps) {
    return (
        <div>
            <M.Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <M.Box sx={style}>
                    <M.Typography
                        id="keep-mounted-modal-title"
                        variant="h4"
                        component="h2"
                        sx={{ textAlign: "center" }}
                    >
                        {data?.fruit?.name !== "" ? data?.fruit?.name : ""}
                    </M.Typography>
                    <M.Typography id="keep-mounted-modal-description" sx={{ mt: 1 }}>
                        <strong>Type:</strong>{" "}
                        {data?.fruit?.type !== "" ? data?.fruit?.type : ""}
                    </M.Typography>
                    <br/>
                    <M.Typography id="keep-mounted-modal-description">
                        <strong>Power:</strong>{" "}
                        {data?.fruit?.power !== "" ? data?.fruit?.power : ""}
                    </M.Typography>
                    <M.Grid
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <M.Grid>
                            <M.Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                                <strong>Description:</strong>{" "}
                                {data?.fruit?.description !== ""
                                    ? data?.fruit?.description
                                    : ""}
                            </M.Typography>
                        </M.Grid>
                        <S.Fruit
                            src={data?.fruit?.img !== "" ? data?.fruit?.img : ""}
                            alt="Fuit"
                        />
                    </M.Grid>                  
                </M.Box>
            </M.Modal>
        </div>
    );
}
