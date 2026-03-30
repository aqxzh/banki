import { GraduationCap, Clock } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Employee } from '../types/employee';

interface EmployeeListProps {
  employees: Employee[];
  selectedEmployeeId: string | null;
  onEmployeeSelect: (employee: Employee) => void;
}

export function EmployeeList({ employees, selectedEmployeeId, onEmployeeSelect }: EmployeeListProps) {
  return (
    <div className="flex-1 overflow-auto bg-white">
      <div className="px-8 py-4 border-b border-[#E2E8F0] bg-[#F9FAFB]">
        <div className="grid grid-cols-[2fr,1fr,2fr,auto] gap-4 text-sm text-[#64748B]">
          <div>Имя</div>
          <div>ID</div>
          <div>Должность</div>
          <div className="text-center">Информация</div>
        </div>
      </div>
      <div className="divide-y divide-[#E2E8F0]">
        {employees.map((employee) => (
          <TooltipProvider key={employee.id}>
            <div
              onClick={() => onEmployeeSelect(employee)}
              className={`px-8 py-4 cursor-pointer transition-all hover:bg-[#EFF6FF] ${
                selectedEmployeeId === employee.id ? 'bg-[#DBEAFE]' : ''
              }`}
            >
              <div className="grid grid-cols-[2fr,1fr,2fr,auto] gap-4 items-center">
                <div className="text-[#1E293B]">{employee.name}</div>
                <div className="text-[#64748B] text-sm">{employee.id}</div>
                <div className="text-[#64748B]">{employee.position}</div>
                <div className="flex items-center gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button 
                        className="p-2 hover:bg-white rounded-lg transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <GraduationCap className="w-5 h-5 text-[#10B981]" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <div className="text-sm max-w-xs">
                        <p className="mb-1">{employee.education.level}</p>
                        <p className="text-[#64748B]">{employee.education.institution}</p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button 
                        className="p-2 hover:bg-white rounded-lg transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Clock className="w-5 h-5 text-[#F59E0B]" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <div className="text-sm max-w-xs">
                        <p className="mb-1">Опыт: {employee.experience.years} лет</p>
                        <p className="text-[#64748B]">{employee.experience.description}</p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </div>
          </TooltipProvider>
        ))}
      </div>
      {employees.length === 0 && (
        <div className="flex items-center justify-center py-16 text-[#64748B]">
          Сотрудники не найдены
        </div>
      )}
    </div>
  );
}
