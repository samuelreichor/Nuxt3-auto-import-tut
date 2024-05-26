export default defineNuxtConfig({
  buildModules: [
    '@nuxtjs/date-fns',
  ],
  imports: {
     dirs: [
      './constants'
     ],
     presets: [{
        from: 'date-fns/add_days',
        imports: [
          { name: 'default', as: 'addDays' }
        ]
     }]
  },
  hooks: {
    'components:dirs': (dirs) => {
      dirs.push({
        path: '~/app-components',
        prefix: 'app'
      })
    }
  }
})