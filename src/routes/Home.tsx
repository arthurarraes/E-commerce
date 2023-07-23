import { Outlet } from "react-router-dom";
import { Body } from "../components/homeBody";
import { Header } from "../components/homeHeader";


export function Home() {
    return (
    <>
    <Outlet/>
      <Header/>
      <Body/>
    </>
    )
}