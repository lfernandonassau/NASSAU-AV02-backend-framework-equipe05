import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import logo from "../../../assets/logo.svg";

/* IMPORTA OS ESTILOS */
import {
  TitleRow,
  LogoIcon,
  TitleStyled,
  CloseButton,
  PaperStyled,
} from "./styles";

interface PrivacyModalProps {
  open: boolean;
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{ sx: PaperStyled }}
    >
      {/* HEADER */}
      <TitleRow>
        <div style={{ display: "flex", alignItems: "center" }}>
          <LogoIcon src={logo} alt="Kodan" />
          <TitleStyled>
            Políticas de Privacidade & Termos de Uso
          </TitleStyled>
        </div>

        <CloseButton onClick={onClose}>
          <CloseIcon fontSize="small" />
        </CloseButton>
      </TitleRow>

      <DialogContent dividers>
        <Typography paragraph>
          Este site utiliza dados fornecidos pelos usuários exclusivamente para
          fins de funcionamento da plataforma Kodan. As informações não são
          compartilhadas com terceiros e permanecem protegidas conforme as leis
          vigentes.
        </Typography>

        <Typography paragraph>
          Ao utilizar nossa plataforma, você concorda com o uso de cookies,
          armazenamento de dados essenciais e procedimentos de segurança para
          garantir a integridade das informações.
        </Typography>

        <Typography paragraph>
          Para solicitações de remoção de dados, dúvidas ou demais informações,
          entre em contato com nossa equipe de suporte pelo e-mail informado.
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{
            backgroundColor: "#b9d9ff",
            color: "#0b1b3a",
            fontWeight: 700,
            borderRadius: "10px",
            "&:hover": {
              backgroundColor: "#a8c5f0",
            },
          }}
        >
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PrivacyModal;
