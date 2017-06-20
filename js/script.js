(function (Vue, $, _) {

  if (typeof $ === 'undefined' || !$) {
    throw new Error('jQuery library not found!')
  } else if (typeof Vue === 'undefined' || !Vue) {
    throw new Error('Vue library not found!')
  } else if (typeof _ === 'undefined' || !_) {
    throw new Error('Underscore library not found!')
  }

  $(document).ready(function () {

    const routes = [
      { name: 'foo', path: '/foo', component: { template: '<h2>foo</h2>' } },
      { name: 'bar', path: '/bar', component: { template: '<h2>bar</h2>' } }
    ]

    const router = new VueRouter({ routes })

    const app = new Vue({
      el: '#app',
      data: {
        title: 'Simple Web App',
      },
      router,
    })

    _.delay(() => $('#app').css({ display: 'block' }), 500)

  })

})(Vue, jQuery, _)