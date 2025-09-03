
import CTAButton from './CTAButton';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  centered?: boolean;
}

const Hero = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  centered = true,
}: HeroProps) => {
  return (
    <section 
      className={`relative bg-gradient-to-br from-primary-600 to-secondary-700 text-white section-padding ${
        backgroundImage ? 'bg-cover bg-center' : ''
      }`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {/* Overlay for background images */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      )}
      
      <div className="container-custom relative z-10">
        <div className={`${centered ? 'text-center' : ''} max-w-4xl ${centered ? 'mx-auto' : ''}`}>
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 text-blue-100">
            {subtitle}
          </p>
          
          {/* Description */}
          {description && (
            <p className="text-lg md:text-xl text-blue-50 mb-12 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
          
          {/* CTA Buttons */}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryCTA && (
                <CTAButton
                  href={primaryCTA.href}
                  variant="primary"
                  size="large"
                >
                  {primaryCTA.text}
                </CTAButton>
              )}
              {secondaryCTA && (
                <CTAButton
                  href={secondaryCTA.href}
                  variant="secondary"
                  size="large"
                >
                  {secondaryCTA.text}
                </CTAButton>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
