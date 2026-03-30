import { GraduationCap, Clock, X } from 'lucide-react';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Sector, SectorInfo } from '../types/employee';

interface EmployeeFilterProps {
  sectors: SectorInfo[];
  selectedSector: Sector;
  onSectorChange: (sector: Sector) => void;
  onReset: () => void;
}

export function EmployeeFilter({ sectors, selectedSector, onSectorChange, onReset }: EmployeeFilterProps) {
  return (
    <div className="bg-white border-b border-[#E2E8F0] px-8 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 flex-wrap">
          {sectors.map((sector) => (
            <TooltipProvider key={sector.id}>
              <div className="flex items-center gap-2">
                <Button
                  variant={selectedSector === sector.id ? 'default' : 'outline'}
                  onClick={() => onSectorChange(sector.id)}
                  className="rounded-xl px-6 py-5 transition-all"
                  style={{
                    backgroundColor: selectedSector === sector.id ? sector.color : 'transparent',
                    borderColor: sector.color,
                    color: selectedSector === sector.id ? '#FFFFFF' : sector.color,
                  }}
                >
                  {sector.name}
                </Button>
                <div className="flex items-center gap-1">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                        <GraduationCap className="w-4 h-4 text-[#64748B]" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="text-sm">
                        <p className="mb-1">Образование:</p>
                        {sector.educationTypes.map((type, idx) => (
                          <p key={idx} className="text-[#64748B]">• {type}</p>
                        ))}
                      </div>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                        <Clock className="w-4 h-4 text-[#64748B]" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-sm">Опыт: {sector.experienceRange}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </TooltipProvider>
          ))}
        </div>
        {selectedSector !== 'all' && (
          <Button
            variant="outline"
            onClick={onReset}
            className="rounded-xl px-4 py-5 border-[#E2E8F0] hover:bg-[#F9FAFB]"
          >
            <X className="w-4 h-4 mr-2" />
            Сбросить фильтры
          </Button>
        )}
      </div>
    </div>
  );
}
