export type Sector = 'finance' | 'education' | 'healthcare' | 'transport' | 'all';

export interface Employee {
  id: string;
  name: string;
  position: string;
  sector: Sector;
  category: 'C-1' | 'C-2' | 'C-3';
  department: string;
  education: {
    level: string;
    institution: string;
  };
  experience: {
    years: number;
    description: string;
  };
  age: number;
}

export interface SectorInfo {
  id: Sector;
  name: string;
  color: string;
  educationTypes: string[];
  experienceRange: string;
}
