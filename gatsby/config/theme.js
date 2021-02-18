export const colors = {
  white: {
    base: '#fff',
    light: '#f0f0f0',
    grey: '#fff',
    dark: '#585e5d',
  },
  black: {
    base: '#333438',
    light: '#4b4e57',
    blue: '#2e3246',
  },
  primary: {
    base: '#110851',
    light: '#211090',
    dark: '#0E0640',
  },
  background: {
    light: '#211090',
    dark: '#0E0640',
  },
};

export const shadow = {
  card: '0 20px 30px rgba(0, 0, 0, 0.1)',
  image: '0 15px 25px rgba(0, 0, 0, 0.1)',
  suggestion: '0 -5px 30px rgba(0,0,0,0.2)',
  footer: '0 -3px 26px rgba(0,0,0,0.5)',
  feature: {
    big: {
      default: '0 40px 40px rgba(0, 0, 0, 0.2)',
      hover: '0 50px 50px rgba(0, 0, 0, 0.1)',
    },
    small: {
      default: '0 15px 25px rgba(0, 0, 0, 0.2)',
      hover: '0 40px 45px rgba(0, 0, 0, 0.1)',
    },
  },
  text: {
    small: '0 5px 10px rgba(0, 0, 0, 0.25)',
    big: '0 15px 20px rgba(0, 0, 0, 0.13)',
  },
};

export const gradient = {
  // eslint-disable-next-line
  leftToRight: `linear-gradient(-45deg, ${colors.background.light} 0%, ${colors.background.dark} 100%)`,
  // eslint-disable-next-line
  rightToLeft: `linear-gradient(45deg, ${colors.background.light} 0%, ${colors.background.dark} 100%)`,
};

export const transition = {
  easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  duration: '0.4s',
};

export const theme = {
  colors,
  gradient,
  shadow,
  breakpoints: {
    xxs: '300px',
    xs: '400px',
    ss: '510px',
    s: '600px',
    m: '900px',
    l: '1200px',
  },
  header: {
    clip_path: "100% 0%, 0% 0% , 0% 93.333333333333%, 1% 93.3%, 2% 93.233333333333%, 3% 93.1%, 4% 92.933333333333%, 5% 92.7%, 6% 92.433333333333%, 7% 92.1%, 8% 91.733333333333%, 9% 91.333333333333%, 10% 90.9%, 11% 90.4%, 12% 89.866666666667%, 13% 89.333333333333%, 14% 88.733333333333%, 15% 88.133333333333%, 16% 87.466666666667%, 17% 86.833333333333%, 18% 86.133333333333%, 19% 85.466666666667%, 20% 84.766666666667%, 21% 84.033333333333%, 22% 83.333333333333%, 23% 82.6%, 24% 81.9%, 25% 81.2%, 26% 80.5%, 27% 79.833333333333%, 28% 79.166666666667%, 29% 78.533333333333%, 30% 77.933333333333%, 31% 77.333333333333%, 32% 76.766666666667%, 33% 76.266666666667%, 34% 75.766666666667%, 35% 75.333333333333%, 36% 74.9%, 37% 74.566666666667%, 38% 74.233333333333%, 39% 73.966666666667%, 40% 73.733333333333%, 41% 73.566666666667%, 42% 73.433333333333%, 43% 73.366666666667%, 44% 73.333333333333%, 45% 73.366666666667%, 46% 73.433333333333%, 47% 73.566666666667%, 48% 73.733333333333%, 49% 73.966666666667%, 50% 74.233333333333%, 51% 74.566666666667%, 52% 74.933333333333%, 53% 75.333333333333%, 54% 75.8%, 55% 76.266666666667%, 56% 76.8%, 57% 77.366666666667%, 58% 77.933333333333%, 59% 78.566666666667%, 60% 79.2%, 61% 79.866666666667%, 62% 80.533333333333%, 63% 81.233333333333%, 64% 81.933333333333%, 65% 82.633333333333%, 66% 83.366666666667%, 67% 84.066666666667%, 68% 84.766666666667%, 69% 85.466666666667%, 70% 86.166666666667%, 71% 86.833333333333%, 72% 87.5%, 73% 88.133333333333%, 74% 88.766666666667%, 75% 89.333333333333%, 76% 89.9%, 77% 90.433333333333%, 78% 90.9%, 79% 91.366666666667%, 80% 91.766666666667%, 81% 92.133333333333%, 82% 92.433333333333%, 83% 92.7%, 84% 92.933333333333%, 85% 93.1%, 86% 93.233333333333%, 87% 93.3%, 88% 93.333333333333%, 89% 93.3%, 90% 93.233333333333%, 91% 93.1%, 92% 92.933333333333%, 93% 92.7%, 94% 92.433333333333%, 95% 92.1%, 96% 91.733333333333%, 97% 91.333333333333%, 98% 90.866666666667%, 99% 90.4%, 100% 89.866666666667%"
  },
  fontFamily: {
    // eslint-disable-next-line
    body: `Open Sans,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
    // eslint-disable-next-line
    heading: `Candal, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
  },
  layout: {
    profil: '15rem',
    article: '46rem',
    base: '70rem',
    big: '83.33333rem',
  },
  borderRadius: {
    default: '0.4rem',
    round: '100rem',
  },
  transitions: {
    default: {
      duration: transition.duration,
      timing: transition.easeInOutCubic,
      transition: `all ${transition.duration} ${transition.easeInOutCubic}`,
    },
    boom: {
      duration: transition.duration,
      timing: transition.easeOutBack,
      transition: `all ${transition.duration} ${transition.easeOutBack}`,
    },
    headroom: {
      transition: 'all 0.25s ease-in-out',
    },
  },
};

export default theme;
