import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { EmployeeListPage } from './components/EmployeeListPage';

type Page = 'home' | 'employees';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedSector, setSelectedSector] = useState<string>('');

  const handleSectorSelect = (sectorName: string) => {
    setSelectedSector(sectorName);
    setCurrentPage('employees');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  return (
    <>
      {currentPage === 'home' && (
        <HomePage onSectorSelect={handleSectorSelect} />
      )}
      {currentPage === 'employees' && (
        <EmployeeListPage 
          selectedSector={selectedSector}
          onBack={handleBackToHome}
        />
      )}
    </>
  );
}
