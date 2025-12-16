import React from "react";
import { AlertCircle } from "lucide-react";
import { AssessmentData, Domain } from "../types";

interface ResultsScreenProps {
    assessmentData: AssessmentData;
    domains: Domain[];
    onNavigate: (view: 'home' | 'history') => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({ assessmentData, domains, onNavigate }) => {
    const totalScore = assessmentData.totalScore;
    const maxScore = domains.length;
    const percentage = (totalScore / maxScore) * 100;

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
                title: "High Independence",
                message: "You are managing daily activities well. Please continue to monitor your abilities and maintain healthy habits.",
                icon: "✅"
            };
        } else if (percentage >= 50) {
            return {
                color: "text-yellow-600",
                bgColor: "bg-yellow-100",
                title: "Moderate Independence",
                message: "You may need some assistance with daily living activities. Please consider discussing any challenges with family members or healthcare professionals.",
                icon: "⚠️"
            };
        } else {
            return {
                color: "text-red-600",
                bgColor: "bg-red-100",
                title: "Needs Support",
                message: "You likely require significant support for daily living activities. We recommend consulting with a healthcare professional to discuss your needs.",
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
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Assessment Complete</h1>
                        <p className="text-gray-600">Here are your results</p>
                    </div>
                    <div className={`bg-linear-to-r ${statusInfo.bgColor} rounded-xl p-6 text-gray mb-6`}>
                       <div className="text-center">
                            <p className="text-sm mb-2 text-gray-800">Your Score</p>
                            <p className="text-5xl font-bold mb-2 text-gray-900">{totalScore}/{maxScore}</p>
                            <p className="text-xl font-semibold text-gray-800">{statusInfo.title}</p>
                            <p className="text-sm mt-4 text-gray-700">{statusInfo.message}</p>
                        </div>
                    </div>
                    <div className="space-y-4 mb-8">
                        <h3 className="font-semibold text-gray-800 text-lg">Scores by Category:</h3>
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
                                        {isFullScore ? 'Independent' : 'Needs Support'}
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
                            Return to Home
                        </button>
                        <button
                            onClick={() => onNavigate('history')}
                            className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">

                            View History & Trends
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-xl p-6">
                    <h3 className="font-semibold text-gray-800 text-lg mb-3 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-blue-600" />
                        What Should You Do Next?
                    </h3>
                    <div className="space-y-3 text-gray-700 text-left">
                        <p>• <strong>Share these results</strong> with family members or caregivers</p>
                        <p>• <strong>Track changes over time</strong> by taking regular assessments</p>
                        <p>• <strong>Consult a healthcare professional</strong> if you notice concerning declines</p>
                        <p>• <strong>Stay active</strong> physically, mentally, and socially</p>
                    </div>
                </div>
            </div>
        </div>
    );
};