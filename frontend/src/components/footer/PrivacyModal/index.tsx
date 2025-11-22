import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

interface PrivacyModalProps {
  open: boolean;
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Políticas de Privacidade & Termos de Uso</DialogTitle>

      <DialogContent dividers>
        <p>
          Este site utiliza dados fornecidos pelos usuários exclusivamente para
          fins de funcionamento da plataforma Kodan. As informações não são
          compartilhadas com terceiros e permanecem protegidas conforme as leis
          vigentes.
        </p>

        <p>
          Ao utilizar nossa plataforma, você concorda com o uso de cookies,
          armazenamento de dados essenciais e procedimentos de segurança para
          garantir a integridade das informações.
        </p>

        <p>
          Para solicitações de remoção de dados, dúvidas ou demais informações,
          entre em contato com nossa equipe de suporte pelo e-mail informado.
        </p>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Fechar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PrivacyModal;
