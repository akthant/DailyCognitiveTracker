import React from 'react';
import { Info, ArrowLeft } from 'lucide-react';
import { AssessmentData, Domain } from '../types';
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
                        <h1 className="text-3xl font-bold text-gray-800">Assessment Details</h1>
                    </div>
                    <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-gray-700">
                            <strong>Assessment Date:</strong>{' '}
                            {new Date(assessmentData.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                            })}
                        </p>
                    
                    <p className="text-sm text-gray-700 mt-2">
                        <strong>Total Score:</strong> {assessmentData.totalScore}/8
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
                                            <span>{isFullScore ? 'Independent' : 'Needs Support'}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <p className="text-sm font-medium text-gray-700 mb-2">Your Response:</p>
                                    <p className="text-gray-800">{questionText}</p>
                                </div>
                                {!isFullScore && (
                                    <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                        <p className="text-sm font-semibold text-yellow-800 mb-1">
                                            💡 Recommendation
                                        </p>
                                        <p className="text-sm text-yellow-700">
                                            Consider discussing support options for this activity with family
                                            members or healthcare providers.
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
                            <h4 className="font-semibold text-gray-800 mb-2">About Your Assessment</h4>
                            <p className="text-sm text-gray-700 mb-2">
                                This assessment is based on the Lawton Instrumental Activities of Daily
                                Living (IADL) Scale, a validated tool used by healthcare professionals
                                to evaluate functional independence.
                            </p>
                            <p className="text-sm text-gray-700">
                                Regular assessments can help you track changes over time. If you notice
                                a decline in multiple areas, consider scheduling a consultation with your
                                healthcare provider.
                            </p>
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => onNavigate('home')}
                    className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"  >
                    Return to Home
                </button>
            </div>
        </div>
        </div>
);
};