import Head from "next/head";
import Navbar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import { Router } from "next/router";

// import VoxelBcondict from "../voxel-bcondict";
// import NoSsr  from "../no-ssr";
// import dynamic from "next/dynamic";
// const LazyVoxwlBcondict = dynamic(() => import("../voxel-bcondict"), {
//   ssr: false,
//   loading: () => <VoxelBcondict />
// })

const Main = ({ children }) => {
  return (
    <Box>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> Bcondict - Homepage </title>
      </Head>

      <Navbar path={Router.asPath} />

      <Container maxW="container.md" pt={14}>
          {/*
          <VoxelBcondict/>
          <LazyVoxwlBcondict/>
          */}
        {children}
      </Container>
    </Box>
  )
}

export default Main
