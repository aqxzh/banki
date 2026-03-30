import { User, Award, Briefcase, TrendingUp, FileText, Calendar, MapPin, CheckCircle2, Star, GraduationCap, Clock, Mail, Phone } from 'lucide-react';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Progress } from './ui/progress';
import { Separator } from './ui/separator';

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

  // Calculate experience in years
  const experienceYears = employee.age - 22;

  return (
    <div className="w-full bg-white border-l border-[#E2E8F0] flex flex-col h-full relative">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-[#64748B] hover:text-[#1E293B] transition-colors z-10"
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

      {/* Resume Content */}
      <div className="flex-1 overflow-auto">
        {/* Header Section */}
        <div className="bg-white px-8 py-8 border-b border-[#E2E8F0]">
          <div className="flex items-start gap-6">
            {/* Avatar */}
            <Avatar className="w-24 h-24 flex-shrink-0 border-2 border-[#E2E8F0]">
              <AvatarFallback className="bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white text-2xl">
                {getInitials(employee.name)}
              </AvatarFallback>
            </Avatar>

            {/* Basic Info */}
            <div className="flex-1">
              <h2 className="text-[#1E293B] text-2xl mb-1">{employee.name}</h2>
              <p className="text-[#64748B] mb-3">{employee.position}</p>
              
              <div className="flex items-center gap-3 mb-4">
                <Badge className={`${categoryColors[employee.category]} px-3 py-1`}>
                  Категория {employee.category}
                </Badge>
                <span className="text-[#64748B] text-sm">ID: {employee.id}</span>
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#64748B]" />
                  <span className="text-[#64748B]">Возраст:</span>
                  <span className="text-[#1E293B]">{employee.age} лет</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#64748B]" />
                  <span className="text-[#64748B]">Стаж:</span>
                  <span className="text-[#1E293B]">{experienceYears} лет</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#64748B]" />
                  <span className="text-[#64748B]">Национальность:</span>
                  <span className="text-[#1E293B]">{employee.nationality || 'казах'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#64748B]" />
                  <span className="text-[#64748B]">Орган:</span>
                  <span className="text-[#1E293B] text-xs">{employee.organization || employee.department}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Resume Sections */}
        <div className="px-8 py-6 space-y-8">
          
          {/* Experience Section */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#DBEAFE] rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-[#2563EB]" />
              </div>
              <h3 className="text-[#1E293B] text-lg">Опыт работы</h3>
            </div>
            
            <div className="ml-5 border-l-2 border-[#E2E8F0] pl-6 space-y-5">
              {employee.sectorWork && employee.sectorWork.length > 0 ? (
                employee.sectorWork.map((work, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-[1.6rem] top-2 w-3 h-3 bg-[#2563EB] rounded-full border-2 border-white"></div>
                    <p className="text-[#1E293B]">{work}</p>
                  </div>
                ))
              ) : (
                <>
                  <div className="relative">
                    <div className="absolute -left-[1.6rem] top-2 w-3 h-3 bg-[#2563EB] rounded-full border-2 border-white"></div>
                    <div className="text-[#64748B] text-sm mb-1">2018 — настоящее время • 6 лет</div>
                    <div className="text-[#1E293B] mb-1">{employee.position}</div>
                    <div className="text-[#64748B] text-sm">{employee.department}</div>
                    <div className="text-[#64748B] text-sm mt-2">{employee.experience}</div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[1.6rem] top-2 w-3 h-3 bg-[#E2E8F0] rounded-full border-2 border-white"></div>
                    <div className="text-[#64748B] text-sm mb-1">2015 — 2018 • 3 года</div>
                    <div className="text-[#1E293B] mb-1">Специалист отдела анализа</div>
                    <div className="text-[#64748B] text-sm">Департамент финансов</div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[1.6rem] top-2 w-3 h-3 bg-[#E2E8F0] rounded-full border-2 border-white"></div>
                    <div className="text-[#64748B] text-sm mb-1">2012 — 2015 • 3 года</div>
                    <div className="text-[#1E293B] mb-1">Младший специалист</div>
                    <div className="text-[#64748B] text-sm">Министерство экономики</div>
                  </div>
                </>
              )}
            </div>
          </section>

          <Separator className="bg-[#E2E8F0]" />

          {/* Education Section */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#D1FAE5] rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-[#10B981]" />
              </div>
              <h3 className="text-[#1E293B] text-lg">Образование</h3>
            </div>
            
            <div className="ml-5 pl-6 space-y-4">
              <div className="border border-[#E2E8F0] rounded-xl p-4 bg-[#F9FAFB]">
                <div className="text-[#1E293B] mb-2">{employee.education}</div>
                <div className="text-[#64748B] text-sm">Государственный диплом</div>
              </div>

              {/* Certificates if available */}
              {employee.certificates && employee.certificates.length > 0 && (
                <div className="space-y-2">
                  <p className="text-[#64748B] text-sm mb-2">Дополнительное образование:</p>
                  {employee.certificates.map((cert, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-[#1E293B]">{cert}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          <Separator className="bg-[#E2E8F0]" />

          {/* Skills Section */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#FEF3C7] rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#F59E0B]" />
              </div>
              <h3 className="text-[#1E293B] text-lg">Профессиональные навыки</h3>
            </div>
            
            <div className="ml-5 pl-6">
              <div className="flex flex-wrap gap-2">
                {employee.skills && employee.skills.length > 0 ? (
                  employee.skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-white text-[#1E293B] border border-[#E2E8F0] hover:bg-[#F9FAFB]"
                    >
                      {skill}
                    </Badge>
                  ))
                ) : (
                  <>
                    <Badge variant="secondary" className="bg-white text-[#1E293B] border border-[#E2E8F0]">
                      Финансовый анализ
                    </Badge>
                    <Badge variant="secondary" className="bg-white text-[#1E293B] border border-[#E2E8F0]">
                      Бюджетное планирование
                    </Badge>
                    <Badge variant="secondary" className="bg-white text-[#1E293B] border border-[#E2E8F0]">
                      Экономическое прогнозирование
                    </Badge>
                    <Badge variant="secondary" className="bg-white text-[#1E293B] border border-[#E2E8F0]">
                      MS Excel (продвинутый)
                    </Badge>
                    <Badge variant="secondary" className="bg-white text-[#1E293B] border border-[#E2E8F0]">
                      1С: Бухгалтерия
                    </Badge>
                    <Badge variant="secondary" className="bg-white text-[#1E293B] border border-[#E2E8F0]">
                      SAP ERP
                    </Badge>
                    <Badge variant="secondary" className="bg-white text-[#1E293B] border border-[#E2E8F0]">
                      Казахский (родной)
                    </Badge>
                    <Badge variant="secondary" className="bg-white text-[#1E293B] border border-[#E2E8F0]">
                      Русский (свободно)
                    </Badge>
                    <Badge variant="secondary" className="bg-white text-[#1E293B] border border-[#E2E8F0]">
                      Английский (B2)
                    </Badge>
                  </>
                )}
              </div>
            </div>
          </section>

          <Separator className="bg-[#E2E8F0]" />

          {/* Achievements & Awards Section */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#FEE2E2] rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-[#EF4444]" />
              </div>
              <h3 className="text-[#1E293B] text-lg">Награды и достижения</h3>
            </div>
            
            <div className="ml-5 pl-6 space-y-3">
              {employee.awards && employee.awards.length > 0 ? (
                employee.awards.map((award, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                    <span className="text-[#1E293B]">{award}</span>
                  </div>
                ))
              ) : (
                <>
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-[#1E293B]">Благодарность Министерства Финансов РК</div>
                      <div className="text-[#64748B] text-sm">2022 год</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-[#1E293B]">Лучший специалист отдела</div>
                      <div className="text-[#64748B] text-sm">2020 год</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-[#1E293B]">Участие в международных конференциях</div>
                      <div className="text-[#64748B] text-sm">2019, 2021, 2023</div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </section>

          {/* Additional Info Section */}
          {!employee.certificates && (
            <>
              <Separator className="bg-[#E2E8F0]" />
              
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#F1F5F9] rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#64748B]" />
                  </div>
                  <h3 className="text-[#1E293B] text-lg">Дополнительные сведения</h3>
                </div>
                
                <div className="ml-5 pl-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-[#E2E8F0] rounded-lg p-4 bg-white">
                      <div className="text-[#64748B] text-sm mb-1">Реализованных проектов</div>
                      <div className="text-[#2563EB] text-2xl">12+</div>
                    </div>
                    <div className="border border-[#E2E8F0] rounded-lg p-4 bg-white">
                      <div className="text-[#64748B] text-sm mb-1">Должностей в карьере</div>
                      <div className="text-[#10B981] text-2xl">3</div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
}