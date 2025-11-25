import styled from "styled-components";
import { motion } from "framer-motion";

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 9998;
`;

export const ModalContainer = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 9999;
  
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  
  background: #1e1e1e;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 30px;
  
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 15px;

  h2 {
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    margin: 0;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }
`;

export const ModalContent = styled.div`
  overflow-y: auto;
  padding-right: 10px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.6;
  text-align: justify;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }

  h3 {
    color: #fff;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;