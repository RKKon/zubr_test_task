Date.prototype.addDays = function (d) {
  this.setDate(this.getDate() + d);
  return this;
};
$('document').ready(function () {
  var monthsList = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  var commentDate = $('.comment_date');
  var comments = commentDate.length;
  var dates = [];
  var d = new Date();
  for (var i = comments - 1; i >= 0; i--) {
    var delta = Math.round(Math.random() * 2);
    var d = new Date(d.addDays(-delta));
    dates[i] = d.getDate() + '.' + monthsList[d.getMonth()] + '.' + d.getFullYear();
  }
  commentDate.each(function (i, el) {
    $(this).text(dates[i]);
  });
});