interface FacultyData {
    id: number;
    name: string;
    Education: string;
    pic: string;
    Motto: string;
    showDetails: boolean;
    Accolades:string;
    Address:string;
    Exam1:string;
    Exam2:string;
    Exam3:string;
    Exam4:string;
    Exam5:string;
  }
  type ToggleDetails = (id: number) => void;
  interface FacultyCardProps {
    name: string;
    Accolades:string;
    Motto: string;
    id: number;
    Education: string;
    pic: string;
    showDetails: boolean;
    toggleDetails: ToggleDetails;
  }
  export type {FacultyData,FacultyCardProps};