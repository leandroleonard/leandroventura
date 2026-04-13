import { Languages } from 'lucide-react';
import { motion } from "motion/react";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const currentLang = i18n.language === 'en' ? 'en' : 'pt';

    const toggleLanguage = () => {
        const newLang = currentLang === 'pt' ? 'en' : 'pt';
        i18n.changeLanguage(newLang);
        localStorage.setItem('i18nextLng', newLang);

        setIsOpen(true);
        setTimeout(() => setIsOpen(false), 600);
    };

    const languageConfig = {
        pt: { flag: '🇵🇹', label: 'PT' },
        en: { flag: '🇬🇧', label: 'EN' },
    };

    const activeLang = languageConfig[currentLang as 'pt' | 'en'];

    return (
        <motion.button
            onClick={toggleLanguage}
            className="fixed top-3 right-[4.5rem] z-50 p-3 border border-border bg-background hover:bg-accent transition-colors flex items-center gap-2"
            style={{ borderRadius: '0.5rem', cursor: 'pointer' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle language"
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: isOpen ? 180 : 0,
                    scale: isOpen ? 0.9 : 1
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <Languages className="w-5 h-5" />
            </motion.div>

            <motion.div
                key={currentLang} 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-1.5 font-medium text-sm"
            >
                {/* <span>{activeLang.flag}</span> */}
                <span>{activeLang.label}</span>
            </motion.div>
        </motion.button>
    );
}