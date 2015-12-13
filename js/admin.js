$(function(){
  var url = 'http://localhost:8080/catalog'
  var cart = []

  $.get(url)
  .done(function(data) {
    listCatalog(data)
    highlightFirstItem()
    highlightSelectedItem()
    handleAddItem(data, cart)
  })
})
