import React, { useState } from "react";
import { Info,HeartPulse } from "lucide-react";

interface StartScreenProps {
    userName: string;
    onStart: (name: string) => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ userName, onStart }) => {
    const [name, setName] = useState<string>(userName);
    const handleStart = (): void => {
        if (name.trim()) {
            onStart(name.trim());
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
                <div className="text-center mb-8">
                     <HeartPulse className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        Daily Living Activities Tracker
                    </h1>
                    <p className="text-gray-600">
                        Monitor your independence in everyday activities
                    </p>
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your name"
                    />
                </div>
                <button
                    onClick={handleStart}
                    disabled={!name.trim()}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-300 disabled:"
                >
                    Get Started
                </button>
<div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start gap-2 text-left">
                    <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700">
                        This tool helps you track your ability to perform daily activities.
                        It is <strong>not a medical diagnostic tool</strong>. Always consult
                        healthcare professionals for medical advice.
                    </p>
                </div>
            </div>
        </div>
</div >
    );
};