module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
      }
    },
  },
  variants: {
    backgroundColor: ['focus-within'],
    width: ['responsive','focus-within']
  },
  plugins: [],
}
