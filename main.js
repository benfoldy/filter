$(document).ready(function() {
  function tabulate() {
    var donations = $('td.donation:visible')
    var total = 0

    donations.each(function() {
      let num = this.innerHTML.replace('$','').replace(',', '')
      total += parseInt(num)
    })

    $("span#contr-num").text(`$${total}`)
  }

  tabulate()

  $("#filter").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#content tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
    tabulate()
  });
});
