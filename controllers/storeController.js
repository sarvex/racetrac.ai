const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (request, response) => {
  response.render('index', {title: 'Chottu'});
}

exports.addStore = (request, response) => {
  response.render('editStore', {title: 'Add Store'});
}

exports.createStore = async (request, response) => {
  const store = new Store(request.body);
  await store.save();
  response.redirect('/');
}
