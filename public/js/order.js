$(function(){
  var url = 'https://bocha-food-server.herokuapp.com/catalog'
  var cart = []

  $.get(url)
  .done(function(data) {
    listCatalog(data)
    highlightFirstItem()
    highlightSelectedItem()
    handleAddItem(data, cart)
  })
})
