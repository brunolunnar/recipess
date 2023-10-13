import { styled } from "../..";

export const ModalContainer = styled("section", {
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

export const ModalContent = styled("div", {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "4px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
});

export const ModalTitle = styled("h2", {
  fontSize: "20px",
  marginBottom: "16px",
});

export const FormLabel = styled("label", {
  display: "block",
  fontSize: "16px",
  marginBottom: "8px",
});

export const FormInput = styled("input", {
  width: "100%",
  padding: "8px",
  fontSize: "16px",
  marginBottom: "16px",
  borderRadius: "4px",
  border: "1px solid #ccc",
});

export const SubmitButton = styled("button", {
  padding: "8px 16px",
  fontSize: "16px",
  backgroundColor: "#0070f3",
  color: "white",
  borderRadius: "4px",
  border: "none",
  cursor: "pointer",
});
