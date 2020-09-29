function populateList(list) {
  for (var i = 1; i <= 15; i++) {
    list[i - 1] = i;
  }
}

module.exports = populateList;
