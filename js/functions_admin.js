function listCatalog(data) {
  for (var i=0; i < data.length; i++) {
    var item =
    '<div class="item"' +
    'data-id="' + data[i].id + '">' +
    '<span class="delete">Delete</span>' +
    data[i].name +
    '</div>'

    $('.catalog').append(item)
  }
}
