function listCatalog(data) {
  for (var i=0; i < data.length; i++) {
    var item =
    '<div class="item"' +
    'data-id="' + data[i].id + '">' +
    data[i].name +
    '<span class="delete">Delete</span>' +
    '</div>'

    $('.catalog').append(item)
  }
}
