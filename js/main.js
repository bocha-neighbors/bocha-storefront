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

function listCatalog(data) {
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

function handleAddItem(data, cart) {
  $('.add').click(function(event) {
    event.preventDefault()
    var selectedIndex = $('.selected').attr('data-id') - 1
    var item = data[selectedIndex]
    console.log('you clicked. heres one item', item)
    addToCart(item, cart)
  })
}

function addToCart(item, cart) {
  // Add to cart array
  cart.push(item)
  console.log('added item to cart. heres the cart', cart)
  // Refresh display of cart
  displayCart(cart)
}

function displayCart(cart) {
  // Clear any existing items in the displayed cart
  $('.cart').text('')

  // Loop over the cart, adding each item to the cart div
  for (var i=0; i < cart.length; i++) {
    var item =
    '<div class="item"' +
    'data-id="' + cart[i].id + '">' +
    cart[i].name +
    '<span class="price">' +
    cart[i].price +
    '</span>' +
    '</div>'

    $('.cart').append(item)
  }
}
