import { 
  TrendingUp, 
  DollarSign, 
  Calculator, 
  Factory, 
  Wheat, 
  Truck, 
  Zap, 
  Mountain,
  Handshake,
  Wifi,
  Globe,
  GraduationCap,
  Heart,
  Users,
  Briefcase,
  Palette,
  Trophy,
  Leaf,
  Building,
  Home,
  MapPin,
  Shield,
  ShieldCheck,
  Siren,
  Scale,
  AlertCircle,
  ShoppingCart,
  Search,
  Calendar,
  Layers,
  LucideIcon
} from 'lucide-react';
import { useState, useMemo } from 'react';

interface Sector {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string;
  category: 'economic' | 'social' | 'security' | 'infrastructure';
}

interface HomePageProps {
  onSectorSelect: (sectorName: string) => void;
}

export function HomePage({ onSectorSelect }: HomePageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const sectors: Sector[] = [
    {
      id: 'economy',
      name: 'Экономическое развитие и стратегическое планирование',
      icon: TrendingUp,
      color: '#EFF6FF',
      category: 'economic'
    },
    {
      id: 'budget',
      name: 'Бюджет и государственные финансы',
      icon: DollarSign,
      color: '#ECFDF5',
      category: 'economic'
    },
    {
      id: 'tax',
      name: 'Налогообложение',
      icon: Calculator,
      color: '#FEF3C7',
      category: 'economic'
    },
    {
      id: 'industry',
      name: 'Промышленность и индустриальная политика',
      icon: Factory,
      color: '#FEF0E7',
      category: 'economic'
    },
    {
      id: 'agro',
      name: 'Аграрная политика и продовольственная безопасность',
      icon: Wheat,
      color: '#F0FDF4',
      category: 'economic'
    },
    {
      id: 'transport',
      name: 'Транспорт и логистика',
      icon: Truck,
      color: '#EFF6FF',
      category: 'infrastructure'
    },
    {
      id: 'energy',
      name: 'Энергетика и топливно-энергетический комплекс',
      icon: Zap,
      color: '#FEF3C7',
      category: 'infrastructure'
    },
    {
      id: 'mining',
      name: 'Недропользование, геология и добывающая отрасль',
      icon: Mountain,
      color: '#F5F3FF',
      category: 'economic'
    },
    {
      id: 'investment',
      name: 'Инвестиции и государственно-частное партнёрство (ГЧП)',
      icon: Handshake,
      color: '#FEF0E7',
      category: 'economic'
    },
    {
      id: 'digital',
      name: 'Цифровизация, связь и кибербезопасность',
      icon: Wifi,
      color: '#EFF6FF',
      category: 'infrastructure'
    },
    {
      id: 'foreign',
      name: 'Внешняя политика и международное сотрудничество',
      icon: Globe,
      color: '#ECFDF5',
      category: 'economic'
    },
    {
      id: 'education',
      name: 'Образование и наука',
      icon: GraduationCap,
      color: '#EFF6FF',
      category: 'social'
    },
    {
      id: 'health',
      name: 'Здравоохранение',
      icon: Heart,
      color: '#FEE2E2',
      category: 'social'
    },
    {
      id: 'social',
      name: 'Социальная защита, демография и поддержка семей',
      icon: Users,
      color: '#FCE7F3',
      category: 'social'
    },
    {
      id: 'culture',
      name: 'Культура, религия и креативные индустрии',
      icon: Palette,
      color: '#F5F3FF',
      category: 'social'
    },
    {
      id: 'youth',
      name: 'Молодёжная политика и спорт',
      icon: Trophy,
      color: '#FEF3C7',
      category: 'social'
    },
    {
      id: 'construction',
      name: 'Строительство, архитектура и градостроительство',
      icon: Building,
      color: '#F5F3FF',
      category: 'infrastructure'
    },
    {
      id: 'housing',
      name: 'Жилищно-коммунальное хозяйство (ЖКХ) и благоустройство',
      icon: Home,
      color: '#ECFDF5',
      category: 'infrastructure'
    },
    {
      id: 'ecology',
      name: 'Экология, климат и управление природными ресурсами',
      icon: Leaf,
      color: '#F0FDF4',
      category: 'infrastructure'
    },
    {
      id: 'regional',
      name: 'Региональная политика, местное самоуправление и акиматы',
      icon: MapPin,
      color: '#EFF6FF',
      category: 'infrastructure'
    },
    {
      id: 'labor',
      name: 'Труд, занятость и охрана труда',
      icon: Briefcase,
      color: '#FEF0E7',
      category: 'social'
    },
    {
      id: 'internal',
      name: 'Внутренние дела и общественная безопасность',
      icon: Shield,
      color: '#FEE2E2',
      category: 'security'
    },
    {
      id: 'defense',
      name: 'Оборона и безопасность государства',
      icon: ShieldCheck,
      color: '#FEE2E2',
      category: 'security'
    },
    {
      id: 'emergency',
      name: 'Чрезвычайные ситуации и гражданская защита',
      icon: Siren,
      color: '#FEF3C7',
      category: 'security'
    },
    {
      id: 'justice',
      name: 'Правосудие, нотариат и исполнение наказаний',
      icon: Scale,
      color: '#F5F3FF',
      category: 'security'
    },
    {
      id: 'anticorruption',
      name: 'Антикоррупционная политика и этика государственной службы',
      icon: AlertCircle,
      color: '#FEE2E2',
      category: 'security'
    },
    {
      id: 'procurement',
      name: 'Государственные закупки и управление госимуществом',
      icon: ShoppingCart,
      color: '#ECFDF5',
      category: 'economic'
    }
  ];

  const categories = [
    { id: 'all', name: 'Все сферы', count: 27 },
    { id: 'economic', name: 'Экономика', count: 10 },
    { id: 'social', name: 'Социальная сфера', count: 6 },
    { id: 'infrastructure', name: 'Инфраструктура', count: 6 },
    { id: 'security', name: 'Безопасность', count: 5 }
  ];

  const filteredSectors = useMemo(() => {
    let filtered = sectors;
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(sector => sector.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(sector => 
        sector.name.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [searchQuery, selectedCategory, sectors]);

  // Mock employee counts per sector
  const getEmployeeCount = (id: string): number => {
    const counts: Record<string, number> = {
      'economy': 156, 'budget': 203, 'tax': 142, 'industry': 178,
      'agro': 134, 'transport': 167, 'energy': 189, 'mining': 123,
      'investment': 98, 'digital': 201, 'foreign': 145, 'education': 245,
      'health': 289, 'social': 198, 'culture': 112, 'youth': 87,
      'construction': 156, 'housing': 134, 'ecology': 145, 'regional': 234,
      'labor': 167, 'internal': 298, 'defense': 312, 'emergency': 189,
      'justice': 178, 'anticorruption': 92, 'procurement': 187
    };
    return counts[id] || 0;
  };

  const totalEmployees = sectors.reduce((sum, sector) => sum + getEmployeeCount(sector.id), 0);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <header className="bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-8 py-6">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] rounded-[12px] flex items-center justify-center shadow-sm">
                <Shield className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <div>
                <h1 className="font-['DM_Sans'] text-[28px] font-semibold text-[#0F172A] tracking-[-0.02em]">
                  Система управления персоналом
                </h1>
                <p className="font-['DM_Sans'] text-[16px] font-normal text-[#64748B] mt-0.5">
                  Государственные службы Республики Казахстан
                </p>
              </div>
            </div>
            
            {/* User Info */}
            <div className="flex items-center gap-3 px-4 py-2 bg-[#F8FAFC] rounded-[10px] border border-[#E2E8F0]">
              <div className="w-9 h-9 bg-gradient-to-br from-[#64748B] to-[#475569] rounded-full flex items-center justify-center">
                <span className="font-['DM_Sans'] text-[16px] font-semibold text-white">АК</span>
              </div>
              <div>
                <p className="font-['DM_Sans'] text-[15px] font-medium text-[#0F172A]">Администратор</p>
                <p className="font-['DM_Sans'] text-[14px] text-[#64748B]">admin@gov.kz</p>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-5 mb-6">
            {/* Total Employees */}
            <div className="bg-[#EFF6FF] rounded-[14px] p-5 border border-[#DBEAFE]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#2563EB] rounded-[12px] flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <p className="font-['DM_Sans'] text-[15px] font-normal text-[#64748B] mb-0.5">
                    Всего сотрудников
                  </p>
                  <p className="font-['DM_Sans'] text-[28px] font-semibold text-[#0F172A] tracking-tight">
                    {totalEmployees.toLocaleString('ru-RU')}
                  </p>
                </div>
              </div>
            </div>

            {/* Total Sectors */}
            <div className="bg-[#ECFDF5] rounded-[14px] p-5 border border-[#D1FAE5]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#10B981] rounded-[12px] flex items-center justify-center shrink-0">
                  <Layers className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <p className="font-['DM_Sans'] text-[15px] font-normal text-[#64748B] mb-0.5">
                    Сфер деятельности
                  </p>
                  <p className="font-['DM_Sans'] text-[28px] font-semibold text-[#0F172A] tracking-tight">
                    27
                  </p>
                </div>
              </div>
            </div>

            {/* Last Update */}
            <div className="bg-[#F8FAFC] rounded-[14px] p-5 border border-[#E2E8F0]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#64748B] rounded-[12px] flex items-center justify-center shrink-0">
                  <Calendar className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <p className="font-['DM_Sans'] text-[15px] font-normal text-[#64748B] mb-0.5">
                    Последнее обновление
                  </p>
                  <p className="font-['DM_Sans'] text-[17px] font-semibold text-[#0F172A]">
                    17 февраля 2026 г.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" strokeWidth={2} />
            <input
              type="text"
              placeholder="Поиск по сфере деятельности..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[48px] pl-12 pr-4 bg-white border border-[#E2E8F0] rounded-[12px]
                font-['DM_Sans'] text-[17px] text-[#1E293B] placeholder:text-[#94A3B8]
                focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent
                transition-all duration-200"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-8 py-8">
        {/* Category Tabs */}
        <div className="mb-6 bg-white rounded-[14px] p-2 border border-[#E2E8F0] inline-flex gap-1">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 py-2.5 rounded-[10px] font-['DM_Sans'] text-[16px] font-medium transition-all duration-200
                ${selectedCategory === category.id 
                  ? 'bg-[#2563EB] text-white shadow-sm' 
                  : 'text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0F172A]'
                }`}
            >
              {category.name}
              <span className={`ml-2 px-2 py-0.5 rounded-full text-[14px] font-normal
                ${selectedCategory === category.id 
                  ? 'bg-white/20 text-white' 
                  : 'bg-[#F1F5F9] text-[#64748B]'
                }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
        {filteredSectors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSectors.map((sector) => {
              const Icon = sector.icon;
              const employeeCount = getEmployeeCount(sector.id);
              
              return (
                <button
                  key={sector.id}
                  onClick={() => onSectorSelect(sector.name)}
                  className="group bg-white rounded-[14px] p-6
                    border-2 border-[#E2E8F0]
                    hover:border-[#2563EB]
                    hover:shadow-[0_8px_20px_rgba(37,99,235,0.12)]
                    transition-all duration-200
                    text-left relative overflow-hidden"
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#EFF6FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-[#F8FAFC] rounded-[12px] flex items-center justify-center mb-4
                      group-hover:bg-[#EFF6FF] transition-all duration-200 group-hover:scale-105">
                      <Icon 
                        className="w-7 h-7 text-[#64748B] group-hover:text-[#2563EB]"
                        strokeWidth={2}
                      />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="font-['DM_Sans'] text-[17px] font-semibold text-[#0F172A] leading-[1.4] mb-3
                        group-hover:text-[#2563EB] transition-colors duration-200">
                        {sector.name}
                      </h3>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-[#64748B]">
                          <Users className="w-4 h-4" strokeWidth={2} />
                          <span className="font-['DM_Sans'] text-[16px] font-medium">
                            {employeeCount}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-1 text-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <span className="font-['DM_Sans'] text-[15px] font-medium">Открыть</span>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="font-['DM_Sans'] text-[17px] text-[#64748B]">
              Сферы не найдены. Попробуйте изменить запрос.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
