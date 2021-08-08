function index(req, res) {
  res.render('index', {
    title: 'Pagina Inicial'
  })
}

module.exports = {
  index
}
