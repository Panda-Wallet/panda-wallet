import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import {
  ConfirmContent,
  FormContainer,
  HeaderText,
  Text,
} from "../../components/Reusable";
import { Web3TransferOrdinalRequest, useOrds } from "../../hooks/useOrds";
import { Show } from "../../components/Show";
import { useSnackbar } from "../../hooks/useSnackbar";
import { PageLoader } from "../../components/PageLoader";
import validate from "bitcoin-address-validation";
import { sleep } from "../../utils/sleep";
import { useTheme } from "../../hooks/useTheme";
import { truncate } from "../../utils/format";
import { Input } from "../../components/Input";
import { Ordinal } from "../../components/Ordinal";

export type OrdTransferRequestProps = {
  web3Request: Web3TransferOrdinalRequest;
  onResponse: () => void;
};

export const OrdTransferRequest = (props: OrdTransferRequestProps) => {
  const { web3Request, onResponse } = props;
  const { theme } = useTheme();
  const {
    ordAddress,
    getOrdinals,
    isProcessing,
    transferOrdinal,
    setIsProcessing,
    getOrdinalsBaseUrl,
    ordinals,
  } = useOrds();
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [successTxId, setSuccessTxId] = useState("");
  const { addSnackbar, message } = useSnackbar();

  useEffect(() => {
    if (!successTxId) return;
    if (!message && ordAddress) {
      resetSendState();
      getOrdinals();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [successTxId, message, getOrdinals, ordAddress]);

  const resetSendState = () => {
    setPasswordConfirm("");
    setSuccessTxId("");
    setIsProcessing(false);
  };

  const handleTransferOrdinal = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProcessing(true);

    await sleep(25);
    if (!validate(web3Request.address)) {
      addSnackbar("Invalid address detected!", "info");
      setIsProcessing(false);
      return;
    }

    if (!passwordConfirm) {
      addSnackbar("You must enter a password!", "error");
      setIsProcessing(false);
      return;
    }

    const transferRes = await transferOrdinal(
      web3Request.address,
      web3Request.outpoint,
      passwordConfirm
    );

    if (!transferRes.txid || transferRes.error) {
      const message =
        transferRes.error === "invalid-password"
          ? "Invalid Password!"
          : transferRes.error === "insufficient-funds"
          ? "Insufficient Funds!"
          : transferRes.error === "no-ord-utxo"
          ? "Could not locate the ordinal!"
          : "An unknown error has occurred! Try again.";

      addSnackbar(message, "error");
      return;
    }

    setSuccessTxId(transferRes.txid);
    addSnackbar(
      "Transfer Successful! It may continue to show in your wallet until the tx is confirmed.",
      "success"
    );
    onResponse();
    await chrome.runtime.sendMessage({
      action: "transferOrdinalResponse",
      txid: transferRes.txid,
    });
  };

  return (
    <>
      <Show when={isProcessing}>
        <PageLoader theme={theme} message="Transferring Ordinal..." />
      </Show>

      <Show when={!isProcessing && !!web3Request}>
        <ConfirmContent>
          <HeaderText theme={theme}>Approve Request</HeaderText>
          <Ordinal
            inscription={
              ordinals.filter(
                (ord) => ord.outpoint.toString() === web3Request.outpoint
              )[0]
            }
            theme={theme}
            url={`${getOrdinalsBaseUrl()}/content/${web3Request.origin}`}
            selected={true}
          />
          <FormContainer noValidate onSubmit={(e) => handleTransferOrdinal(e)}>
            <Text theme={theme} style={{ margin: "1rem 0" }}>
              {`Transfer to: ${truncate(web3Request.address, 5, 5)}`}
            </Text>
            <Input
              theme={theme}
              placeholder="Password"
              type="password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <Text theme={theme} style={{ margin: "1rem 0 1rem" }}>
              Double check details before sending.
            </Text>
            <Button
              theme={theme}
              type="primary"
              label="Approve"
              disabled={isProcessing}
              isSubmit
            />
          </FormContainer>
        </ConfirmContent>
      </Show>
    </>
  );
};
