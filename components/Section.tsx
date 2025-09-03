import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'primary' | 'gradient';
  padding?: 'small' | 'medium' | 'large';
  id?: string;
}

const Section = ({
  children,
  className = '',
  background = 'white',
  padding = 'medium',
  id,
}: SectionProps) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-600 text-white',
    gradient: 'bg-gradient-to-br from-primary-600 to-secondary-700 text-white',
  };

  const paddingClasses = {
    small: 'py-8 px-4 sm:px-6 lg:px-8',
    medium: 'py-16 px-4 sm:px-6 lg:px-8',
    large: 'py-24 px-4 sm:px-6 lg:px-8',
  };

  return (
    <section
      id={id}
      className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
};

export default Section;
