exports.homePage = (request, response) => {
  response.render('index', {title: 'Chottu'});
}

exports.addStore = (request, response) => {
  response.render('editStore', {title: 'Add Store'});
}
