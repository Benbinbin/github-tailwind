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
    backgroundColor: ['focus-within', 'hover'],
    width: ['responsive','focus-within', 'focus']
  },
  plugins: [],
}
