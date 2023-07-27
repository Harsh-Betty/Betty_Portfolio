window.onload = function () {
    const favicon = document.getElementById('favicon')
    const pageTitle = document.title
    const attentionMessage = 'Come Back...Be Here'
  
    document.addEventListener('visibilitychange', function (e) {
      const isPageActive = !document.hidden
      toggle(isPageActive)
    })
  
    function toggle(isPageActive) {
      if (isPageActive) {
        document.title = pageTitle
        favicon.href = './assets/betty-logo-white.png'
      } else {
        document.title = attentionMessage
        favicon.href = './assets/cutie.png'
      }
    }
  }
  