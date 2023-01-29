import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, CardActionArea } from "@mui/material";
import Link from "next/link";

export default function Cards({ data }: any) {
  const notImage =
    "https://i.pinimg.com/564x/22/96/b7/2296b76fcbad3dd2764033c667dde33c.jpg";

  return (
    <Card sx={{ maxWidth: 345}}>
      <Link href={`description?id=${data.id}`} passHref>
      <CardActionArea>
        <CardContent sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            alt="characters"
            src={data.img !== "" ? data.img : notImage}
            sx={{ width: 56, height: 56, marginRight: 5 }}
          />
          <Typography 
          gutterBottom variant="h5" component="div"
          sx={{ width: 345, textOverflow: 'ellipsis', overflow: 'hidden', height: 30, whiteSpace:'nowrap' }}
          >
            {data.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
  );
}
