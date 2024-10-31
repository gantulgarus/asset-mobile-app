import React, { useContext } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { AuthContext } from "../context/AuthContext";

const ProfileScreen = () => {
  const { logout } = useContext(AuthContext);

  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
      <Button mode="outlined" onPress={() => logout()}>
        Logout
      </Button>
    </Background>
  );
};

export default ProfileScreen;
