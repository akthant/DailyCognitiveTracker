import React from "react";
import { Calendar, Activity, CheckCircle, Info } from "lucide-react";
import { AssessmentData } from "../types";

interface HomeScreenProps {
  userName: string;
  assessmentData: AssessmentData | null;
  onNavigate: (view: 'assessment' | 'history' | 'details') => void;
}
export const HomeScreen: React.FC<HomeScreenProps> = ({ userName, assessmentData, onNavigate }) => {
  const totalScore = assessmentData ? Object.values(assessmentData.scores).reduce((sum, score) => sum + score, 0) : 0;
  const maxScore = 8;
  const getStatusText = (score: number): string => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 75) return "High Independence";
    if (percentage >= 50) return "Moderate Independence";
    return "Needs Support";
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Welcome, {userName}!
              </h1>
              <p className="text-gray-600 mt-1">Track your daily living activities</p>
            </div>
            <Activity className="w-12 h-12 text-red-600" />
          </div>
          {assessmentData && (
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm mb-1">Current Score</p>
                  <p className="text-4xl font-bold">{totalScore}/{maxScore}</p>
                  <p className="text-sm mt-2">{getStatusText(totalScore)}</p>
                </div>
                <div className="text-right">
                  <p className="text-blue-100 text-sm mb-1">Last Assessment</p>
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
              {assessmentData ? 'Take New Assessment' : 'Start First Assessment'}
            </button>
            {assessmentData && (
              <>
                <button
                  onClick={() => onNavigate('history')}
                  className="w-full bg-indigo-600 text-white py-4 rounded-xl font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  View History & Trends
                </button>
                <button
                  onClick={() => onNavigate('details')}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2">
                  <Info className="w-5 h-5" />
                  View Current Scores by Category
                </button>
              </>
            )}
          </div>
        </div >
        {/* About Section */}
        < div className="bg-white rounded-2xl shadow-xl p-6" >
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-blue-600" />
            About This Tool
          </h2>
          <div className="space-y-3 text-gray-700 text-left">
            <p>This tracker helps you monitor your ability to perform eight essential daily activities:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Using the telephone</li>
              <li>Shopping</li>
              <li>Preparing food</li>
              <li>Housekeeping</li>
              <li>Doing laundry</li>
              <li>Transportation</li>
              <li>Managing medications</li>
              <li>Handling finances</li>
            </ul>
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm font-semibold text-yellow-800">⚠️ Important Reminder</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-yellow-700 mt-2 ml-4">
                <li>This is NOT a diagnostic tool and it cannot replace professional medical evaluation.</li>
                <li>It is designed for early awareness and monitoring and <i>results should be discussed with healthcare providers</i>.</li>
                <li>Most valuable when combined with family/friend observations.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}