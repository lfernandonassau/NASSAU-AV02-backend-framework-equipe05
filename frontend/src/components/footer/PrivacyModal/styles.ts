import { styled } from "@mui/material/styles";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";

/* HEADER WRAPPER */
export const TitleRow = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(1.5, 2),
}));

/* LOGO */
export const LogoIcon = styled("img")({
  width: 32,
  height: 32,
  filter:
    "invert(87%) sepia(12%) saturate(747%) hue-rotate(184deg) brightness(104%) contrast(97%)",
});

/* TÍTULO */
export const TitleStyled = styled(DialogTitle)(({ theme }) => ({
  fontSize: "1.1rem",
  fontWeight: 700,
  color: "#0b1b3a",
  padding: 0,
  marginLeft: theme.spacing(1),
}));

/* BOTÃO DE FECHAR  */
export const CloseButton = styled(IconButton)(({ theme }) => ({
  color: "#0b1b3a",
  backgroundColor: "#b9d9ff",
  borderRadius: "8px",
  width: 36,
  height: 36,
  transition: "0.2s ease",
  "&:hover": {
    backgroundColor: "#a8c5f0",
  },
}));

/* MODAL */
export const PaperStyled = {
  borderRadius: "18px",
  paddingBottom: "10px",
  boxShadow: "0px 8px 24px rgba(0,0,0,0.1)",
};
