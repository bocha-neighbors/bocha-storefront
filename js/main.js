$(function(){
  var url = 'http://localhost:8080/catalog'

  $.get(url)
  .done(function(data) {
    listCatalog(data)
    highlightFirstItem()
    highlightSelectedItem()
    handleAddItem(data)
  })

})

function listCatalog(data) {
  console.log(data)
  for (var i=0; i < data.length; i++) {
    var item =
    '<div class="item"' +
    'data-id="' + data[i].id + '">' +
    data[i].name +
    '<span class="price">' +
    data[i].price +
    '</span>' +
    '</div>'

    $('.catalog').append(item)
  }
}

function highlightFirstItem() {
  $('.item:nth-child(1)').addClass('selected')
}

function highlightSelectedItem() {
  $('.item').click(function() {
    $('.item').removeClass('selected')
    $(this).addClass('selected')
  })
}

function handleAddItem(data) {
  $('.add').click(function(event) {
    event.preventDefault()
    var selectedIndex = $('.selected').attr('data-id') - 1
    var item = data[selectedIndex]
    console.log(item.name)
  })
}
