const { colors } = require("@/constants/index");

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.primaryColor,
        secondary: colors.secondaryColor,
        muted: colors.muted,
      },
    },
  },
};
