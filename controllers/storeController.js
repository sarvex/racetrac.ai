const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (request, response) => {
  response.render('index', {title: 'Chottu'});
}

exports.addStore = (request, response) => {
  response.render('editStore', {title: 'Add Store'});
}

exports.createStore = async (request, response) => {
  const store = await (new Store(request.body)).save();
  request.flash('success', `Successfully created ${store.name}. Care to leave a review?`)
  response.redirect(`/store/${store.slug}`);
}

exports.getStores = async (request, response) => {
  // Query the database for all the stores
  const stores = await Store.find();
  response.render('stores', {title: 'Stores', stores: stores});
}

exports.editStore = async (request, response) => {
  // Find the store the given the ID
  const store = await Store.findOne({_id: request.params.id});

  // Confirm owner of the store
  // TODO
  // Render out the edit form
  response.render('editStore', {title: `Edit ${store.name}`, store: store});
}

exports.updateStore = async (request, response) => {
  const store = await Store.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true, // return the new store instead of the old one
    runValidators: true,
  }).exec();
  request.flash('success', `Sucessfully updated <strong>${store.name}</store>. <a href="/stores/${store.slug}">View Store</a>`);
  response.redirect(`/stores/${store._id}/edit`);
}
