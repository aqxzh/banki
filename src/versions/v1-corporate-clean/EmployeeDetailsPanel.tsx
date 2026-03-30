import { User, Award, Briefcase, TrendingUp, FileText, Calendar, MapPin, CheckCircle2, Star } from 'lucide-react';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Progress } from './ui/progress';

interface EmployeeDetailsPanelProps {
  employee: {
    name: string;
    position: string;
    id: string;
    department: string;
    category: string;
    education: string;
    experience: string;
    age: number;
    nationality?: string;
    organization?: string;
    certificates?: string[];
    sectorWork?: string[];
    skills?: string[];
    awards?: string[];
    weaknesses?: string[];
    generalWork?: string[];
  };
  onClose: () => void;
}

export function EmployeeDetailsPanel({ employee, onClose }: EmployeeDetailsPanelProps) {
  const categoryColors: { [key: string]: string } = {
    'C-1': 'bg-[#2563EB] text-white',
    'C-2': 'bg-[#10B981] text-white',
    'C-3': 'bg-[#F59E0B] text-white',
  };

  // Get initials from name
  const getInitials = (name: string) => {
    const parts = name.split(' ');
    return parts.length >= 2 ? `${parts[0][0]}${parts[1][0]}` : parts[0][0];
  };

  // Calculate experience in years (mock data)
  const experienceYears = employee.age - 22;
  const experienceProgress = Math.min((experienceYears / 30) * 100, 100);

  return (
    <div className="w-full bg-white border-l border-[#E2E8F0] flex flex-col h-full relative">
      {/* 4 Blocks Grid */}
      <div className="flex-1 overflow-auto p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#64748B] hover:text-[#1E293B] transition-colors z-10"
          aria-label="Закрыть"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="grid grid-cols-2 gap-5 h-full">
          {/* Block 1: Общие сведения о сотруднике */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#E2E8F0]">
              <User className="w-5 h-5 text-[#64748B]" />
              <h4 className="text-[#1E293B]">Общие сведения</h4>
            </div>
            
            <div className="flex-1 space-y-4 overflow-auto">
              {/* Avatar and basic info */}
              <div className="flex flex-col items-center pb-4 border-b border-[#E2E8F0]">
                <Avatar className="w-16 h-16 mb-3">
                  <AvatarFallback className="bg-[#2563EB] text-white">
                    {getInitials(employee.name)}
                  </AvatarFallback>
                </Avatar>
                <p className="text-[#1E293B] text-center mb-1">{employee.name}</p>
                <p className="text-[#64748B] text-sm text-center mb-2">{employee.position}</p>
                <Badge className={`${categoryColors[employee.category]} px-3 py-1`}>
                  {employee.category}
                </Badge>
              </div>

              {/* Info cards */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 py-2">
                  <Calendar className="w-4 h-4 text-[#64748B] mt-0.5" />
                  <div>
                    <p className="text-[#64748B] text-xs mb-0.5">Возраст</p>
                    <p className="text-[#1E293B] text-sm">{employee.age} лет</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 py-2">
                  <User className="w-4 h-4 text-[#64748B] mt-0.5" />
                  <div>
                    <p className="text-[#64748B] text-xs mb-0.5">Национальность</p>
                    <p className="text-[#1E293B] text-sm">{employee.nationality || 'казах'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 py-2">
                  <MapPin className="w-4 h-4 text-[#64748B] mt-0.5" />
                  <div>
                    <p className="text-[#64748B] text-xs mb-0.5">Орган</p>
                    <p className="text-[#1E293B] text-sm">{employee.organization || employee.department}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Block 2: Работа по сфере */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#E2E8F0]">
              <Briefcase className="w-5 h-5 text-[#64748B]" />
              <h4 className="text-[#1E293B]">Работа по сфере</h4>
            </div>
            <div className="flex-1 space-y-3 overflow-auto">
              {employee.sectorWork && employee.sectorWork.length > 0 ? (
                employee.sectorWork.map((work, index) => (
                  <div key={index} className="border-l-2 border-[#E2E8F0] pl-4 py-2">
                    <p className="text-[#1E293B] text-sm">{work}</p>
                  </div>
                ))
              ) : (
                <>
                  <div className="border-l-2 border-[#2563EB] pl-4 py-2">
                    <p className="text-[#64748B] text-xs mb-1">2018-2024 • 6 лет</p>
                    <p className="text-[#1E293B] text-sm mb-1">{employee.position}</p>
                    <p className="text-[#64748B] text-xs">{employee.department}</p>
                  </div>
                  <div className="border-l-2 border-[#E2E8F0] pl-4 py-2">
                    <p className="text-[#64748B] text-xs mb-1">2015-2018 • 3 года</p>
                    <p className="text-[#1E293B] text-sm mb-1">Специалист отдела анализа</p>
                    <p className="text-[#64748B] text-xs">Департамент финансов</p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Block 3: Навыки и награды */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#E2E8F0]">
              <TrendingUp className="w-5 h-5 text-[#64748B]" />
              <h4 className="text-[#1E293B]">Навыки и достижения</h4>
            </div>
            <div className="flex-1 space-y-4 overflow-auto">
              {/* Skills */}
              <div>
                <p className="text-[#64748B] text-xs mb-2">Навыки</p>
                <div className="flex flex-wrap gap-2">
                  {employee.skills && employee.skills.length > 0 ? (
                    employee.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-[#F1F5F9] text-[#1E293B] border border-[#E2E8F0]">
                        {skill}
                      </Badge>
                    ))
                  ) : (
                    <>
                      <Badge variant="secondary" className="bg-[#F1F5F9] text-[#1E293B] border border-[#E2E8F0]">
                        Финансовый анализ
                      </Badge>
                      <Badge variant="secondary" className="bg-[#F1F5F9] text-[#1E293B] border border-[#E2E8F0]">
                        Бюджетирование
                      </Badge>
                      <Badge variant="secondary" className="bg-[#F1F5F9] text-[#1E293B] border border-[#E2E8F0]">
                        Excel
                      </Badge>
                    </>
                  )}
                </div>
              </div>

              {/* Certificates */}
              <div className="pt-3 border-t border-[#E2E8F0]">
                <p className="text-[#64748B] text-xs mb-2">Сертификаты</p>
                <div className="space-y-2">
                  {employee.certificates && employee.certificates.length > 0 ? (
                    employee.certificates.map((cert, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                        <p className="text-[#1E293B] text-sm">{cert}</p>
                      </div>
                    ))
                  ) : (
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <p className="text-[#1E293B] text-sm">Сертификат АССА (ACCA Qualified)</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Awards */}
              <div className="pt-3 border-t border-[#E2E8F0]">
                <p className="text-[#64748B] text-xs mb-2">Награды</p>
                <div className="space-y-2">
                  {employee.awards && employee.awards.length > 0 ? (
                    employee.awards.map((award, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                        <p className="text-[#1E293B] text-sm">{award}</p>
                      </div>
                    ))
                  ) : (
                    <div className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                      <p className="text-[#1E293B] text-sm">Благодарность МФ РК (2022)</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Block 4: Работа общая */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#E2E8F0]">
              <FileText className="w-5 h-5 text-[#64748B]" />
              <h4 className="text-[#1E293B]">Карьера и образование</h4>
            </div>
            <div className="flex-1 space-y-4 overflow-auto">
              {employee.generalWork && employee.generalWork.length > 0 ? (
                employee.generalWork.map((work, index) => (
                  <div key={index} className="border-l-2 border-[#E2E8F0] pl-4 py-2">
                    <p className="text-[#1E293B] text-sm">{work}</p>
                  </div>
                ))
              ) : (
                <>
                  {/* Experience Progress */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-[#64748B] text-xs">Общий стаж</p>
                      <span className="text-[#2563EB] text-sm">{experienceYears} лет</span>
                    </div>
                    <Progress value={experienceProgress} className="h-2" />
                  </div>

                  {/* Education */}
                  <div className="pt-3 border-t border-[#E2E8F0]">
                    <p className="text-[#64748B] text-xs mb-2">Образование</p>
                    <p className="text-[#1E293B] text-sm">{employee.education}</p>
                  </div>

                  {/* Current Experience */}
                  <div className="pt-3 border-t border-[#E2E8F0]">
                    <p className="text-[#64748B] text-xs mb-2">Текущий опыт</p>
                    <p className="text-[#1E293B] text-sm">{employee.experience}</p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-3">
                    <div className="border border-[#E2E8F0] rounded-lg p-3">
                      <p className="text-[#64748B] text-xs mb-1">Должностей</p>
                      <p className="text-[#2563EB]">3</p>
                    </div>
                    <div className="border border-[#E2E8F0] rounded-lg p-3">
                      <p className="text-[#64748B] text-xs mb-1">Проектов</p>
                      <p className="text-[#10B981]">12+</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
