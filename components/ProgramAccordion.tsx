import { useState } from 'react';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
  week?: number;
}

interface ProgramAccordionProps {
  title: string;
  items: AccordionItem[];
  className?: string;
}

const ProgramAccordion = ({ title, items, className = '' }: ProgramAccordionProps) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className={`w-full ${className}`}>
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
        {title}
      </h3>
      
      <div className="space-y-3">
        {items.map((item) => {
          const isOpen = openItems.includes(item.id);
          
          return (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset rounded-lg transition-colors duration-200"
                aria-expanded={isOpen}
              >
                <div className="flex items-center space-x-3">
                  {item.week && (
                    <span className="flex items-center justify-center w-8 h-8 bg-primary-100 text-primary-700 rounded-full font-semibold text-sm">
                      {item.week}
                    </span>
                  )}
                  <span className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </span>
                </div>
                
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {isOpen && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-large text-gray-600 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgramAccordion;
