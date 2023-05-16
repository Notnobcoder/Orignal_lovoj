const customMediaQuery = (maxWidth) => `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  lgDesktop: customMediaQuery(1250),
  tabletLandscape: customMediaQuery(1380),
  desktop: customMediaQuery(922),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576),
};
