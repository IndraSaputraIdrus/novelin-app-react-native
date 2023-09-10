export const convertFontSize = (size: number) => {
  const sizeClasses = {
    14: "text-sm",
    16: "text-base",
    18: "text-lg",
    20: "text-xl",
    24: "text-2xl",
    30: "text-3xl",
    36: "text-4xl",
    48: "text-5xl",
  };

  const sizeClass = sizeClasses[size] || "text-base";
  return sizeClass;
};
