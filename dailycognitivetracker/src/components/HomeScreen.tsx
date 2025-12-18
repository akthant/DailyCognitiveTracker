import React from "react";
import { Calendar, Activity, CheckCircle, Info } from "lucide-react";
import { AssessmentData } from "../types";
import { useTranslation } from 'react-i18next';
import { Analytics } from "@vercel/analytics/react"; // Import the Analytics component
interface HomeScreenProps {
  userName: string;
  assessmentData: AssessmentData | null;
  onNavigate: (view: 'assessment' | 'history' | 'details') => void;
}
export const HomeScreen: React.FC<HomeScreenProps> = ({ userName, assessmentData, onNavigate }) => {
  const totalScore = assessmentData ? Object.values(assessmentData.scores).reduce((sum, score) => sum + score, 0) : 0;
  const maxScore = 8;
  const { t } = useTranslation();
  const getStatusText = (score: number): string => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 75) return t('results.highIndependence');
    if (percentage >= 50) return t('results.moderateIndependence');
    return t('results.needsSupport');
  };
  
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <Analytics /> {/* Add the component here */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                {t('home.welcome')} {userName}!
              </h1>
              <p className="text-gray-600 mt-1">{t('home.trackActivities')}</p>
            </div>
            <Activity className="w-12 h-12 text-red-600" />
          </div>
          {assessmentData && (
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm mb-1">{t('home.currentScore')}</p>
                  <p className="text-4xl font-bold">{totalScore}/{maxScore}</p>
                  <p className="text-sm mt-2">{getStatusText(totalScore)}</p>
                </div>
                <div className="text-right">
                  <p className="text-blue-100 text-sm mb-1">{t('home.lastAssessment')}</p>
                  <p className="text-lg">
                    {new Date(assessmentData.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="grid gap-4">
            <button
              onClick={() => onNavigate('assessment')}
              className="w-full bg-teal-600 text-white py-4 rounded-xl font-semibold hover:bg-teal-700 transition flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5" />
              {assessmentData ? t('home.takeNewAssessment') : t('home.startFirstAssessment')}
            </button>
            {assessmentData && (
              <>
                <button
                  onClick={() => onNavigate('history')}
                  className="w-full bg-indigo-600 text-white py-4 rounded-xl font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                 {t('home.viewHistory')}
                </button>
                <button
                  onClick={() => onNavigate('details')}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2">
                  <Info className="w-5 h-5" />
                  {t('home.viewDetails')}
                </button>
              </>
            )}
          </div>
        </div >
        {/* About Section */}
        < div className="bg-white rounded-2xl shadow-xl p-6" >
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-blue-600" />
            {t('home.aboutTitle')}
          </h2>
          <div className="space-y-3 text-gray-700 text-left">
            <p>{t('home.aboutDescription')}</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>{t('domains.telephone.title')}</li>
              <li>{t('domains.shopping.title')}</li>
              <li>{t('domains.meals.title')}</li>
              <li>{t('domains.housekeeping.title')}</li>
              <li>{t('domains.laundry.title')}</li>
              <li>{t('domains.transportation.title')}</li>
              <li>{t('domains.medications.title')}</li>
              <li>{t('domains.finances.title')}</li>
            </ul>
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm font-semibold text-yellow-800">⚠️ {t('home.importantReminder')}</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-yellow-700 mt-2 ml-4">
                <li>{t('home.disclaimerPoints.notDiagnostic')}</li>
                <li>{t('home.disclaimerPoints.earlyAwareness')}</li>
                <li>{t('home.disclaimerPoints.familyObservation')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}