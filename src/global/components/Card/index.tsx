import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({ data }: any) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea >
                <CardMedia
                    component="img"
                    height="auto"
                    image={data.img}
                    alt="Personagens"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}