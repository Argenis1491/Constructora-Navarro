import { useEffect } from "react";

export default function useModal(isOpen, onClose) {
    useEffect(() => {
        if (!isOpen) 
            return;

        //Bloquear scroll
        document.body.style.overflow = "hidden";

        // Cerrar con ESC
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
             document.body.style.overflow = "";
             window.removeEventListener("keydown",  handleKeyDown);
        };
    }, [isOpen, onClose]);
}