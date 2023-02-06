import * as React from "react";
import * as M from "@mui/material"
import Link from "next/link";

export default function Cards({ data, action }: any) {
  const notImage =
    "https://i.pinimg.com/564x/22/96/b7/2296b76fcbad3dd2764033c667dde33c.jpg";

  return (
    <M.Card sx={{ maxWidth: "345px", height: "25rem", margin: "0 auto" }}>
      <Link href={`description?id=${data.id}`} passHref>
        <div onClick={action}>
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
              {data.name}
            </M.Typography>
            <M.CardContent sx={{ padding: "0" }}>
              <M.CardMedia
                component="img"
                height="auto"
                max-width="100%"
                image={data.img !== "" ? data.img : notImage}
                alt="characters"
              />
            </M.CardContent>
          </M.CardActionArea>
        </div>
      </Link>
    </M.Card>
  );
}
