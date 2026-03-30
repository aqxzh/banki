import svgPaths from "../imports/svg-owukadl8i2";
import svgPathsDetails from "../imports/svg-r7tapkz4ze";
import svgPathsEmpty from "../imports/svg-astonr9c6z";
import { useState, useRef, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Tooltip, TooltipTrigger, TooltipContent } from './ui/tooltip';

interface Employee {
  id: string;
  name: string;
  initials: string;
  empId: string;
  category: string;
  categoryBg: string;
  hasMessages: boolean;
  hasTimeAlert: boolean;
  education: string;
  experience: string;
}

type SortOption = 'default' | 'name-asc' | 'name-desc' | 'category' | 'id';

const sortLabels: Record<SortOption, string> = {
  'default': 'По умолчанию',
  'name-asc': 'Имя (А-Я)',
  'name-desc': 'Имя (Я-А)',
  'category': 'Категория',
  'id': 'По ID',
};

interface EmployeeListPageProps {
  selectedSector: string;
  onBack: () => void;
}

export function EmployeeListPage({ selectedSector, onBack }: EmployeeListPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<SortOption>('default');
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const employees: Employee[] = [
    {
      id: '1',
      name: 'Абдуллаева Айгерим Ержановна',
      initials: 'АА',
      empId: 'EMP-2024-001',
      category: 'C-1',
      categoryBg: '#2563eb',
      hasMessages: true,
      hasTimeAlert: true,
      education: 'КазУМОиМЯ им. Абылай хана — Международные отношения',
      experience: '16 лет в сфере государственных финансов и бюджетирования'
    },
    {
      id: '2',
      name: 'Нурсултанов Ерлан Маратович',
      initials: 'НЕ',
      empId: 'EMP-2024-002',
      category: 'C-1',
      categoryBg: '#2563eb',
      hasMessages: true,
      hasTimeAlert: true,
      education: 'КазНУ им. Аль-Фараби — Экономика',
      experience: '12 лет в сфере финансового анализа'
    },
    {
      id: '3',
      name: 'Жумабаева Асель Казбековна',
      initials: 'ЖА',
      empId: 'EMP-2024-003',
      category: 'C-2',
      categoryBg: '#10b981',
      hasMessages: true,
      hasTimeAlert: true,
      education: 'ЕНУ им. Гумилёва — Государственное управление',
      experience: '8 лет в сфере бюджетного планирования'
    },
    {
      id: '4',
      name: 'Сейдахметов Данияр Бекболатович',
      initials: 'СД',
      empId: 'EMP-2024-004',
      category: 'C-1',
      categoryBg: '#2563eb',
      hasMessages: true,
      hasTimeAlert: true,
      education: 'КИМЭП — Финансы и учёт',
      experience: '14 лет в сфере государственного аудита'
    },
    {
      id: '5',
      name: 'Токтарова Жанна Серикбаевна',
      initials: 'ТЖ',
      empId: 'EMP-2024-005',
      category: 'C-2',
      categoryBg: '#10b981',
      hasMessages: true,
      hasTimeAlert: true,
      education: 'Назарбаев Университет — Public Policy',
      experience: '6 лет в сфере налогового администрирования'
    },
    {
      id: '6',
      name: 'Байжанов Азамат Ермекович',
      initials: 'БА',
      empId: 'EMP-2024-006',
      category: 'C-2',
      categoryBg: '#10b981',
      hasMessages: true,
      hasTimeAlert: true,
      education: 'КарУ им. Букетова — Юриспруденция',
      experience: '9 лет в сфере правового обеспечения финансов'
    },
    {
      id: '7',
      name: 'Искакова Дина Рустемовна',
      initials: 'ИД',
      empId: 'EMP-2024-007',
      category: 'C-1',
      categoryBg: '#2563eb',
      hasMessages: true,
      hasTimeAlert: true,
      education: 'АФ при Президенте РК — Государственные финансы',
      experience: '18 лет в сфере макроэкономического анализа'
    },
    {
      id: '8',
      name: 'Касымов Темирлан Бакытович',
      initials: 'КТ',
      empId: 'EMP-2024-008',
      category: 'C-3',
      categoryBg: '#ef4444',
      hasMessages: true,
      hasTimeAlert: true,
      education: 'КБТУ — Информационные системы',
      experience: '4 года в сфере цифровизации госуслуг'
    }
  ];

  const filteredEmployees = employees
    .filter(employee => 
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.empId.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortOption) {
        case 'name-asc': return a.name.localeCompare(b.name, 'ru');
        case 'name-desc': return b.name.localeCompare(a.name, 'ru');
        case 'category': return a.category.localeCompare(b.category);
        case 'id': return a.empId.localeCompare(b.empId);
        default: return 0;
      }
    });

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="bg-white h-[89px] relative shrink-0">
        <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid flex items-center gap-6 pb-px pt-[20px] px-[32px] relative h-full">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#64748b] hover:text-[#2563eb] transition-colors shrink-0"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-['DM_Sans'] text-[16px] font-normal whitespace-nowrap">Главная</span>
          </button>
          
          <div className="h-[48px] relative flex-1">
            {/* Search Input */}
            <div className="h-[48px] w-full">
              <div className="bg-[#f9fafb] h-[48px] rounded-[14px] w-full relative">
                <input
                  type="text"
                  placeholder="Поиск по имени, должности или ID"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="content-stretch flex items-center overflow-clip pl-[48px] pr-[16px] relative rounded-[inherit] size-full
                    font-['DM_Sans'] font-normal leading-[normal] not-italic text-[#1e293b] text-[18px] tracking-[-0.3125px]
                    bg-transparent border-0 outline-none placeholder:text-[#94a3b8]"
                />
                <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
                
                {/* Search Icon */}
                <div className="absolute left-[16px] size-[20px] top-[14px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g>
                      <path d="M17.5 17.5L13.8833 13.8833" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.pcddfd00} stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel */}
        <div className="w-[383px] bg-white border-r border-[#e2e8f0] flex flex-col">
          {/* Sector Info */}
          <div className="h-[134px] relative shrink-0">
            <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pb-px pt-[24px] px-[24px] relative size-full">
              {/* Title */}
              <div className="content-stretch flex flex-col gap-[4px] h-[40px] items-start relative shrink-0 w-full">
                <div className="h-[16px] relative shrink-0 w-full">
                  <p className="absolute font-['DM_Sans'] font-normal leading-[16px] left-0 not-italic text-[#64748b] text-[14px] top-px">Выбранная сфера</p>
                </div>
                <div className="h-[20px] relative shrink-0 w-full">
                  <p className="absolute font-['DM_Sans'] font-normal leading-[20px] left-0 not-italic text-[#1e293b] text-[16px] top-[0.5px] tracking-[-0.1504px]">
                    {selectedSector}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="content-stretch flex h-[57px] items-center justify-between pt-px relative shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
                <div className="h-[20px] relative shrink-0 w-[82.117px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="absolute font-['DM_Sans'] font-normal leading-[20px] left-0 not-italic text-[#64748b] text-[16px] top-[0.5px] tracking-[-0.1504px]">Найдено:</p>
                    <div className="absolute content-stretch flex h-[16.5px] items-start left-[67.1px] top-[1.5px] w-[15.016px]">
                      <p className="font-['DM_Sans'] font-normal leading-[20px] not-italic relative shrink-0 text-[#1e293b] text-[16px] tracking-[-0.1504px]">
                        {filteredEmployees.length}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative" ref={sortRef}>
                  <button
                    onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                    className="flex items-center gap-[4px] hover:text-[#2563eb] transition-colors"
                  >
                    <p className="font-['DM_Sans'] font-normal leading-[20px] not-italic text-[#64748b] text-[16px] tracking-[-0.1504px]">{sortLabels[sortOption]}</p>
                    <svg className={`size-[16px] transition-transform ${sortDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 16 16">
                      <path d="M4 6L8 10L12 6" stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </button>
                  {sortDropdownOpen && (
                    <div className="absolute right-0 top-[28px] bg-white rounded-[12px] border border-[#e2e8f0] shadow-lg z-50 min-w-[170px] py-[4px]">
                      {(Object.keys(sortLabels) as SortOption[]).map((option) => (
                        <button
                          key={option}
                          onClick={() => { setSortOption(option); setSortDropdownOpen(false); }}
                          className={`w-full text-left px-[12px] py-[8px] text-[15px] font-['DM_Sans'] transition-colors hover:bg-[#f1f5f9] ${
                            sortOption === option ? 'text-[#2563eb] font-medium' : 'text-[#1e293b]'
                          }`}
                        >
                          {sortLabels[option]}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Employee List */}
          <div className="flex-1 overflow-y-auto px-[12px] py-[8px]">
            {filteredEmployees.map((employee) => {
              const isSelected = selectedEmployeeId === employee.id;
              
              return (
                <button
                  key={employee.id}
                  onClick={() => setSelectedEmployeeId(employee.id)}
                  className={`h-[64px] relative rounded-[14px] shrink-0 w-full mb-[8px] ${
                    isSelected ? 'bg-[#dbeafe]' : ''
                  }`}
                >
                  {isSelected && (
                    <div aria-hidden="true" className="absolute border border-[#1447e6] border-solid inset-0 pointer-events-none rounded-[14px]" />
                  )}
                  <div className="flex flex-row items-center size-full">
                    <div className={`content-stretch flex gap-[12px] items-center relative size-full ${
                      isSelected ? 'px-[13px] py-px' : 'px-[12px]'
                    }`}>
                      {/* Avatar */}
                      <div className="bg-gradient-to-b from-[#2563eb] relative rounded-[16777200px] shrink-0 size-[40px] to-[#1e40af]">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                          <div className="h-[20px] relative shrink-0">
                            <p className="font-['DM_Sans'] font-normal leading-[20px] not-italic text-[16px] text-white tracking-[-0.1504px]">
                              {employee.initials}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
                          <div className="h-[20px] overflow-clip relative shrink-0 w-full">
                            <p className="absolute font-['DM_Sans'] font-normal leading-[20px] left-0 not-italic text-[#1e293b] text-[16px] top-[0.5px] tracking-[-0.1504px] whitespace-pre-wrap">
                              {employee.name}
                            </p>
                          </div>
                          <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full">
                            <div className="h-[16px] relative shrink-0">
                              <p className="font-['DM_Sans'] font-normal leading-[16px] not-italic text-[#64748b] text-[14px]">
                                {employee.empId}
                              </p>
                            </div>
                            <div 
                              className="h-[18px] relative rounded-[8px] shrink-0"
                              style={{ backgroundColor: employee.categoryBg }}
                            >
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7px] py-px relative rounded-[inherit] size-full">
                                <p className="font-['DM_Sans'] font-medium leading-[16px] not-italic relative shrink-0 text-[14px] text-white">
                                  {employee.category}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Icons */}
                      <div className="relative shrink-0">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center relative">
                          {employee.hasMessages && (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="bg-white content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative rounded-[8px] shrink-0 size-[24px] cursor-pointer">
                                  <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
                                  <div className="relative shrink-0 size-[14px]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                                      <g>
                                        <path d={svgPaths.p3a072400} stroke="#10B981" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                                        <path d="M12.8333 5.83333V9.33333" stroke="#10B981" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                                        <path d={svgPaths.p2c334740} stroke="#10B981" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent side="top" className="bg-white text-[#1e293b] border border-[#e2e8f0] shadow-lg rounded-[10px] px-4 py-3 max-w-[280px]">
                                <p className="text-[14px] font-semibold text-[#10B981] mb-1">Образование</p>
                                <p className="text-[14px] leading-[20px] text-[#1e293b]">{employee.education}</p>
                              </TooltipContent>
                            </Tooltip>
                          )}
                          {employee.hasTimeAlert && (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="bg-white content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative rounded-[8px] shrink-0 size-[24px] cursor-pointer">
                                  <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
                                  <div className="h-[14px] overflow-clip relative shrink-0 w-full">
                                    <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4">
                                      <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.50013 5.83346">
                                          <path d={svgPaths.pefda580} stroke="#F59E0B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                                        </svg>
                                      </div>
                                    </div>
                                    <div className="absolute inset-[8.33%]">
                                      <div className="absolute inset-[-5%]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
                                          <path d={svgPaths.p13f5b400} stroke="#F59E0B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent side="top" className="bg-white text-[#1e293b] border border-[#e2e8f0] shadow-lg rounded-[10px] px-4 py-3 max-w-[280px]">
                                <p className="text-[14px] font-semibold text-[#F59E0B] mb-1">Опыт работы</p>
                                <p className="text-[14px] leading-[20px] text-[#1e293b]">{employee.experience}</p>
                              </TooltipContent>
                            </Tooltip>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Panel - Employee Details or Empty State */}
        <div className="flex-1 bg-[#f8fafc] overflow-y-auto">
          {selectedEmployeeId ? (
            <EmployeeDetails employeeId={selectedEmployeeId} employees={employees} />
          ) : (
            <EmptyEmployeeState />
          )}
        </div>
      </div>
    </div>
  );
}

function EmptyEmployeeState() {
  return (
    <div className="bg-[#f9fafb] flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[192px] relative shrink-0 w-[448px]">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            {/* Icon */}
            <div className="absolute bg-gradient-to-b content-stretch flex from-[#e2e8f0] items-center justify-center left-[176px] rounded-[16777200px] size-[96px] to-[#cbd5e1] top-0">
              <div className="relative shrink-0 size-[48px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                  <g>
                    <path d={svgPathsEmpty.p32981cc0} stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                  </g>
                </svg>
              </div>
            </div>
            
            {/* Heading */}
            <div className="absolute h-[24px] left-0 top-[120px] w-[448px]">
              <p className="-translate-x-1/2 absolute font-['DM_Sans'] font-normal leading-[24px] left-[224.16px] not-italic text-[#1e293b] text-[18px] text-center top-[-0.5px] tracking-[-0.3125px]">
                Выберите сотрудника
              </p>
            </div>
            
            {/* Description */}
            <div className="absolute h-[40px] left-0 top-[152px] w-[448px]">
              <p className="-translate-x-1/2 absolute font-['DM_Sans'] font-normal leading-[20px] left-[224.1px] not-italic text-[#64748b] text-[16px] text-center top-[0.5px] tracking-[-0.1504px] w-[412px] whitespace-pre-wrap">
                Нажмите на имя сотрудника из списка слева для просмотра подробной информации
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface EmployeeDetailsProps {
  employeeId: string;
  employees: Employee[];
}

function EmployeeDetails({ employeeId, employees }: EmployeeDetailsProps) {
  const employee = employees.find(e => e.id === employeeId);
  
  if (!employee) return null;

  return (
    <div className="bg-[#f8fafc]">
      {/* Header */}
      <div className="bg-white h-[239px] relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col items-start pb-px pt-[32px] px-[32px] relative size-full">
          <div className="h-[174px] relative shrink-0 w-full">
            {/* Avatar and Info */}
            <div className="absolute h-[174px] left-[120px] top-0 w-[502px]">
              {/* Name */}
              <div className="absolute h-[32px] left-0 top-0 w-[502px]">
                <p className="absolute font-['DM_Sans'] font-normal leading-[32px] left-0 not-italic text-[#1e293b] text-[28px] top-0 tracking-[0.0703px]">
                  {employee.name}
                </p>
              </div>
              
              {/* Position */}
              <div className="absolute h-[24px] left-0 top-[36px] w-[502px]">
                <p className="absolute font-['DM_Sans'] font-normal leading-[24px] left-0 not-italic text-[#64748b] text-[18px] top-[-0.5px] tracking-[-0.3125px]">
                  Главный специалист отдела бюджетного планирования
                </p>
              </div>
              
              {/* Badge and ID */}
              <div className="absolute content-stretch flex gap-[12px] h-[26px] items-center left-0 top-[72px] w-[502px]">
                <div 
                  className="h-[26px] relative rounded-[8px] shrink-0 w-[111.695px]"
                  style={{ backgroundColor: employee.categoryBg }}
                >
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[13px] py-[5px] relative rounded-[inherit] size-full">
                    <p className="font-['DM_Sans'] font-medium leading-[16px] not-italic relative shrink-0 text-[14px] text-white">
                      Категория {employee.category}
                    </p>
                  </div>
                </div>
                <div className="h-[20px] relative shrink-0">
                  <p className="font-['DM_Sans'] font-normal leading-[20px] not-italic text-[#64748b] text-[16px] tracking-[-0.1504px]">
                    ID: {employee.empId}
                  </p>
                </div>
              </div>
              
              {/* Grid Info */}
              <div className="absolute gap-x-[24px] gap-y-[8px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[20px_minmax(0,1fr)] h-[60px] left-0 top-[114px] w-[502px]">
                {/* Возраст */}
                <div className="col-1 content-stretch flex gap-[8px] items-center justify-self-stretch relative row-1 self-stretch shrink-0">
                  <div className="relative shrink-0 size-[16px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g>
                        <path d="M5.33333 1.33333V4" stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        <path d="M10.6667 1.33333V4" stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        <path d={svgPathsDetails.p3ee34580} stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        <path d="M2 6.66667H14" stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </g>
                    </svg>
                  </div>
                  <div className="h-[20px] relative shrink-0">
                    <p className="font-['DM_Sans'] font-normal leading-[20px] not-italic text-[#64748b] text-[16px] tracking-[-0.1504px]">Возраст:</p>
                  </div>
                  <div className="h-[20px] relative shrink-0">
                    <p className="font-['DM_Sans'] font-normal leading-[20px] not-italic text-[#1e293b] text-[16px] tracking-[-0.1504px]">38 лет</p>
                  </div>
                </div>
                
                {/* Стаж */}
                <div className="col-2 content-stretch flex gap-[8px] items-center justify-self-stretch relative row-1 self-stretch shrink-0">
                  <div className="relative shrink-0 size-[16px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g clipPath="url(#clip0_33_3802)">
                        <path d="M8 4V8L10.6667 9.33333" stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        <path d={svgPathsDetails.p39ee6532} stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </g>
                      <defs>
                        <clipPath id="clip0_33_3802">
                          <rect fill="white" height="16" width="16" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="h-[20px] relative shrink-0">
                    <p className="font-['DM_Sans'] font-normal leading-[20px] not-italic text-[#64748b] text-[16px] tracking-[-0.1504px]">Стаж:</p>
                  </div>
                  <div className="h-[20px] relative shrink-0">
                    <p className="font-['DM_Sans'] font-normal leading-[20px] not-italic text-[#1e293b] text-[16px] tracking-[-0.1504px]">16 лет</p>
                  </div>
                </div>
                
                {/* Национальность */}
                <div className="col-1 content-stretch flex gap-[8px] items-center justify-self-stretch relative row-2 self-stretch shrink-0">
                  <div className="relative shrink-0 size-[16px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g>
                        <path d={svgPathsDetails.p399eca00} stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        <path d={svgPathsDetails.pc93b400} stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </g>
                    </svg>
                  </div>
                  <div className="h-[20px] relative shrink-0">
                    <p className="font-['DM_Sans'] font-normal leading-[20px] not-italic text-[#64748b] text-[16px] tracking-[-0.1504px]">Национальность:</p>
                  </div>
                  <div className="h-[20px] relative shrink-0">
                    <p className="font-['DM_Sans'] font-normal leading-[20px] not-italic text-[#1e293b] text-[16px] tracking-[-0.1504px]">Казах</p>
                  </div>
                </div>
                
                {/* Орган */}
                <div className="col-2 content-stretch flex gap-[8px] items-center justify-self-stretch relative row-2 self-stretch shrink-0">
                  <div className="relative shrink-0 size-[9.484px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.48438 9.48438">
                      <g clipPath="url(#clip0_33_3791)">
                        <path d={svgPathsDetails.p1d237080} stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.790365" />
                        <path d={svgPathsDetails.p1b5fc000} stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.790365" />
                      </g>
                      <defs>
                        <clipPath id="clip0_33_3791">
                          <rect fill="white" height="9.48438" width="9.48438" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="h-[20px] relative shrink-0">
                    <p className="font-['DM_Sans'] font-normal leading-[20px] not-italic text-[#64748b] text-[16px] tracking-[-0.1504px]">Орган:</p>
                  </div>
                  <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative">
                    <p className="font-['DM_Sans'] font-normal leading-[16px] not-italic text-[#1e293b] text-[14px]">
                      Министерство финансов Республики Казахстан
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Avatar */}
            <div className="absolute left-0 rounded-[16777200px] size-[96px] top-0">
              <div className="content-stretch flex items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
                <div className="bg-gradient-to-b flex-[1_0_0] from-[#2563eb] h-[92px] min-h-px min-w-px relative rounded-[16777200px] to-[#1e40af]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                    <p className="font-['DM_Sans'] font-normal leading-[32px] not-italic relative shrink-0 text-[28px] text-white tracking-[0.0703px]">
                      {employee.initials}
                    </p>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-[32px] py-[32px] flex flex-col gap-[32px]">
        {/* Опыт работы */}
        <div className="h-[340px] relative shrink-0 w-full">
          {/* Header */}
          <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-0 top-0 w-[622px]">
            <div className="bg-[#dbeafe] relative rounded-[10px] shrink-0 size-[40px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                <div className="relative shrink-0 size-[20px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g>
                      <path d={svgPathsDetails.pe6b10c0} stroke="#2563EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPathsDetails.p4c21d00} stroke="#2563EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="h-[28px] relative shrink-0">
              <p className="font-['DM_Sans'] font-normal leading-[28px] not-italic text-[#1e293b] text-[22px] tracking-[-0.4395px]">
                Опыт работы
              </p>
            </div>
          </div>
          
          {/* Timeline */}
          <div className="absolute content-stretch flex flex-col gap-[20px] h-[284px] items-start left-[20px] pl-[26px] top-[56px] w-[602px]">
            <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l-2 border-solid inset-0 pointer-events-none" />
            
            {/* Position 1 */}
            <div className="h-[100px] relative shrink-0 w-full">
              <div className="absolute h-[20px] left-0 top-0 w-[576px]">
                <p className="absolute font-['DM_Sans'] font-normal leading-[20px] left-0 not-italic text-[#64748b] text-[16px] top-[0.5px] tracking-[-0.1504px]">
                  2018 — настоящее время • 6 лет
                </p>
              </div>
              <div className="absolute h-[24px] left-0 top-[24px] w-[576px]">
                <p className="absolute font-['DM_Sans'] font-normal leading-[24px] left-0 not-italic text-[#1e293b] text-[18px] top-[-0.5px] tracking-[-0.3125px]">
                  Главный специалист отдела бюджетного планирования
                </p>
              </div>
              <div className="absolute h-[20px] left-0 top-[52px] w-[576px]">
                <p className="absolute font-['DM_Sans'] font-normal leading-[20px] left-0 not-italic text-[#64748b] text-[16px] top-[0.5px] tracking-[-0.1504px]">
                  Министерство финансов Республики Казахстан
                </p>
              </div>
              <div className="absolute h-[20px] left-0 top-[80px] w-[576px]">
                <p className="absolute font-['DM_Sans'] font-normal leading-[20px] left-0 not-italic text-[#64748b] text-[16px] top-[0.5px] tracking-[-0.1504px]">
                  12 лет в сфере государственных финансов и бюджетирования
                </p>
              </div>
              <div className="absolute bg-[#2563eb] border-2 border-solid border-white left-[-18px] rounded-[16777200px] size-[12px] top-[4px]" />
            </div>
            
            {/* Position 2 */}
            <div className="h-[72px] relative shrink-0 w-full">
              <div className="absolute h-[20px] left-0 top-0 w-[576px]">
                <p className="absolute font-['DM_Sans'] font-normal leading-[20px] left-0 not-italic text-[#64748b] text-[16px] top-[0.5px] tracking-[-0.1504px]">
                  2015 — 2018 • 3 года
                </p>
              </div>
              <div className="absolute h-[24px] left-0 top-[24px] w-[576px]">
                <p className="absolute font-['DM_Sans'] font-normal leading-[24px] left-0 not-italic text-[#1e293b] text-[18px] top-[-0.5px] tracking-[-0.3125px]">
                  Специалист отдела анализа
                </p>
              </div>
              <div className="absolute h-[20px] left-0 top-[52px] w-[576px]">
                <p className="absolute font-['DM_Sans'] font-normal leading-[20px] left-0 not-italic text-[#64748b] text-[16px] top-[0.5px] tracking-[-0.1504px]">
                  Департамент финансов
                </p>
              </div>
              <div className="absolute bg-[#e2e8f0] border-2 border-solid border-white left-[-18px] rounded-[16777200px] size-[12px] top-[4px]" />
            </div>
            
            {/* Position 3 */}
            <div className="h-[72px] relative shrink-0 w-full">
              <div className="absolute h-[20px] left-0 top-0 w-[576px]">
                <p className="absolute font-['DM_Sans'] font-normal leading-[20px] left-0 not-italic text-[#64748b] text-[16px] top-[0.5px] tracking-[-0.1504px]">
                  2012 — 2015 • 3 года
                </p>
              </div>
              <div className="absolute h-[24px] left-0 top-[24px] w-[576px]">
                <p className="absolute font-['DM_Sans'] font-normal leading-[24px] left-0 not-italic text-[#1e293b] text-[18px] top-[-0.5px] tracking-[-0.3125px]">
                  Младший специалист
                </p>
              </div>
              <div className="absolute h-[20px] left-0 top-[52px] w-[576px]">
                <p className="absolute font-['DM_Sans'] font-normal leading-[20px] left-0 not-italic text-[#64748b] text-[16px] top-[0.5px] tracking-[-0.1504px]">
                  Министерство экономики
                </p>
              </div>
              <div className="absolute bg-[#e2e8f0] border-2 border-solid border-white left-[-18px] rounded-[16777200px] size-[12px] top-[4px]" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="bg-[#e2e8f0] h-px shrink-0 w-full" />

        {/* Образование */}
        <div className="h-[142px] relative shrink-0 w-full">
          <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-0 top-0 w-[622px]">
            <div className="bg-[#d1fae5] relative rounded-[10px] shrink-0 size-[40px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                <div className="relative shrink-0 size-[20px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g>
                      <path d={svgPathsDetails.pff1d700} stroke="#10B981" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d="M18.3333 8.33333V13.3333" stroke="#10B981" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPathsDetails.p1ead9c00} stroke="#10B981" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="h-[28px] relative shrink-0">
              <p className="font-['DM_Sans'] font-normal leading-[28px] not-italic text-[#1e293b] text-[22px] tracking-[-0.4395px]">
                Образование
              </p>
            </div>
          </div>
          
          <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[8px] h-[86px] items-start left-[44px] pb-px pt-[17px] px-[17px] rounded-[14px] top-[56px] w-[578px]">
            <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
            <div className="h-[24px] relative shrink-0 w-full">
              <p className="absolute font-['DM_Sans'] font-normal leading-[24px] left-0 not-italic text-[#1e293b] text-[18px] top-[-0.5px] tracking-[-0.3125px]">
                Высшее экономическое, КазНУ им. Аль-Фараби, Экономика
              </p>
            </div>
            <div className="h-[20px] relative shrink-0 w-full">
              <p className="absolute font-['DM_Sans'] font-normal leading-[20px] left-0 not-italic text-[#64748b] text-[16px] top-[0.5px] tracking-[-0.1504px]">
                Государственный диплом
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="bg-[#e2e8f0] h-px shrink-0 w-full" />

        {/* Профессиональные навыки */}
        <div className="relative shrink-0 w-full">
          <div className="content-stretch flex gap-[12px] h-[40px] items-center mb-[24px]">
            <div className="bg-[#fef3c7] relative rounded-[10px] shrink-0 size-[40px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                <div className="relative shrink-0 size-[20px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g>
                      <path d={svgPathsDetails.p3ac0b600} stroke="#F59E0B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPathsDetails.p3c797180} stroke="#F59E0B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="h-[28px] relative shrink-0">
              <p className="font-['DM_Sans'] font-normal leading-[28px] not-italic text-[#1e293b] text-[22px] tracking-[-0.4395px]">
                Профессиональные навыки
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-[8px]">
            {['Финансовый анализ', 'Бюджетирование', 'Excel (продвинутый)', '1С Бухгалтерия', 'Налоговая отчётность', 'Казначейство'].map((skill, idx) => (
              <div key={idx} className="bg-white h-[22px] relative rounded-[8px]">
                <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
                  <p className="font-['DM_Sans'] font-medium leading-[16px] not-italic relative shrink-0 text-[#1e293b] text-[14px]">
                    {skill}
                  </p>
                </div>
                <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
