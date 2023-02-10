import * as React from "react";
import * as M from "@mui/material";
import * as S from "./styles";
import Modals from "../Modal";
import InfoIcon from '@mui/icons-material/Info';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';

const style = {
  margin: '20px 25px 0 0'
};

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardInfos({ data, open, handleClose, handleOpen }: any) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
      setExpanded(!expanded);
  };

  const { push } = useRouter()
  const notImage =
    "https://i.pinimg.com/564x/22/96/b7/2296b76fcbad3dd2764033c667dde33c.jpg";

  return (
    <M.Container maxWidth="xl">
      <M.Card sx={{ display: "flex", maxWidth: "150rem", height: "45rem", margin: "0 auto" }}>
        <S.Img src={data.img !== "" ? data.img : notImage} alt="img" />
        <M.Grid sx={{width: '100%'}}>
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
            Bounty: ฿ {' '} {data?.bounty}
          </M.Typography>
          <br />     
          <CardActions disableSpacing>                 
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
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
                            Description: {data?.description}
                        </M.Typography>
                    </CardContent>
                </Collapse>    
        </M.Grid>       
            </M.Card>
            <div>
                <Modals data={data} open={open} handleClose={handleClose} handleOpen={handleOpen} />
            </div>
    </M.Container>
  );
}
