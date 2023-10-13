// deleteModalStyles.js
import { styled } from "@stitches/react";

export const DeleteModalContainer = styled("main", {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 999,
});

export const DeleteModalContent = styled("section", {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "4px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
});

export const DeleteModalTitle = styled("h2", {
  fontSize: "20px",
  marginBottom: "16px",
});

export const DeleteModalText = styled("p", {
  fontSize: "16px",
  marginBottom: "16px",
});

export const DeleteModalButtonContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});

export const DeleteModalButton = styled("button", {
  padding: "8px 16px",
  fontSize: "16px",
  backgroundColor: "#ff0000",
  color: "white",
  borderRadius: "4px",
  border: "none",
  cursor: "pointer",
});

export const DeleteModalCancelButton = styled("button", {
  padding: "8px 16px",
  fontSize: "16px",
  backgroundColor: "#0070f3",
  color: "white",
  borderRadius: "4px",
  border: "none",
  cursor: "pointer",
});
