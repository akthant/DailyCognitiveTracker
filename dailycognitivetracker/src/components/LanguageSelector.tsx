import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown, Check } from 'lucide-react';

export const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
    { code: 'mi', name: 'Māori', nativeName: 'Te Reo Māori', flag: '🇳🇿' },
    { code: 'my', name: 'Burmese', nativeName: 'မြန်မာ', flag: '🇲🇲' },
    { code: 'zh', name: 'Chinese', nativeName: '简体中文', flag: '🇨🇳' }
    //{ code: 'th', name: 'Thai', nativeName: 'ภาษาไทย', flag: '🇹🇭' }
  ];

  const changeLanguage = async (lng: string): Promise<void> => {
    await i18n.changeLanguage(lng);
    setIsOpen(false);
    
    try {
      await window.localStorage?.setItem('language', lng);
    } catch (error) {
      console.error('Error saving language preference:', error);
    }
  };

  // Update document language when i18n language changes
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) 
                          || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Globe className="w-5 h-5 text-blue-600" />
        <span className="text-xl" role="img" aria-label={currentLanguage.name}>
          {currentLanguage.flag}
        </span>
        <span className="font-medium text-gray-700 hidden sm:inline">
          {currentLanguage.nativeName}
        </span>
        <ChevronDown 
          className={`w-4 h-4 text-gray-500 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50 border border-gray-100 overflow-hidden max-h-96 overflow-y-auto">
          <div className="py-1">
            {languages.map((language) => {
              const isSelected = i18n.language === language.code;
              return (
                <button
                  key={language.code}
                  onClick={() => changeLanguage(language.code)}
                  className={`w-full px-4 py-3 text-left hover:bg-blue-50 transition flex items-center justify-between ${
                    isSelected ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                  }`}
                  role="menuitem"
                  aria-current={isSelected ? 'true' : 'false'}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl" role="img" aria-label={language.name}>
                      {language.flag}
                    </span>
                    <div>
                      <div className={`font-medium ${isSelected ? 'font-semibold' : ''}`}>
                        {language.nativeName}
                      </div>
                      <div className="text-sm text-gray-500">{language.name}</div>
                    </div>
                  </div>
                  {isSelected && (
                    <Check className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};