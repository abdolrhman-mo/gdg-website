interface HeadingProps {
  title: string;
  highlightedText: string;
  highlightColor?: string;
  className?: string;
}

export default function Heading({ title, highlightedText, highlightColor = '#ff9501', className = '' }: HeadingProps) {
  return (
    <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 ${className}`}>
      {title} <span className={`text-[${highlightColor}]`}>{highlightedText}</span>
    </h1>
  );
} 