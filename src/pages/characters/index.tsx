import CardsPiece from '@/global/components/Card';
import { Fragment, useEffect, useState } from 'react';
import * as M from "@mui/material";
import NavBar from '@/global/components/NavBar';
import { getPiece } from '@/services/onePieceServices';
import { Loading } from '@/global/components/Loading';

export default function Characters() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getPiece().then((res: any) => {
      setData(res?.data)
    })
      .catch(function (error: { toJSON: () => any; }) {
         console.log(error.toJSON());
       })  
  }, [])

  console.log(data, 'data');

  const pieceFilter = (name: string) => {

    if (name === '') {
      getPiece()
    }
    let filterPiece: any = []
    for (let i in data) {
      if (data[i].name.includes(name)) {
        filterPiece.push(data[i])
      }
    }
    setData(filterPiece)
  }
  if (data.length === 0) {
    return <Loading />;
  }
  
    return ( 
    <Fragment>      
      <NavBar pieceFilter={pieceFilter} value={data} IsSearch/>
      <M.Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {data &&
        Object.values(data).map((item: any, index: any) => {
          return (
            <M.Grid item xs={3}  key={index}>
          <CardsPiece data={item} />
          </M.Grid>
          )
        })}
        </M.Grid>
    </Fragment>
  )
}