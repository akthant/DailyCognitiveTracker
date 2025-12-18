import React from "react";
import { AlertCircle } from "lucide-react";
import { AssessmentData, Domain } from "../types";
import { useTranslation } from 'react-i18next';

interface ResultsScreenProps {
    assessmentData: AssessmentData;
    domains: Domain[];
    onNavigate: (view: 'home' | 'history') => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({ assessmentData, domains, onNavigate }) => {
    const totalScore = assessmentData.totalScore;
    const maxScore = domains.length;
    const percentage = (totalScore / maxScore) * 100;
    const { t } = useTranslation();

    interface StatusInfo {
        color: string;
        bgColor: string;
        title: string;
        message: string;
        icon: string;
    }

    const getStatusInfo = (): StatusInfo => {
        if (percentage >= 75) {
            return {
                color: "text-green-600",
                bgColor: "bg-emerald-100",
                title: t('results.highIndependence'),
                message: t('results.highMessage'),
                icon: "✅"
            };
        } else if (percentage >= 50) {
            return {
                color: "text-yellow-600",
                bgColor: "bg-yellow-100",
                title: t('results.moderateIndependence'),
                message: t('results.moderateMessage'),
                icon: "⚠️"
            };
        } else {
            return {
                color: "text-red-600",
                bgColor: "bg-red-100",
                title: t('results.needsSupport'),
                message: t('results.supportMessage'),
                icon: "❗"
            };
        }
    }

    const statusInfo = getStatusInfo();

    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-6">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
                    <div className="text-center mb-8">
                        <div className="text-6xl mb-4">{statusInfo.icon}</div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">{t('results.title')}</h1>
                        <p className="text-gray-600">{t('results.subtitle')}</p>
                    </div>
                    <div className={`bg-linear-to-r ${statusInfo.bgColor} rounded-xl p-6 text-gray mb-6`}>
                       <div className="text-center">
                            <p className="text-sm mb-2 text-gray-800">{t('results.yourScore')}</p>
                            <p className="text-5xl font-bold mb-2 text-gray-900">{totalScore}/{maxScore}</p>
                            <p className="text-xl font-semibold text-gray-800">{statusInfo.title}</p>
                            <p className="text-sm mt-4 text-gray-700">{statusInfo.message}</p>
                        </div>
                    </div>
                    <div className="space-y-4 mb-8">
                        <h3 className="font-semibold text-gray-800 text-lg">{t('results.scoresByCategory')}:</h3>
                        {domains.map(domain => {
                            const score = assessmentData.scores[domain.id];
                            const isFullScore = score === 1;
                            return (
                                <div key={domain.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="text-3xl">{domain.icons}</div>
                                    <div className="flex-1">
                                        <p className="font-medium text-gray-800">{domain.title}</p>
                                    </div>
                                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${isFullScore ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                        {isFullScore ? t('results.independent') : t('results.needsSupport')}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="space-y-3">
                        <button
                            onClick={() => onNavigate('home')}
                            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                        >
                            {t('results.returnHome')}
                        </button>
                        <button
                            onClick={() => onNavigate('history')}
                            className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">

                            {t('results.viewHistory')}
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-xl p-6">
                    <h3 className="font-semibold text-gray-800 text-lg mb-3 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-blue-600" />
                        {t('results.nextStepsTitle')}
                    </h3>
                    <div className="space-y-3 text-gray-700 text-left">
                        <p>• <strong>{t('results.nextSteps.share')}</strong></p>
                        <p>• <strong>{t('results.nextSteps.track')}</strong></p>
                        <p>• <strong>{t('results.nextSteps.consult')}</strong></p>
                        <p>• <strong>{t('results.nextSteps.stayActive')}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
};