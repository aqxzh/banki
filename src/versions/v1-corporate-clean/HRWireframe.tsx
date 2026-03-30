import { GraduationCap, Clock, Search, Filter, Shield, ChevronDown } from 'lucide-react';
import { useState, useMemo } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from './ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { EmployeeDetailsPanel } from './EmployeeDetailsPanel';
import { Badge } from './ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface MockEmployee {
  name: string;
  position: string;
  id: string;
  department: string;
  category: string;
  education: string;
  experience: string;
  age: number;
}

type SortOption = 'none' | 'name' | 'category' | 'age';

export function HRWireframe() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedSector, setSelectedSector] = useState('Бюджет и государственные финансы');
  const [selectedEmployee, setSelectedEmployee] = useState<MockEmployee | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('none');

  const mockEmployees: MockEmployee[] = [
    {
      name: 'Абдуллаева Айгерим Ержановна',
      position: 'Главный специалист отдела бюджетного планирования',
      id: 'EMP-2024-001',
      department: 'Министерство финансов Республики Казахстан',
      category: 'C-1',
      education: 'Высшее экономическое, КазНУ им. Аль-Фараби, Экономика',
      experience: '12 лет в сфере государственных финансов и бюджетирования',
      age: 38
    },
    {
      name: 'Нурсултанов Ерлан Маратович',
      position: 'Начальник управления финансового контроля',
      id: 'EMP-2024-002',
      department: 'Министерство финансов Республики Казахстан',
      category: 'C-1',
      education: 'Высшее финансовое, КИМЭП, Финансы и кредит',
      experience: '15 лет опыта в финансовом контроле и аудите',
      age: 42
    },
    {
      name: 'Жумабаева Асель Казбековна',
      position: 'Ведущий экономист',
      id: 'EMP-2024-003',
      department: 'Министерство финансов Республики Казахстан',
      category: 'C-2',
      education: 'Высшее экономическое, НИУ ВШЭ, Экономическая теория',
      experience: '8 лет в экономическом анализе и прогнозировании',
      age: 32
    },
    {
      name: 'Сейдахметов Данияр Бекболатович',
      position: 'Заместитель руководителя департамента',
      id: 'EMP-2024-004',
      department: 'Министерство финансов Республики Казахстан',
      category: 'C-1',
      education: 'Высшее экономическое, МГУ им. Ломоносова, Экономика',
      experience: '18 лет в государственном управлении финансами',
      age: 45
    },
    {
      name: 'Токтарова Жанна Серикбаевна',
      position: 'Главный бухгалтер',
      id: 'EMP-2024-005',
      department: 'Министерство финансов Республики Казахстан',
      category: 'C-2',
      education: 'Высшее финансовое, КазЭУ им. Рыскулова, Учет и аудит',
      experience: '10 лет в бухгалтерском учете и отчетности',
      age: 35
    },
    {
      name: 'Байжанов Азамат Ермекович',
      position: 'Специалист по налоговому администрированию',
      id: 'EMP-2024-006',
      department: 'Министерство финансов Республики Казахстан',
      category: 'C-2',
      education: 'Высшее юридическое, КазНУ им. Аль-Фараби, Налоговое право',
      experience: '7 лет в налоговом администрировании',
      age: 30
    },
    {
      name: 'Искакова Дина Рустемовна',
      position: 'Советник министра',
      id: 'EMP-2024-007',
      department: 'Министерство финансов Республики Казахстан',
      category: 'C-1',
      education: 'Высшее экономическое, LSE, Экономика и финансы',
      experience: '20 лет в государственной службе и финансовой политике',
      age: 48
    },
    {
      name: 'Алимбеков Нурлан Асылханович',
      position: 'Аналитик бюджетных программ',
      id: 'EMP-2024-008',
      department: 'Министерство финансов Республики Казахстан',
      category: 'C-3',
      education: 'Высшее экономическое, КазЭУ им. Рыскулова, Экономика',
      experience: '5 лет в анализе бюджетных программ',
      age: 28
    },
    {
      name: 'Кенжебаева Гульнара Абаевна',
      position: 'Руководитель отдела международного сотрудничества',
      id: 'EMP-2024-009',
      department: 'Министерство финансов Республики Казахстан',
      category: 'C-1',
      education: 'Высшее экономическое, МГИМО, Международные экономические отношения',
      experience: '14 лет в международном финансовом сотрудничестве',
      age: 40
    },
    {
      name: 'Сатпаев Ерболат Нурланович',
      position: 'Главный специалист казначейства',
      id: 'EMP-2024-010',
      department: 'Министерство финансов Республики Казахстан',
      category: 'C-2',
      education: 'Высшее финансовое, КазНУ им. Аль-Фараби, Финансы',
      experience: '9 лет в казначейском исполнении бюджета',
      age: 33
    }
  ];

  const sectors = [
    'Экономическое развитие и стратегическое планирование',
    'Бюджет и государственные финансы',
    'Налогообложение',
    'Промышленность и индустриальная политика',
    'Аграрная политика и продовольственная безопасность',
    'Транспорт и логистика',
    'Энергетика и топливно-энергетический комплекс',
    'Недропользование, геология и добывающая отрасль',
    'Инвестиции и государственно-частное партнёрство (ГЧП)',
    'Цифровизация, связь и кибербезопасность',
    'Внешняя политика и международное сотрудничество',
    'Образование и наука',
    'Здравоохранение',
    'Социальная защита, демография и поддержка семей',
    'Труд, занятость и охрана труда',
    'Культура, религия и креативные индустрии',
    'Молодёжная политика и спорт',
    'Экология, климат и управление природными ресурсами',
    'Строительство, архитектура и градостроительство',
    'Жилищно-коммунальное хозяйство (ЖКХ) и благоустройство',
    'Региональная политика, местное самоуправление и акиматы',
    'Внутренние дела и общественная безопасность',
    'Оборона и безопасность государства',
    'Чрезвычайные ситуации и гражданская защита',
    'Правосудие, нотариат и исполнение наказаний',
    'Антикоррупционная политика и этика государственной службы',
    'Государственные закупки и управление госимуществом'
  ];

  // Filter and sort employees
  const filteredAndSortedEmployees = useMemo(() => {
    let filtered = mockEmployees;

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(emp => 
        emp.name.toLowerCase().includes(query) ||
        emp.position.toLowerCase().includes(query) ||
        emp.id.toLowerCase().includes(query)
      );
    }

    // Sort
    let sorted = [...filtered];
    if (sortBy === 'name') {
      sorted.sort((a, b) => a.name.localeCompare(b.name, 'ru'));
    } else if (sortBy === 'category') {
      sorted.sort((a, b) => a.category.localeCompare(b.category));
    } else if (sortBy === 'age') {
      sorted.sort((a, b) => b.age - a.age);
    }

    return sorted;
  }, [searchQuery, sortBy, mockEmployees]);

  // Statistics
  const stats = useMemo(() => {
    const total = filteredAndSortedEmployees.length;
    const byCategory = filteredAndSortedEmployees.reduce((acc, emp) => {
      acc[emp.category] = (acc[emp.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return { total, byCategory };
  }, [filteredAndSortedEmployees]);

  const categoryColors: { [key: string]: string } = {
    'C-1': 'bg-[#2563EB] text-white',
    'C-2': 'bg-[#10B981] text-white',
    'C-3': 'bg-[#F59E0B] text-white',
  };

  const sortLabels = {
    'none': 'По умолчанию',
    'name': 'По имени',
    'category': 'По категории',
    'age': 'По возрасту'
  };

  return (
    <div className="h-screen flex flex-col bg-[#FFFFFF]">
      {/* Top Panel: Search + Filter */}
      <div className="bg-white border-b border-[#E2E8F0] px-8 py-5">
        <div className="flex items-center gap-4 max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск по имени, должности или ID"
              className="w-full h-12 bg-[#F9FAFB] border border-[#E2E8F0] rounded-xl pl-12 pr-4 text-[#1E293B] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
            />
          </div>
          
          {/* Filter Button */}
          <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <SheetTrigger asChild>
              <button className="h-12 px-6 bg-white border-2 border-[#E2E8F0] rounded-xl hover:bg-[#F9FAFB] transition-colors flex items-center gap-2">
                <Filter className="w-5 h-5 text-[#64748B]" />
                <span className="text-[#1E293B]">Фильтр</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[500px] sm:w-[540px]">
              <SheetHeader>
                <SheetTitle className="text-[#1E293B]">Выбор сферы</SheetTitle>
                <SheetDescription className="text-[#64748B]">
                  Выберите сферу для фильтрации сотрудников
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6 space-y-2 overflow-auto max-h-[calc(100vh-120px)]">
                {sectors.map((sector) => (
                  <button
                    key={sector}
                    onClick={() => {
                      setSelectedSector(sector);
                      setIsFilterOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-colors ${
                      selectedSector === sector
                        ? 'bg-[#2563EB] text-white'
                        : 'bg-[#F9FAFB] text-[#1E293B] hover:bg-[#E2E8F0]'
                    }`}
                  >
                    {sector}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden bg-[#F9FAFB]">
        {/* Left Column - Employee List */}
        <div className="w-96 bg-white border-r border-[#E2E8F0] flex flex-col">
          {/* Section Header */}
          <div className="p-6 border-b border-[#E2E8F0]">
            <div className="mb-3">
              <div className="text-[#64748B] text-xs mb-1">Выбранная сфера</div>
              <div className="text-[#1E293B] text-sm">{selectedSector}</div>
            </div>

            {/* Simple Stats and Sort */}
            <div className="flex items-center justify-between pt-3 border-t border-[#E2E8F0]">
              <div className="text-[#64748B] text-sm">
                Найдено: <span className="text-[#1E293B]">{stats.total}</span>
              </div>

              {/* Sort Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-sm text-[#64748B] hover:text-[#1E293B] transition-colors flex items-center gap-1">
                    {sortLabels[sortBy]}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={() => setSortBy('none')}>
                    По умолчанию
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy('name')}>
                    По имени
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy('category')}>
                    По категории
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy('age')}>
                    По возрасту
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Names List */}
          <div className="flex-1 p-6 overflow-auto">
            {filteredAndSortedEmployees.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-[#64748B] text-sm">Ничего не найдено</p>
                <p className="text-[#94A3B8] text-xs mt-1">Попробуйте изменить запрос</p>
              </div>
            ) : (
              <div className="space-y-2">
                {filteredAndSortedEmployees.map((employee, i) => (
                  <TooltipProvider key={i}>
                    <div 
                      onClick={() => setSelectedEmployee(employee)}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-colors cursor-pointer ${
                        selectedEmployee?.id === employee.id 
                          ? 'bg-[#DBEAFE] border border-[#2563EB]' 
                          : 'hover:bg-[#F9FAFB]'
                      }`}
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-full flex-shrink-0 flex items-center justify-center">
                        <span className="text-white text-sm">
                          {employee.name.split(' ')[0].charAt(0)}{employee.name.split(' ')[1].charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <p className="text-[#1E293B] text-sm truncate">{employee.name}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="text-[#64748B] text-xs">{employee.id}</p>
                          <Badge className={`${categoryColors[employee.category]} text-xs px-1.5 py-0`}>
                            {employee.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button 
                              className="p-1 border border-[#E2E8F0] rounded-md bg-white hover:bg-[#F9FAFB] transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <GraduationCap className="w-3.5 h-3.5 text-[#10B981]" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="right">
                            <div className="text-sm max-w-xs">
                              <p>{employee.education}</p>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button 
                              className="p-1 border border-[#E2E8F0] rounded-md bg-white hover:bg-[#F9FAFB] transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="right">
                            <div className="text-sm max-w-xs">
                              <p>{employee.experience}</p>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>
                  </TooltipProvider>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Employee Details or Placeholder */}
        {selectedEmployee ? (
          <EmployeeDetailsPanel
            employee={selectedEmployee}
            onClose={() => setSelectedEmployee(null)}
          />
        ) : (
          <div className="flex-1 p-8 overflow-auto flex items-center justify-center bg-[#F9FAFB]">
            <div className="text-center max-w-md">
              <div className="w-24 h-24 bg-gradient-to-br from-[#E2E8F0] to-[#CBD5E1] rounded-full mx-auto mb-6 flex items-center justify-center">
                <Shield className="w-12 h-12 text-[#64748B]" />
              </div>
              <h3 className="text-[#1E293B] mb-2">Выберите сотрудника</h3>
              <p className="text-[#64748B] text-sm">
                Нажмите на имя сотрудника из списка слева для просмотра подробной информации
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
