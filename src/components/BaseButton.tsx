type ButtonProps = {
  value: string;
  theme?: 'primary' | 'secondary';
  styleName?: string;
}

export default function BaseButton({ value, theme = 'primary', styleName }: ButtonProps) {
  const themeClasses = {
    primary: 'px-6 py-3 rounded-full',
    secondary: 'px-10 py-4 rounded-lg font-bold'
  }[theme];

  return (
    <button className={ `inline-block bg-cyan hover:bg-cyan-light text-white ${themeClasses} ${styleName}`}>
      { value }
    </button>
  )
}