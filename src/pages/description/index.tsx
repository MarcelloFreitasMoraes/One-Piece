import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as M from "@mui/material";

export default function Description() {
  const [data, setData] = useState();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
      axios
        .get(`https://one-piece-br-default-rtdb.firebaseio.com/characters.json/${id}`,
        {
          headers: {},
        }
      )
        .then((response: { data: any }) => {
          setData(response.data);
        })
        .catch(function (error: { toJSON: () => any }) {
          console.log(error.toJSON());
        });
  }, [id]);

  console.log(data, 'description');
  
 
  return (   
    <>
    {data &&
      Object.values(data).map((item: any, index: any) => {
        return (
      // eslint-disable-next-line react/jsx-key
      <p>
        {item.name}
      </p>
        );
      })}      
  </>
  )
}
