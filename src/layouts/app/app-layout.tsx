import * as React from "react";
import {
  HeaderComponent,
  NavbarComponent,
  FooterComponent,
  NavbarComponentMovement,
} from "./components";
import classes from "./app-layout.module.css";
import { routesPrefixes } from "@/core/router";
import { useLocation } from 'react-router-dom'; 

interface Props {
  children: React.ReactNode;
}

const SelectNavbar: React.FC = () => {
  const location = useLocation(); // Usa el hook para obtener la ubicación actual

  if (!location.pathname.startsWith(routesPrefixes.movements)) {
    return <NavbarComponent />;
  } else {
    return <NavbarComponentMovement/>;
  }
};

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <HeaderComponent />
      <SelectNavbar />
      <main className={classes.mainContent}>{children}</main>
      <FooterComponent />
    </>
  );
};

