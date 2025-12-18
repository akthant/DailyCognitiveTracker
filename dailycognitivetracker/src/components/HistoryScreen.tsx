import React, { useState, useEffect } from 'react';
import { Calendar, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { AssessmentData, Domain } from '../types';
import { loadAssessmentHistory } from '../utils/storage';
import { useTranslation } from 'react-i18next';

interface HistoryScreenProps {
    domains: Domain[];
    onNavigate: (view: 'home' | 'assessment') => void;
}
export const HistoryScreen: React.FC<HistoryScreenProps> = ({
    domains,
    onNavigate
}) => {
    const [history, setHistory] = useState<AssessmentData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { t } = useTranslation();
      const loadHistory = async (): Promise<void> => {
        const data = await loadAssessmentHistory();
        setHistory(data);
        setIsLoading(false);
    };
    useEffect(() => {
        loadHistory();
    }, []);
  
    const getTrend = (): 'improving' | 'declining' | 'stable' | null => {
        if (history.length < 2) return null;
        const recent = history[history.length - 1].totalScore;
        const previous = history[history.length - 2].totalScore;
        if (recent > previous) return 'improving';
        if (recent < previous) return 'declining';
        return 'stable';
    };
    const trend = getTrend();
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-gray-600">Loading history...</div>
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-3xl font-bold text-gray-800">{t('history.title')}</h1>
                        <button
                            onClick={() => onNavigate('home')}
                            className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        >
                            {t('history.backToHome')}
                        </button>
                    </div>
                    {history.length === 0 ? (
                        <div className="text-center py-12">
                            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-600 mb-4">{t('history.noHistory')}</p>
                            <button
                                onClick={() => onNavigate('assessment')}
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                            >
                                {t('history.takeFirstAssessment')}
                            </button>
                        </div>
                    ) : (
                        <>
                            {trend && (
                                <div className={`p-4 rounded-lg mb-6 flex items-center gap-3 ${trend === 'improving' ? 'bg-green-50' :
                                        trend === 'declining' ? 'bg-red-50' : 'bg-blue-50'
                                    }`}>
                                    {trend === 'improving' && <TrendingUp className="w-6 h-6 text-green-600" />}
                                    {trend === 'declining' && <TrendingDown className="w-6 h-6 text-red-600" />}
                                    {trend === 'stable' && <Minus className="w-6 h-6 text-blue-600" />}
                                    <div>
                                        <p className="font-semibold text-gray-800">
                                            {trend === 'improving' ? t('history.improvingTrend') :
                                                trend === 'declining' ? t('history.decliningTrend') : t('history.stableTrend')}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            {trend === 'improving' ? t('history.improvingDescription') :
                                                trend === 'declining' ? t('history.decliningDescription') :
                                                    t('history.stableDescription')}
                                        </p>
                                    </div>
                                </div>
                            )}
                            <div className="space-y-4">
                                {history.slice().reverse().map((assessment, index) => (
                                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                                        <div className="flex items-center justify-between mb-3">
                                            <div>
                                                <p className="font-semibold text-gray-800">
                                                    {new Date(assessment.date).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    {new Date(assessment.date).toLocaleTimeString('en-US', {
                                                        hour: '2-digit',
                                                        minute: '2-digit'
                                                    })}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-3xl font-bold text-blue-600">{assessment.totalScore}/8</p>
                                                <p className="text-sm text-gray-600">{t('history.totalScore')}</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-4 gap-2">
                                            {Object.entries(assessment.scores).map(([key, value]) => {
                                                const domain = domains.find(d => d.id === key);
                                                return (
                                                    <div key={key} className="text-center p-2 bg-gray-50 rounded">
                                                        <div className="text-xl mb-1">{domain?.icons}</div>
                                                        <div className={`text-xs font-semibold ${value === 1 ? 'text-green-600' : 'text-yellow-600'}`}>
                                                            {value === 1 ? '✓' : '!'}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};