interface FacultyData {
    id: number;
    name: string;
    Education: string | null;
    pic: string;
    Motto: string | null;
    showDetails: boolean;
    FacultyDetail: string | null;
    Address: string | null;
    Exam1: string | null;
    Exam2: string | null;
    Exam3: string | null;
    Exam4: string | null;
    Exam5: string | null;
    Subject1: string | null;
    Subject2: string | null;
    Subject3: string | null;
    Subject4: string | null;
    Subject5: string | null;
  }
  
  type ToggleDetails = (id: number) => void;
  interface FacultyCardProps {
    name: string;
    FacultyDetail: string | null; 
    Motto: string | null;
    id: number;
    Education: string | null;
    pic: string;
    showDetails: boolean;
    Exam1: string | null;
    Exam2: string | null;
    Exam3: string | null;
    Exam4: string | null;
    Exam5: string | null;
    Subject1: string | null;
    Subject2: string | null;
    Subject3: string | null;
    Subject4: string | null;
    Subject5: string | null;
    toggleDetails: ToggleDetails;
  }
  export type {FacultyData,FacultyCardProps};