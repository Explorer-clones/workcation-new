const theme = require("./style-guidelines/tailwind-design")

const { fontSize, fontFamily } = theme

module.exports = {
  theme: {
    // If you want to override default tailwind values with your own set of values, then put them here
    fontSize,
    fontFamily,
    extend: {
      // Here you can extend values generated by default.
    },
  },
  variants: {},
  plugins: [require("tailwindcss-elevation")(["responsive"])],
}
