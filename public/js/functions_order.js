// Functions related to the order page

function listCatalog(data) {
  console.log(data[0])
  for (var i=1; i < data.length; i++) {
    var item =
    '<div class="item"' +
    'data-id="' + i + '">' +
    data[i]['Item Description'] +
    '<span class="price">' +
    data[i]['Price'] +
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
    var selectedIndex = $('.selected').attr('data-id')
    var item = data[selectedIndex]
    console.log('you clicked. heres one item', item)
    addToCart(item, cart)
  })
}

function addToCart(item, cart) {
  // Add to cart array
  cart.push(item)
  console.log('Here\'s the cart', cart)
  console.log('Subtotal: ', findSubTotal(cart))
  // Refresh display of cart
  displayCart(cart)
}

function displayCart(cart) {
  // Clear any existing items in the displayed cart
  $('.cart').text('')

  // Loop over the cart, adding each item to the cart div
  for (var i=0; i < cart.length; i++) {
    // Build the item html
    var item =
      '<div class="item">' +
      cart[i]['Item Description'] +
      '<span class="price">' +
      cart[i]['Price'] +
      '</span>' +
      '</div>'
    // Put the item on the page
    $('.cart').append(item)
  }
  // Put the subtotal on the page
  var subtotal = findSubTotal(cart)
  var subtotalHTML = subtotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' })

  $('.subtotal').text(subtotalHTML)
}

function findSubTotal(cart) {
  var subtotal = 0
  for (var i=0; i < cart.length; i++) {
    var itemPrice = parseFloat(cart[i]['Price'])
    subtotal += itemPrice
  }
  return subtotal
}
