import React from 'react';
import { Info, ArrowLeft } from 'lucide-react';
import { AssessmentData, Domain } from '../types';
import { useTranslation } from 'react-i18next';
import { domains as getDomainsData } from '../data/domains';
import { LanguageSelector } from './LanguageSelector';

interface DetailsScreenProps {
    assessmentData: AssessmentData;
    domains: Domain[];
    onNavigate: (view: 'home') => void;
}
export const DetailsScreen: React.FC<DetailsScreenProps> = ({
    assessmentData,
    domains,
    onNavigate
}) => {
    const { i18n, t } = useTranslation();
    const getQuestionText = (domain: Domain, score: number): string => {
        const question = domain.questions.find(q => q.score === score);
        return question ? question.text : 'Unknown';
    };
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="flex items-center gap-4 mb-6">
                        <button
                            onClick={() => onNavigate('home')}
                            className="p-2 hover:bg-gray-100 rounded-lg transition">
                            <ArrowLeft className="w-6 h-6 text-gray-600" />
                        </button>
                        <h1 className="text-3xl font-bold text-gray-800">{t('details.title')}</h1>
                    </div>
                    <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-gray-700">
                            <strong>{t('details.assessmentDate')}</strong>{' '}
                            {new Date(assessmentData.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                            })}
                        </p>
                    
                    <p className="text-sm text-gray-700 mt-2">
                        <strong>{t('details.totalScore')}</strong> {assessmentData.totalScore}/8
                    </p>
                </div>
                <div className="space-y-6">
                    {domains.map(domain => {
                        const score = assessmentData.scores[domain.id];
                        const questionText = getQuestionText(domain, score);
                        const isFullScore = score === 1;
                        return (
                            <div key={domain.id} className="border border-gray-200 rounded-xl p-6">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="text-4xl">{domain.icons}</div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                                            {domain.title}
                                        </h3>
                                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${isFullScore
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            <span>{isFullScore ? '✓' : '!'}</span>
                                            <span>{isFullScore ? t('status.highIndependence') : t('status.needsSupport')}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <p className="text-sm font-medium text-gray-700 mb-2">{t('details.yourResponse')}</p>
                                    <p className="text-gray-800">{questionText}</p>
                                </div>
                                {!isFullScore && (
                                    <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                        <p className="text-sm font-semibold text-yellow-800 mb-1">
                                            💡 {t('details.recommendation')}
                                        </p>
                                        <p className="text-sm text-yellow-700">
                                            {t('details.recommendationText')}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
                <div className="mt-8 p-6 bg-blue-50 rounded-xl text-left">
                    <div className="flex items-start gap-3">
                        <Info className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-2">{t('details.aboutTitle')}</h4>
                            <p className="text-sm text-gray-700 mb-2">
                                {t('details.aboutText1')}
                            </p>
                            <p className="text-sm text-gray-700">
                                {t('details.aboutText2')}
                            </p>
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => onNavigate('home')}
                    className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"  >
                    {t('details.returnHome')}
                </button>
            </div>
        </div>
        </div>
);
};