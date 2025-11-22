import { styled } from "@mui/material/styles";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";

/* HEADER WRAPPER */
export const TitleRow = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  padding: theme.spacing(1.5, 2),
  gap: "10px",
  flexWrap: "wrap",
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
  fontSize: "1rem",
  fontWeight: 700,
  color: "#0b1b3a",
  padding: 0,
  marginLeft: theme.spacing(1),
  lineHeight: 1.3,
  whiteSpace: "normal",
  wordBreak: "break-word",
  flex: 1,
}));


/* BOTÃO DE FECHAR  */
export const CloseButton = styled(IconButton)(({ theme }) => ({
  color: "#0b1b3a",
  backgroundColor: "#b9d9ff",
  borderRadius: "8px",
  width: 32,
  height: 32,
  flexShrink: 0,
  "&:hover": {
    backgroundColor: "#a8c5f0",
  },
}));


export const PaperStyled = {
  borderRadius: "18px",
  paddingBottom: "10px",
  boxShadow: "0px 8px 24px rgba(0,0,0,0.1)",

  maxHeight: "80vh",
  display: "flex",
  flexDirection: "column",

  "@media (max-width: 768px)": {
    width: "90% !important",
    margin: "0 auto",
    maxHeight: "85vh",
  },

  "@media (max-width: 480px)": {
    width: "92% !important",
    maxHeight: "88vh",
    borderRadius: "14px",
  },
};
