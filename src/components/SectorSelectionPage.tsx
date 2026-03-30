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
  LucideIcon
} from 'lucide-react';

interface Sector {
  id: string;
  name: string;
  icon: LucideIcon;
}

interface SectorSelectionPageProps {
  onSectorSelect: (sectorName: string) => void;
}

export function SectorSelectionPage({ onSectorSelect }: SectorSelectionPageProps) {
  const sectors: Sector[] = [
    {
      id: 'economy',
      name: 'Экономическое развитие и стратегическое планирование',
      icon: TrendingUp
    },
    {
      id: 'budget',
      name: 'Бюджет и государственные финансы',
      icon: DollarSign
    },
    {
      id: 'tax',
      name: 'Налогообложение',
      icon: Calculator
    },
    {
      id: 'industry',
      name: 'Промышленность и индустриальная политика',
      icon: Factory
    },
    {
      id: 'agro',
      name: 'Аграрная политика и продовольственная безопасность',
      icon: Wheat
    },
    {
      id: 'transport',
      name: 'Транспорт и логистика',
      icon: Truck
    },
    {
      id: 'energy',
      name: 'Энергетика и топливно-энергетический комплекс',
      icon: Zap
    },
    {
      id: 'mining',
      name: 'Недропользование, геология и добывающая отрасль',
      icon: Mountain
    },
    {
      id: 'investment',
      name: 'Инвестиции и государственно-частное партнёрство (ГЧП)',
      icon: Handshake
    },
    {
      id: 'digital',
      name: 'Цифровизация, связь и кибербезопасность',
      icon: Wifi
    },
    {
      id: 'foreign',
      name: 'Внешняя политика и международное сотрудничество',
      icon: Globe
    },
    {
      id: 'education',
      name: 'Образование и наука',
      icon: GraduationCap
    },
    {
      id: 'health',
      name: 'Здравоохранение',
      icon: Heart
    },
    {
      id: 'social',
      name: 'Социальная защита, демография и поддержка семей',
      icon: Users
    },
    {
      id: 'culture',
      name: 'Культура, религия и креативные индустрии',
      icon: Palette
    },
    {
      id: 'youth',
      name: 'Молодёжная политика и спорт',
      icon: Trophy
    },
    {
      id: 'construction',
      name: 'Строительство, архитектура и градостроительство',
      icon: Building
    },
    {
      id: 'housing',
      name: 'Жилищно-коммунальное хозяйство (ЖКХ) и благоустройство',
      icon: Home
    },
    {
      id: 'ecology',
      name: 'Экология, климат и управление природными ресурсами',
      icon: Leaf
    },
    {
      id: 'regional',
      name: 'Региональная политика, местное самоуправление и акиматы',
      icon: MapPin
    },
    {
      id: 'labor',
      name: 'Труд, занятость и охрана труда',
      icon: Briefcase
    },
    {
      id: 'internal',
      name: 'Внутренние дела и общественная безопасность',
      icon: Shield
    },
    {
      id: 'defense',
      name: 'Оборона и безопасность государства',
      icon: ShieldCheck
    },
    {
      id: 'emergency',
      name: 'Чрезвычайные ситуации и гражданская защита',
      icon: Siren
    },
    {
      id: 'justice',
      name: 'Правосудие, нотариат и исполнение наказаний',
      icon: Scale
    },
    {
      id: 'anticorruption',
      name: 'Антикоррупционная политика и этика государственной службы',
      icon: AlertCircle
    },
    {
      id: 'procurement',
      name: 'Государственные закупки и управление госимуществом',
      icon: ShoppingCart
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Header */}
      <div className="bg-white border-b border-[#e2e8f0] px-8 pt-6 pb-4">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-base font-normal text-[#1e293b] mb-2 tracking-[-0.3125px]">
            Система управления персоналом
          </h1>
          <p className="text-sm font-normal text-[#64748b] tracking-[-0.1504px]">
            Выберите сферу деятельности для просмотра сотрудников
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            
            return (
              <button
                key={sector.id}
                onClick={() => onSectorSelect(sector.name)}
                className="group bg-white rounded-[14px] border border-[#e2e8f0] 
                  px-[21px] py-4 flex items-center gap-4
                  transition-all duration-200
                  hover:shadow-md hover:border-[#cbd5e1]
                  active:scale-[0.98]
                  text-left"
              >
                {/* Icon Container */}
                <div className="shrink-0 w-12 h-12 bg-[#f1f5f9] rounded-full 
                  flex items-center justify-center
                  group-hover:bg-[#e2e8f0] transition-colors duration-200">
                  <Icon 
                    className="w-6 h-6 text-[#64748b] group-hover:text-[#475569] transition-colors duration-200"
                    strokeWidth={2}
                  />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-normal text-[#1e293b] leading-[17.5px] tracking-[-0.1504px]
                    group-hover:text-[#0f172a] transition-colors duration-200">
                    {sector.name}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
