import React, { useState } from "react";
import { Domain, Answer, AssessmentData } from "../types";
import { useTranslation } from 'react-i18next';
import { domains as getDomainsData } from '../data/domains';
import { LanguageSelector } from './LanguageSelector';

interface AssessmentScreenProps {
  domains: Domain[];
  onComplete: (assessment: AssessmentData) => void;
}

export const AssessmentScreen: React.FC<AssessmentScreenProps> = ({ domains, onComplete }) => {
  const [currentDomain, setCurrentDomain] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const { i18n, t } = useTranslation();

  const handleAnswerChange = (domainId: string, questionId: number, score: number): void => {
    setAnswers({ ...answers, [domainId]: { questionId, score } });
  };
  const handleNext = (): void => {
    if (currentDomain < domains.length - 1) {
      setCurrentDomain(currentDomain + 1);
    } else {
      handleComplete();
    }
  };

  const handleBack = (): void => {
    if (currentDomain > 0) {
      setCurrentDomain(currentDomain - 1);
    }
  };

  const handleComplete = (): void => {
    const scores: Record<string, number> = {};
    domains.forEach(domain => {
      scores[domain.id] = answers[domain.id]?.score || 0;
    });
    const newAssessment: AssessmentData = {
      date: new Date().toISOString(),
      scores: scores,
      totalScore: Object.values(scores).reduce((sum, score) => sum + score, 0),
    };
    onComplete(newAssessment);
  };

  const domain = domains[currentDomain];
  const currentAnswer = answers[domain.id];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-500">
                {t('assessment.questionOf')} {currentDomain + 1} of {domains.length}
              </span>
              <span className="text-sm font-medium text-blue-600">
                {Math.round(((currentDomain) / domains.length) * 100)}% {t('assessment.complete')}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentDomain) / domains.length) * 100}%` }}
              />
            </div>
          </div>
          {/* Question */}
          <div className="mb-8 text-center">
            <div className="text-6xl mb-4">{domain.icons}</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{domain.title}</h2>
            <p className="text-gray-600">
              {t('assessment.selectOption')}
            </p>
          </div>
          {/* Answer Options */}
          <div className="space-y-3">
            {domain.questions.map((question) => (
              <button
                key={question.id}
                onClick={() => handleAnswerChange(domain.id, question.id, question.score)}
                className={`w-full p-4 rounded-xl border-2 transition text-left ${currentAnswer?.questionId === question.id
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                  }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 ${currentAnswer?.questionId === question.id
                      ? 'border-blue-600 bg-blue-600'
                      : 'border-gray-300'
                    }`}>
                    {currentAnswer?.questionId === question.id && (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    )}
                  </div>
                  <span className="text-gray-800">{question.text}</span>
                </div>
              </button>
            ))}
          </div>
          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-8">
            <button
              onClick={handleBack}
              disabled={currentDomain === 0}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition disabled:bg-gray-100 disabled:text-gray-400">
              {t('assessment.back')}
            </button>
            <button
              onClick={handleNext}
              disabled={!currentAnswer}
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition disabled:bg-gray-400 disabled:text-gray-200">
              {currentDomain === domains.length - 1 ? t('assessment.completeButton') : t('assessment.next')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
