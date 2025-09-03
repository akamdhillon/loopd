import { ReactNode } from 'react';
import Link from 'next/link';

interface CardProps {
  children?: ReactNode;
  title?: string;
  description?: string;
  icon?: ReactNode;
  href?: string;
  className?: string;
  hover?: boolean;
  padding?: 'small' | 'medium' | 'large';
}

const Card = ({
  children,
  title,
  description,
  icon,
  href,
  className = '',
  hover = true,
  padding = 'medium',
}: CardProps) => {
  const paddingClasses = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8',
  };

  const cardClasses = `
    bg-white rounded-xl shadow-md border border-gray-100
    ${hover ? 'hover:shadow-lg hover:border-gray-200 transition-all duration-200' : ''}
    ${paddingClasses[padding]}
    ${className}
  `;

  const CardContent = () => (
    <>
      {/* Icon */}
      {icon && (
        <div className="mb-4 text-primary-600">
          {icon}
        </div>
      )}
      
      {/* Title */}
      {title && (
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
          {title}
        </h3>
      )}
      
      {/* Description */}
      {description && (
        <p className="text-large text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>
      )}
      
      {/* Children Content */}
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`block ${cardClasses} hover:scale-105`}>
        <CardContent />
      </Link>
    );
  }

  return (
    <div className={cardClasses}>
      <CardContent />
    </div>
  );
};

export default Card;
