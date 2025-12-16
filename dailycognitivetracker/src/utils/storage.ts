import { AssessmentData } from "../types"; 

export const STORAGE_KEY = {
    USER_NAME: 'user_name',
    ASSESSMENT_DATA: 'assessment_data',
    ASSESSMENT_HISTORY: 'assessment_history',
};

export const loadUserName = async(): Promise<string | null> => {
    try {
        const result = await window.localStorage.getItem(STORAGE_KEY.USER_NAME);
        return result ? result : null;
    }catch (error) {
        console.error("Error loading user name from storage:", error);
        return null;
    }
};

export const saveUserName = async(name : string): Promise<void> => {
    try {
        await window.localStorage.setItem(STORAGE_KEY.USER_NAME, name);
    }catch (error) {
        console.error("Error saving user name to storage:", error);
    }
};

export const loadAssessmentData = async(): Promise<AssessmentData | null> => {
    try {
        const result = await window.localStorage.getItem(STORAGE_KEY.ASSESSMENT_DATA);
        return result ? JSON.parse(result) as AssessmentData : null;
    }catch (error) {
        console.error("Error loading assessment data from storage:", error);
        return null;
    }
};

export const saveAssessmentData = async(data : AssessmentData): Promise<void> => {
    try {
        await window.localStorage.setItem(STORAGE_KEY.ASSESSMENT_DATA, JSON.stringify(data));
    }catch (error) {
        console.error("Error saving assessment data to storage:", error);
    }
};

export const loadAssessmentHistory = async(): Promise<AssessmentData[]> => {
    try {
        const result = await window.localStorage.getItem(STORAGE_KEY.ASSESSMENT_HISTORY);
        return result ? JSON.parse(result) as AssessmentData[] : [];
    }catch (error) {
        console.error("Error loading assessment history from storage:", error);
        return [];
    }
};

export const saveAssessmentHistory = async(history : AssessmentData[]): Promise<void> => {
    try {
        await window.localStorage.setItem(STORAGE_KEY.ASSESSMENT_HISTORY, JSON.stringify(history));
    }catch (error) {
        console.error("Error saving assessment history to storage:", error);
    }
};