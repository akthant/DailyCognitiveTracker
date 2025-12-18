import React, { useState } from "react";
import { Info, HeartPulse } from "lucide-react";
import { useTranslation, Trans } from 'react-i18next';
import { LanguageSelector } from './LanguageSelector';

interface StartScreenProps {
    userName: string;
    onStart: (name: string) => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ userName, onStart }) => {
    const { t, i18n } = useTranslation();
    const [name, setName] = useState<string>(userName);
    
    const handleStart = (): void => {
        if (name.trim()) {
            onStart(name.trim());
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 flex items-center justify-center">
            {/* Language Selector */}
            <div className="absolute top-6 right-6">
                <LanguageSelector />
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
                <div className="text-center mb-8">
                    <HeartPulse className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        {t('app.title')}
                    </h1>
                    <p className="text-gray-600">
                        {t('app.subtitle')}
                    </p>
                </div>
                <div className="mb-6">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={t('start.namePlaceholder')}
                    />
                </div>
                <button
                    onClick={handleStart}
                    disabled={!name.trim()}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-300 disabled:">
                    {t('start.getStarted')}
                </button>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <div className="flex flex-col gap-4 text-left">
                        <div className="flex items-start gap-2">
                            <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-gray-700" key={`disclaimer-${i18n.language}`}>
                                <Trans 
                                    i18nKey="start.disclaimer" 
                                    components={{ 
                                        strong: <strong />,
                                        br: <br />
                                    }} 
                                />                      
                            </p>
                        </div>
                        <p className="text-sm text-gray-700" key={`privacy-${i18n.language}`}>
                            <Trans 
                                i18nKey="start.privacy" 
                                components={{ 
                                    strong: <strong />,
                                    br: <br />
                                }} 
                            />          
                        </p>
                        <p className="text-sm" style={{ color: '#B2BEB5' }}>
                            Built with ❤️ for my Mom<br/>
                            Contact: builtwithlovedev09@outlook.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};