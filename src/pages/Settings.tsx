import styled from "styled-components";
import { ColorThemeProps } from "../theme";
import { useBottomMenu } from "../hooks/useBottomMenu";
import { Text } from "../components/Reusable";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { SpeedBump } from "../components/SpeedBump";
import { storage } from "../utils/storage";
import { Show } from "../components/Show";
import { useTheme } from "../hooks/useTheme";
import { useWalletLockState } from "../hooks/useWalletLockState";
import { ToggleSwitch } from "../components/ToggleSwitch";
import { useSnackbar } from "../hooks/useSnackbar";
import { SNACKBAR_TIMEOUT } from "../utils/constants";
import { useWeb3Context } from "../hooks/useWeb3Context";
import { NetWork } from "../utils/network";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TitleText = styled.h1<ColorThemeProps>`
  font-size: 2rem;
  color: ${({ theme }) => theme.white};
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  margin: 0.25rem 0;
  text-align: center;
`;

const SwitchWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 2rem;
`;

export const Settings = () => {
  const { theme } = useTheme();
  const { setSelected } = useBottomMenu();
  const { lockWallet } = useWalletLockState();
  const [showSpeedBump, setShowSpeedBump] = useState(false);
  const { addSnackbar } = useSnackbar();
  const { network, updateNetwork } = useWeb3Context();

  const handleSignOut = async () => {
    await storage.clear();
    window.location.reload();
  };

  const handleCancel = () => {
    setShowSpeedBump(false);
  };

  useEffect(() => {
    setSelected("settings");
  }, [setSelected]);

  const handleLock = () => {
    lockWallet();
    // setSelected("bsv");
  };

  const handleNetworkChange = (e: any) => {
    const network = e.target.checked ? NetWork.Mainnet : NetWork.Testnet;
    updateNetwork(network);

    // The provider relies on appState in local storage to accurately return addresses. This is an easy way to handle making sure the state is always up to date.
    addSnackbar(`Switching to ${network}`, "info");
    setTimeout(() => {
      window.location.reload();
    }, SNACKBAR_TIMEOUT - 500);
  };

  return (
    <Content>
      <SwitchWrapper>
        <ToggleSwitch
          theme={theme}
          on={network === NetWork.Mainnet}
          onChange={handleNetworkChange}
          onLabel="Mainnet"
          offLabel="Testnet"
        />
      </SwitchWrapper>
      <Show
        when={!showSpeedBump}
        whenFalseContent={
          <SpeedBump
            theme={theme}
            message="Make sure you have your seed phrase backed up!"
            onCancel={handleCancel}
            onConfirm={handleSignOut}
            showSpeedBump={showSpeedBump}
          />
        }
      >
        <TitleText theme={theme}>⚙️</TitleText>
        <TitleText theme={theme}>My Settings</TitleText>
        <Text theme={theme}>Page is under active development.</Text>
        <Button
          theme={theme}
          label="Sign Out"
          type="warn"
          onClick={() => setShowSpeedBump(true)}
        />
        <Button
          theme={theme}
          label="Lock Wallet"
          type="secondary"
          onClick={handleLock}
        />
      </Show>
    </Content>
  );
};
