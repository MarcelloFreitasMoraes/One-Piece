import * as React from "react";
import * as M from "@mui/material"
import Link from "next/link";
import { useRouter } from "next/router";

export default function Cards({ data, action }: any) {
  const { push } = useRouter()
  const notImage =
    "https://i.pinimg.com/564x/22/96/b7/2296b76fcbad3dd2764033c667dde33c.jpg";
  //console.log(data, 'abacaxi')

  return (
    <M.Card sx={{ maxWidth: "345px", height: "25rem", margin: "0 auto" }}>
      {/* <Link href={`description?id=${data[0]}`} passHref> */}
      <div onClick={() => push(`/description?id=${data[0]}`)}>
        <M.CardActionArea>
          <M.Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              width: "345px",
              textOverflow: "ellipsis",
              overflow: "hidden",
              height: "30px",
              whiteSpace: "nowrap",
              margin: "5px 0",
              paddingLeft: '20px'
            }}
          >
            {data[1]?.name}
          </M.Typography>
          <M.CardContent sx={{ padding: "0" }}>
            <M.CardMedia
              component="img"
              height="auto"
              max-width="100%"
              image={data[1]?.img !== "" ? data[1]?.img : notImage}
              alt="characters"
            />
          </M.CardContent>
        </M.CardActionArea>
      </div>
      {/* </Link> */}
    </M.Card>
  );
}
