import './App.css'
import { toast } from 'react-hot-toast';
import React, { useState, useEffect } from 'react';
import { ViewType, AssessmentData } from './types';
import { domains } from './data/domains';
import { loadUserName, saveUserName, loadAssessmentData, saveAssessmentData, loadAssessmentHistory, saveAssessmentHistory } from './utils/storage';
import { HomeScreen } from './components/HomeScreen';
import { StartScreen } from './components/StartScreen';
import { AssessmentScreen } from './components/AssessmentScreen';
import { HistoryScreen } from './components/HistoryScreen';
import { DetailsScreen } from './components/DetailsScreen';
import { ResultsScreen } from './components/ResultsScreen';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('start');
  const [userName, setUserName] = useState<string>('');
  const [assessmentData, setAssessmentData] = useState<AssessmentData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);



  const initializeApp = async (): Promise<void> => {
    const name = await loadUserName();
    const data = await loadAssessmentData();
    if (name) setUserName(name);
    if (data) setAssessmentData(data);
    setIsLoading(false);

    if (name) {
      setCurrentView('home');
    }
  };

  useEffect(() => {
    initializeApp();
  }, []);

  const handleStart = async (name: string): Promise<void> => {
    setUserName(name);
    await saveUserName(name);
    setCurrentView('home');
    toast.success(`Welcome, ${name}!`);
  };
  const handleAssessmentComplete = async (assessment: AssessmentData): Promise<void> => {
    setAssessmentData(assessment);
    await saveAssessmentData(assessment);
    const history = await loadAssessmentHistory();
    history.push(assessment);
    await saveAssessmentHistory(history);
    setCurrentView('results');
    toast.success('Congrats! Assessment is completed successfully.');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading...</div>
      </div>

    );
  }
  return (
    <>
      {currentView === 'start' && (
        <StartScreen userName={userName} onStart={handleStart} />
      )}
      {currentView === 'home' && (
        <HomeScreen
          userName={userName}
          assessmentData={assessmentData}
          onNavigate={setCurrentView}
        />
      )}
      {currentView === 'assessment' && (
        <AssessmentScreen
          domains={domains}
          onComplete={handleAssessmentComplete}
        />
      )}
      {/* Add other screen components */}
      {currentView === 'history' && (
        <HistoryScreen
          domains={domains}
          onNavigate={setCurrentView}
        />
      )}
      {currentView === 'details' && assessmentData && (
        <DetailsScreen
          assessmentData={assessmentData}
          domains={domains}
          onNavigate={setCurrentView}
        />
      )}
       {currentView === 'results' && assessmentData && (
        <ResultsScreen
          assessmentData={assessmentData}
          domains={domains}
          onNavigate={setCurrentView}
        />
      )}

    </>
  );
};


export default App
