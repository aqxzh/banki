import { X, GraduationCap, Clock, Building2, User, Calendar, Edit, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Employee } from '../types/employee';
import { motion } from 'motion/react';

interface EmployeeDetailsProps {
  employee: Employee;
  onClose: () => void;
}

export function EmployeeDetails({ employee, onClose }: EmployeeDetailsProps) {
  const categoryColors = {
    'C-1': 'bg-[#2563EB] text-white',
    'C-2': 'bg-[#10B981] text-white',
    'C-3': 'bg-[#F59E0B] text-white',
  };

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      className="fixed top-0 right-0 h-full w-[480px] bg-[#F9FAFB] shadow-2xl z-50 overflow-y-auto"
    >
      <div className="sticky top-0 bg-white border-b border-[#E2E8F0] px-6 py-4 flex items-center justify-between">
        <h2 className="text-[#1E293B]">Резюме сотрудника</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-[#F9FAFB] rounded-lg transition-colors"
        >
          <X className="w-5 h-5 text-[#64748B]" />
        </button>
      </div>

      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0]">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-[#1E293B] mb-2">{employee.name}</h3>
              <p className="text-[#64748B] mb-3">{employee.position}</p>
            </div>
            <Badge className={`${categoryColors[employee.category]} rounded-lg px-3 py-1`}>
              {employee.category}
            </Badge>
          </div>
          <div className="flex items-center gap-2 text-[#64748B] text-sm">
            <Building2 className="w-4 h-4" />
            <span>{employee.department}</span>
          </div>
        </div>

        {/* Education */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0]">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#DCFCE7] rounded-lg">
              <GraduationCap className="w-5 h-5 text-[#10B981]" />
            </div>
            <h4 className="text-[#1E293B]">Образование</h4>
          </div>
          <div className="space-y-2">
            <p className="text-[#1E293B]">{employee.education.level}</p>
            <p className="text-[#64748B] text-sm">{employee.education.institution}</p>
          </div>
        </div>

        {/* Experience */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0]">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#FEF3C7] rounded-lg">
              <Clock className="w-5 h-5 text-[#F59E0B]" />
            </div>
            <h4 className="text-[#1E293B]">Опыт работы</h4>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[#1E293B]">{employee.experience.years} лет</span>
            </div>
            <p className="text-[#64748B] text-sm leading-relaxed">
              {employee.experience.description}
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0]">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#DBEAFE] rounded-lg">
              <User className="w-5 h-5 text-[#2563EB]" />
            </div>
            <h4 className="text-[#1E293B]">Личная информация</h4>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[#64748B] text-sm">Возраст</span>
              <span className="text-[#1E293B]">{employee.age} лет</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#64748B] text-sm">ID сотрудника</span>
              <span className="text-[#1E293B]">{employee.id}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#64748B] text-sm">Категория</span>
              <Badge className={`${categoryColors[employee.category]} rounded-lg`}>
                {employee.category}
              </Badge>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Button
            className="w-full bg-[#2563EB] hover:bg-[#1E40AF] text-white rounded-xl py-6"
          >
            <Edit className="w-4 h-4 mr-2" />
            Редактировать
          </Button>
          <Button
            variant="outline"
            className="w-full border-[#EF4444] text-[#EF4444] hover:bg-[#FEF2F2] rounded-xl py-6"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Удалить
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
