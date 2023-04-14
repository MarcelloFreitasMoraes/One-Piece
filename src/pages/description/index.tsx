import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import NavBar from "@/global/components/NavBar";
import CardInfos from "@/global/components/CardInfos";
import { API } from "@/global/config/api";

export default function Description() {
  const [data, setData] = useState<any>();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
      API.get(`/characters/${id}.json/`)
      .then((response) => {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  }, [id]);

  return (
    <Fragment>
      <Head>
        <title>One Piece | {data?.name}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar isBack />
      <Fragment >
        <CardInfos data={data} open={open} handleClose={handleClose} handleOpen={handleOpen} />
      </Fragment>
    </Fragment>
  );
}
