import svgPaths from "./svg-9uo69te4ux";

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2133ea00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function HrWireframe1() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="HRWireframe">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1e293b] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Фильтр</p>
      </div>
    </div>
  );
}

function SlotClone() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[48px] items-center left-[871.2px] px-[26px] py-[2px] rounded-[14px] top-0 w-[135.805px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Icon />
      <HrWireframe1 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-[#f9fafb] h-[48px] left-0 rounded-[14px] top-0 w-[855.195px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pl-[48px] pr-[16px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[16px] tracking-[-0.3125px]">Поиск по имени, должности или ID</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M17.5 17.5L13.8833 13.8833" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pcddfd00} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[855.195px]" data-name="Container">
      <TextInput />
      <Icon1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <SlotClone />
      <Container2 />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white h-[89px] relative shrink-0 w-[1071px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[20px] px-[32px] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#64748b] text-[12px] top-px">Выбранная сфера</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1e293b] text-[14px] top-[0.5px] tracking-[-0.1504px]">Бюджет и государственные финансы</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-[67.1px] top-[1.5px] w-[15.016px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1e293b] text-[14px] tracking-[-0.1504px]">10</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[82.117px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#64748b] text-[14px] top-[0.5px] tracking-[-0.1504px]">Найдено:</p>
        <Text />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[103.44px] size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SlotClone1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[119.438px]" data-name="SlotClone">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#64748b] text-[14px] top-[0.5px] tracking-[-0.1504px]">По умолчанию</p>
        <Icon2 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[57px] items-center justify-between pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
      <Container10 />
      <SlotClone1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[134px] relative shrink-0 w-[383px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pb-px pt-[24px] px-[24px] relative size-full">
        <Container6 />
        <Container9 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px] w-[19px] whitespace-pre-wrap">АА</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-gradient-to-b from-[#2563eb] relative rounded-[16777200px] shrink-0 size-[40px] to-[#1e40af]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1e293b] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[222px] whitespace-pre-wrap">Абдуллаева Айгерим Ержановна</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[86.859px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#64748b] text-[12px] top-px">EMP-2024-001</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#2563eb] h-[18px] relative rounded-[8px] shrink-0 w-[34.164px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7px] py-px relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-white">C-1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
      <Badge />
    </div>
  );
}

function Container15() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Paragraph />
        <Container16 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.83%_8.27%_37.5%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8422 7.00042">
            <path d={svgPaths.p2c5d5d40} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_8.33%_33.33%_91.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.58px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.16667 4.66667">
            <path d="M0.583333 0.583333V4.08333" id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[52.08%]" data-name="Vector">
        <div className="absolute inset-[-15.38%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 4.95833">
            <path d={svgPaths.p36f8280} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SlotClone2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[24px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.50013 5.83346">
            <path d={svgPaths.pefda580} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SlotClone3() {
  return (
    <div className="bg-white flex-[1_0_0] h-[24px] min-h-px min-w-px relative rounded-[8px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[24px] relative shrink-0 w-[52px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <SlotClone2 />
        <SlotClone3 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[64px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <Container14 />
          <Container15 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18.711px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px] w-[19px] whitespace-pre-wrap">НЕ</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-gradient-to-b from-[#2563eb] relative rounded-[16777200px] shrink-0 size-[40px] to-[#1e40af]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.008px] relative size-full">
        <Text2 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1e293b] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[211px] whitespace-pre-wrap">Нурсултанов Ерлан Маратович</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[88.531px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#64748b] text-[12px] top-px">EMP-2024-002</p>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#2563eb] h-[18px] relative rounded-[8px] shrink-0 w-[34.164px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7px] py-px relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-white">C-1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph3 />
      <Badge1 />
    </div>
  );
}

function Container20() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Paragraph2 />
        <Container21 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.83%_8.27%_37.5%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8422 7.00042">
            <path d={svgPaths.p2c5d5d40} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_8.33%_33.33%_91.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.58px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.16667 4.66667">
            <path d="M0.583333 0.583333V4.08333" id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[52.08%]" data-name="Vector">
        <div className="absolute inset-[-15.38%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 4.95833">
            <path d={svgPaths.p36f8280} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SlotClone4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[24px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.50013 5.83346">
            <path d={svgPaths.pefda580} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SlotClone5() {
  return (
    <div className="bg-white flex-[1_0_0] h-[24px] min-h-px min-w-px relative rounded-[8px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[24px] relative shrink-0 w-[52px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <SlotClone4 />
        <SlotClone5 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[64px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <Container19 />
          <Container20 />
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[23.555px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px] w-[24px] whitespace-pre-wrap">ЖА</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-gradient-to-b from-[#2563eb] relative rounded-[16777200px] shrink-0 size-[40px] to-[#1e40af]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.008px] relative size-full">
        <Text3 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1e293b] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[205px] whitespace-pre-wrap">Жумабаева Асель Казбековна</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[88.813px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#64748b] text-[12px] top-px">EMP-2024-003</p>
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#10b981] h-[18px] relative rounded-[8px] shrink-0 w-[35.805px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7px] py-px relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-white">C-2</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph5 />
      <Badge2 />
    </div>
  );
}

function Container25() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Paragraph4 />
        <Container26 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.83%_8.27%_37.5%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8422 7.00042">
            <path d={svgPaths.p2c5d5d40} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_8.33%_33.33%_91.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.58px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.16667 4.66667">
            <path d="M0.583333 0.583333V4.08333" id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[52.08%]" data-name="Vector">
        <div className="absolute inset-[-15.38%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 4.95833">
            <path d={svgPaths.p36f8280} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SlotClone6() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[24px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.50013 5.83346">
            <path d={svgPaths.pefda580} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SlotClone7() {
  return (
    <div className="bg-white flex-[1_0_0] h-[24px] min-h-px min-w-px relative rounded-[8px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[24px] relative shrink-0 w-[52px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <SlotClone6 />
        <SlotClone7 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[64px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <Container24 />
          <Container25 />
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.117px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px] w-[21px] whitespace-pre-wrap">СД</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-gradient-to-b from-[#2563eb] relative rounded-[16777200px] shrink-0 size-[40px] to-[#1e40af]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.008px] relative size-full">
        <Text4 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1e293b] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[243px] whitespace-pre-wrap">Сейдахметов Данияр Бекболатович</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[89.016px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#64748b] text-[12px] top-px">EMP-2024-004</p>
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-[#2563eb] h-[18px] relative rounded-[8px] shrink-0 w-[34.164px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7px] py-px relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-white">C-1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph7 />
      <Badge3 />
    </div>
  );
}

function Container30() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Paragraph6 />
        <Container31 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.83%_8.27%_37.5%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8422 7.00042">
            <path d={svgPaths.p2c5d5d40} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_8.33%_33.33%_91.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.58px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.16667 4.66667">
            <path d="M0.583333 0.583333V4.08333" id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[52.08%]" data-name="Vector">
        <div className="absolute inset-[-15.38%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 4.95833">
            <path d={svgPaths.p36f8280} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SlotClone8() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[24px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.50013 5.83346">
            <path d={svgPaths.pefda580} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SlotClone9() {
  return (
    <div className="bg-white flex-[1_0_0] h-[24px] min-h-px min-w-px relative rounded-[8px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[24px] relative shrink-0 w-[52px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <SlotClone8 />
        <SlotClone9 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[64px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <Container29 />
          <Container30 />
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[22.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px] w-[23px] whitespace-pre-wrap">ТЖ</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-gradient-to-b from-[#2563eb] relative rounded-[16777200px] shrink-0 size-[40px] to-[#1e40af]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text5 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1e293b] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[213px] whitespace-pre-wrap">Токтарова Жанна Серикбаевна</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[16px] relative shrink-0 w-[88.711px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#64748b] text-[12px] top-px">EMP-2024-005</p>
      </div>
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-[#10b981] h-[18px] relative rounded-[8px] shrink-0 w-[35.805px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7px] py-px relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-white">C-2</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph9 />
      <Badge4 />
    </div>
  );
}

function Container35() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Paragraph8 />
        <Container36 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.83%_8.27%_37.5%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8422 7.00042">
            <path d={svgPaths.p2c5d5d40} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_8.33%_33.33%_91.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.58px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.16667 4.66667">
            <path d="M0.583333 0.583333V4.08333" id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[52.08%]" data-name="Vector">
        <div className="absolute inset-[-15.38%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 4.95833">
            <path d={svgPaths.p36f8280} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SlotClone10() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[24px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.50013 5.83346">
            <path d={svgPaths.pefda580} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SlotClone11() {
  return (
    <div className="bg-white flex-[1_0_0] h-[24px] min-h-px min-w-px relative rounded-[8px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[24px] relative shrink-0 w-[52px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <SlotClone10 />
        <SlotClone11 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[64px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <Container34 />
          <Container35 />
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px] w-[19px] whitespace-pre-wrap">БА</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-gradient-to-b from-[#2563eb] relative rounded-[16777200px] shrink-0 size-[40px] to-[#1e40af]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text6 />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1e293b] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[199px] whitespace-pre-wrap">Байжанов Азамат Ермекович</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[16px] relative shrink-0 w-[88.93px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#64748b] text-[12px] top-px">EMP-2024-006</p>
      </div>
    </div>
  );
}

function Badge5() {
  return (
    <div className="bg-[#10b981] h-[18px] relative rounded-[8px] shrink-0 w-[35.805px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7px] py-px relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-white">C-2</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph11 />
      <Badge5 />
    </div>
  );
}

function Container40() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Paragraph10 />
        <Container41 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.83%_8.27%_37.5%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8422 7.00042">
            <path d={svgPaths.p2c5d5d40} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_8.33%_33.33%_91.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.58px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.16667 4.66667">
            <path d="M0.583333 0.583333V4.08333" id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[52.08%]" data-name="Vector">
        <div className="absolute inset-[-15.38%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 4.95833">
            <path d={svgPaths.p36f8280} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SlotClone12() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[24px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.50013 5.83346">
            <path d={svgPaths.pefda580} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SlotClone13() {
  return (
    <div className="bg-white flex-[1_0_0] h-[24px] min-h-px min-w-px relative rounded-[8px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[24px] relative shrink-0 w-[52px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <SlotClone12 />
        <SlotClone13 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[64px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <Container39 />
          <Container40 />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px] w-[21px] whitespace-pre-wrap">ИД</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-gradient-to-b from-[#2563eb] relative rounded-[16777200px] shrink-0 size-[40px] to-[#1e40af]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text7 />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[20px] left-0 overflow-clip top-0 w-[186.211px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1e293b] text-[14px] top-[0.5px] tracking-[-0.1504px]">Искакова Дина Рустемовна</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[16px] relative shrink-0 w-[87.891px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#64748b] text-[12px] top-px">EMP-2024-007</p>
      </div>
    </div>
  );
}

function Badge6() {
  return (
    <div className="bg-[#2563eb] h-[18px] relative rounded-[8px] shrink-0 w-[34.164px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7px] py-px relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-white">C-1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[18px] items-center left-0 top-[22px] w-[195px]" data-name="Container">
      <Paragraph13 />
      <Badge6 />
    </div>
  );
}

function Container45() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph12 />
        <Container46 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.83%_8.27%_37.5%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8422 7.00042">
            <path d={svgPaths.p2c5d5d40} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_8.33%_33.33%_91.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.58px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.16667 4.66667">
            <path d="M0.583333 0.583333V4.08333" id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[52.08%]" data-name="Vector">
        <div className="absolute inset-[-15.38%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 4.95833">
            <path d={svgPaths.p36f8280} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SlotClone14() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[24px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.50013 5.83346">
            <path d={svgPaths.pefda580} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SlotClone15() {
  return (
    <div className="bg-white flex-[1_0_0] h-[24px] min-h-px min-w-px relative rounded-[8px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[24px] relative shrink-0 w-[52px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <SlotClone14 />
        <SlotClone15 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[64px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <Container44 />
          <Container45 />
          <Container47 />
        </div>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[19.805px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px] w-[20px] whitespace-pre-wrap">АН</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="bg-gradient-to-b from-[#2563eb] relative rounded-[16777200px] shrink-0 size-[40px] to-[#1e40af]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.008px] relative size-full">
        <Text8 />
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1e293b] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[224px] whitespace-pre-wrap">Алимбеков Нурлан Асылханович</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[16px] relative shrink-0 w-[88.953px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#64748b] text-[12px] top-px">EMP-2024-008</p>
      </div>
    </div>
  );
}

function Badge7() {
  return (
    <div className="bg-[#f59e0b] h-[18px] relative rounded-[8px] shrink-0 w-[36.102px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7px] py-px relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-white">C-3</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph15 />
      <Badge7 />
    </div>
  );
}

function Container50() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Paragraph14 />
        <Container51 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.83%_8.27%_37.5%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8422 7.00042">
            <path d={svgPaths.p2c5d5d40} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_8.33%_33.33%_91.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.58px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.16667 4.66667">
            <path d="M0.583333 0.583333V4.08333" id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[52.08%]" data-name="Vector">
        <div className="absolute inset-[-15.38%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 4.95833">
            <path d={svgPaths.p36f8280} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SlotClone16() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[24px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Icon17 />
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.50013 5.83346">
            <path d={svgPaths.pefda580} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SlotClone17() {
  return (
    <div className="bg-white flex-[1_0_0] h-[24px] min-h-px min-w-px relative rounded-[8px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Icon18 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[24px] relative shrink-0 w-[52px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <SlotClone16 />
        <SlotClone17 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[64px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <Container49 />
          <Container50 />
          <Container52 />
        </div>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16.992px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px] w-[17px] whitespace-pre-wrap">КГ</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="bg-gradient-to-b from-[#2563eb] relative rounded-[16777200px] shrink-0 size-[40px] to-[#1e40af]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.008px] relative size-full">
        <Text9 />
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1e293b] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[208px] whitespace-pre-wrap">Кенжебаева Гульнара Абаевна</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[16px] relative shrink-0 w-[88.93px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#64748b] text-[12px] top-px">EMP-2024-009</p>
      </div>
    </div>
  );
}

function Badge8() {
  return (
    <div className="bg-[#2563eb] h-[18px] relative rounded-[8px] shrink-0 w-[34.164px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7px] py-px relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-white">C-1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph17 />
      <Badge8 />
    </div>
  );
}

function Container55() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Paragraph16 />
        <Container56 />
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.83%_8.27%_37.5%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8422 7.00042">
            <path d={svgPaths.p2c5d5d40} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_8.33%_33.33%_91.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.58px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.16667 4.66667">
            <path d="M0.583333 0.583333V4.08333" id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[52.08%]" data-name="Vector">
        <div className="absolute inset-[-15.38%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 4.95833">
            <path d={svgPaths.p36f8280} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SlotClone18() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[24px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Icon19 />
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.50013 5.83346">
            <path d={svgPaths.pefda580} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SlotClone19() {
  return (
    <div className="bg-white flex-[1_0_0] h-[24px] min-h-px min-w-px relative rounded-[8px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Icon20 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[24px] relative shrink-0 w-[52px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <SlotClone18 />
        <SlotClone19 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[64px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <Container54 />
          <Container55 />
          <Container57 />
        </div>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18.336px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px] w-[19px] whitespace-pre-wrap">СЕ</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="bg-gradient-to-b from-[#2563eb] relative rounded-[16777200px] shrink-0 size-[40px] to-[#1e40af]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.008px] relative size-full">
        <Text10 />
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1e293b] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[202px] whitespace-pre-wrap">Сатпаев Ерболат Нурланович</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[16px] relative shrink-0 w-[86.859px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#64748b] text-[12px] top-px">EMP-2024-010</p>
      </div>
    </div>
  );
}

function Badge9() {
  return (
    <div className="bg-[#10b981] h-[18px] relative rounded-[8px] shrink-0 w-[35.805px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7px] py-px relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-white">C-2</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph19 />
      <Badge9 />
    </div>
  );
}

function Container60() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Paragraph18 />
        <Container61 />
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.83%_8.27%_37.5%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8422 7.00042">
            <path d={svgPaths.p2c5d5d40} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_8.33%_33.33%_91.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.58px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.16667 4.66667">
            <path d="M0.583333 0.583333V4.08333" id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[52.08%]" data-name="Vector">
        <div className="absolute inset-[-15.38%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 4.95833">
            <path d={svgPaths.p36f8280} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SlotClone20() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[24px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Icon21 />
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.50013 5.83346">
            <path d={svgPaths.pefda580} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SlotClone21() {
  return (
    <div className="bg-white flex-[1_0_0] h-[24px] min-h-px min-w-px relative rounded-[8px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Icon22 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[24px] relative shrink-0 w-[52px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <SlotClone20 />
        <SlotClone21 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[64px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <Container59 />
          <Container60 />
          <Container62 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[712px] items-start relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container18 />
      <Container23 />
      <Container28 />
      <Container33 />
      <Container38 />
      <Container43 />
      <Container48 />
      <Container53 />
      <Container58 />
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[383px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pt-[24px] px-[24px] relative rounded-[inherit] size-full">
        <Container12 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white h-[641px] relative shrink-0 w-[384px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-px relative size-full">
        <Container5 />
        <Container11 />
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.p32981cc0} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex from-[#e2e8f0] items-center justify-center left-[176px] rounded-[16777200px] size-[96px] to-[#cbd5e1] top-0" data-name="Container">
      <Icon23 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[24px] left-0 top-[120px] w-[448px]" data-name="Heading 3">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[224.16px] not-italic text-[#1e293b] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px]">Выберите сотру��ника</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="absolute h-[40px] left-0 top-[152px] w-[448px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[224.1px] not-italic text-[#64748b] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] w-[412px] whitespace-pre-wrap">Нажмите на имя сотрудника из списка слева для просмотра подробной информации</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[192px] relative shrink-0 w-[448px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container65 />
        <Heading />
        <Paragraph20 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="bg-[#f9fafb] flex-[1_0_0] h-[641px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Container64 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#f9fafb] flex-[1_0_0] min-h-px min-w-px relative w-[1071px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Container4 />
        <Container63 />
      </div>
    </div>
  );
}

function HrWireframe() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[730px] items-start left-0 top-0 w-[1071px]" data-name="HRWireframe">
      <Container />
      <Container3 />
    </div>
  );
}

function Text11() {
  return <div className="absolute left-0 opacity-0 size-0 top-0" data-name="Text" />;
}

function Text12() {
  return <div className="absolute left-0 opacity-0 size-0 top-[730px]" data-name="Text" />;
}

function PrimitiveDiv() {
  return <div className="absolute bg-[rgba(0,0,0,0.5)] h-[730px] left-0 top-0 w-[1071px]" data-name="Primitive.div" />;
}

function PrimitiveH() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[351px]" data-name="Primitive.h2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#1e293b] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Выбор сферы</p>
      </div>
    </div>
  );
}

function PrimitiveP() {
  return (
    <div className="h-[20px] relative shrink-0 w-[351px]" data-name="Primitive.p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#64748b] text-[14px] top-[0.5px] tracking-[-0.1504px]">Выберите сферу для фильтрации сотрудников</p>
      </div>
    </div>
  );
}

function SheetHeader() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[82px] items-start left-0 pl-[16px] py-[16px] top-0 w-[383px]" data-name="SheetHeader">
      <PrimitiveH />
      <PrimitiveP />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f9fafb] h-[72px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#1e293b] text-[16px] top-[11.5px] tracking-[-0.3125px] w-[334px] whitespace-pre-wrap">Экономическое развитие и стратегическое планирование</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#2563eb] h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[16px] text-white top-[11.5px] tracking-[-0.3125px]">Бюджет и государственные финансы</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f9fafb] h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#1e293b] text-[16px] top-[11.5px] tracking-[-0.3125px]">Налогообложение</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#f9fafb] h-[72px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#1e293b] text-[16px] top-[11.5px] tracking-[-0.3125px] w-[277px] whitespace-pre-wrap">Промышленность и индустриальная политика</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#f9fafb] h-[72px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#1e293b] text-[16px] top-[11.5px] tracking-[-0.3125px] w-[315px] whitespace-pre-wrap">Аграрная политика и продовольственная безопасность</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#f9fafb] h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#1e293b] text-[16px] top-[11.5px] tracking-[-0.3125px]">Транспорт и логистика</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#f9fafb] h-[72px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#1e293b] text-[16px] top-[11.5px] tracking-[-0.3125px] w-[308px] whitespace-pre-wrap">Энергетика и топливно-энергетический комплекс</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#f9fafb] h-[72px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#1e293b] text-[16px] top-[11.5px] tracking-[-0.3125px] w-[340px] whitespace-pre-wrap">Недропользование, геология и добывающая отрасль</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#f9fafb] h-[72px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#1e293b] text-[16px] top-[11.5px] tracking-[-0.3125px] w-[301px] whitespace-pre-wrap">Инвестиции и государственно-частное партнёрство (ГЧП)</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#f9fafb] h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#1e293b] text-[16px] top-[11.5px] tracking-[-0.3125px]">Цифровизация, связь и кибербезопасность</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#f9fafb] h-[72px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#1e293b] text-[16px] top-[11.5px] tracking-[-0.3125px] w-[284px] whitespace-pre-wrap">Внешняя политика и международное сотрудничество</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#f9fafb] h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#1e293b] text-[16px] top-[11.5px] tracking-[-0.3125px]">Образование и наука</p>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#f9fafb] h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#1e293b] text-[16px] top-[11.5px] tracking-[-0.3125px]">Здравоохранение</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#f9fafb] h-[72px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#1e293b] text-[16px] top-[11.5px] tracking-[-0.3125px] w-[268px] whitespace-pre-wrap">Социальная защита, демография и поддержка семей</p>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#f9fafb] h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#1e293b] text-[16px] top-[11.5px] tracking-[-0.3125px]">Труд, занятость и охрана труда</p>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#f9fafb] h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#1e293b] text-[16px] top-[11.5px] tracking-[-0.3125px]">Культура, религия и креативные индустрии</p>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[#f9fafb] h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#1e293b] text-[16px] top-[11.5px] tracking-[-0.3125px]">Молодёжная политика и спорт</p>
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-[#f9fafb] h-[72px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#1e293b] text-[16px] top-[11.5px] tracking-[-0.3125px] w-[345px] whitespace-pre-wrap">Экология, климат и управление природными ресурсами</p>
    </div>
  );
}

function Button18() {
  return (
    <div className="bg-[#f9fafb] h-[72px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#1e293b] text-[16px] top-[11.5px] tracking-[-0.3125px] w-[231px] whitespace-pre-wrap">Строительство, архитектура и градостроительство</p>
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-[#f9fafb] h-[72px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#1e293b] text-[16px] top-[11.5px] tracking-[-0.3125px] w-[342px] whitespace-pre-wrap">Жилищно-коммунальное хозяйство (ЖКХ) и благоустройство</p>
    </div>
  );
}

function Button20() {
  return (
    <div className="bg-[#f9fafb] h-[72px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#1e293b] text-[16px] top-[11.5px] tracking-[-0.3125px] w-[254px] whitespace-pre-wrap">Региональная политика, местное самоуправление и акиматы</p>
    </div>
  );
}

function Button21() {
  return (
    <div className="bg-[#f9fafb] h-[72px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#1e293b] text-[16px] top-[11.5px] tracking-[-0.3125px] w-[259px] whitespace-pre-wrap">Внутренние дела и общественная безопасность</p>
    </div>
  );
}

function Button22() {
  return (
    <div className="bg-[#f9fafb] h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#1e293b] text-[16px] top-[11.5px] tracking-[-0.3125px]">Оборона и безопасность государства</p>
    </div>
  );
}

function Button23() {
  return (
    <div className="bg-[#f9fafb] h-[72px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#1e293b] text-[16px] top-[11.5px] tracking-[-0.3125px] w-[330px] whitespace-pre-wrap">Чрезвычайные ситуации и гражданская защита</p>
    </div>
  );
}

function Button24() {
  return (
    <div className="bg-[#f9fafb] h-[72px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#1e293b] text-[16px] top-[11.5px] tracking-[-0.3125px] w-[280px] whitespace-pre-wrap">Правосудие, нотариат и исполнение наказаний</p>
    </div>
  );
}

function Button25() {
  return (
    <div className="bg-[#f9fafb] h-[72px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#1e293b] text-[16px] top-[11.5px] tracking-[-0.3125px] w-[290px] whitespace-pre-wrap">Антикоррупционная политика и этика государственной службы</p>
    </div>
  );
}

function Button26() {
  return (
    <div className="bg-[#f9fafb] h-[72px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#1e293b] text-[16px] top-[11.5px] tracking-[-0.3125px] w-[306px] whitespace-pre-wrap">Государственные закупки и управление госимуществом</p>
    </div>
  );
}

function HrWireframe2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[608px] items-start left-0 overflow-x-clip overflow-y-auto top-[122px] w-[383px]" data-name="HRWireframe">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
      <Button11 />
      <Button12 />
      <Button13 />
      <Button14 />
      <Button15 />
      <Button16 />
      <Button17 />
      <Button18 />
      <Button19 />
      <Button20 />
      <Button21 />
      <Button22 />
      <Button23 />
      <Button24 />
      <Button25 />
      <Button26 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M12 4L4 12" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 4L12 12" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SheetContent() {
  return (
    <div className="absolute left-[-1px] overflow-clip size-px top-[15px]" data-name="SheetContent">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Close</p>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="absolute left-[351px] opacity-70 rounded-[2px] size-[16px] top-[16px]" data-name="Primitive.button">
      <Icon24 />
      <SheetContent />
    </div>
  );
}

function PrimitiveDiv1() {
  return (
    <div className="absolute bg-white border-[rgba(0,0,0,0.1)] border-l border-solid h-[730px] left-[687px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-0 w-[384px]" data-name="Primitive.div">
      <SheetHeader />
      <HrWireframe2 />
      <PrimitiveButton />
    </div>
  );
}

export default function Filter() {
  return (
    <div className="bg-white relative size-full" data-name="filter">
      <HrWireframe />
      <Text11 />
      <Text12 />
      <PrimitiveDiv />
      <PrimitiveDiv1 />
    </div>
  );
}