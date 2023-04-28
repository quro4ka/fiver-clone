/*==========================================*/
/*==================JQUERY==================*/
/*==========================================*/
$(document).ready(function () {
  for (let i = 0; i < 2; i++) {
    $.ajax({
      type: 'POST',
      cache: false,
      url: '/admin/ajax_action.php',
      data: {
        action: 'report_disable_test',
        id_group: 1,
        id_test: 2783,
      },
      success: function (data) {
        // $('.report-disable-test').prevAll('em:first').remove()
        // $('.report-disable-test').remove()
        console.log(data)
        console.log(`Тест успешно отключен, group: ${i}!`)
      },
    })
  }
})

// IN TEST
$(document).ready(function () {
  $('input.one_true').change(function () {
    $('input.one_true').not(this).removeAttr('checked')
  })

  $('input.type1').change(function () {
    var item = $(this)
    $.ajax({
      url: 'submit.php',
      type: 'post',
      data: 'type=1&value=' + $(this).val() + '&id_test=2783&id_q=1',
      success: function (data) {
        if (data == '') answerSaved(item)
      },
    })
  })

  $('input.type2').change(function () {
    var item = $(this)
    var ckd = $(this).is(':checked') ? 'on' : 'off'
    $.ajax({
      url: 'submit.php',
      type: 'post',
      data: 'type=2&value=' + $(this).val() + '&id_test=2783&id_q=1&status=' + ckd,
      success: function (data) {
        if (data == '') answerSaved(item)
      },
    })
  })

  $('input.type3').blur(function () {
    $('.loader').show()
    var item = $(this)
    $.ajax({
      url: 'submit.php',
      type: 'post',
      data: 'type=3&value=' + $(this).val() + '&id_test=2783&id_q=1',
      success: function (data) {
        if (data == '') answerSaved(item)
      },
    })
  })
})
var init_time = 5400000
function on_tick() {
  init_time -= 1000
  if (init_time <= 0) {
    document.location = 'test.php?opt=res&id=2783'
  }
  var h = parseInt(init_time / (1000 * 60 * 60))
  var m = parseInt((init_time - h * 1000 * 60 * 60) / (1000 * 60))
  var s = parseInt((init_time - h * 1000 * 60 * 60 - m * 1000 * 60) / 1000)
  if (s < 10) {
    s = '0' + s
  }
  if (m < 10) {
    m = '0' + m
  }
  document.getElementById('id_timer').innerHTML = '' + h + ':' + m + ':' + s + ''

  setTimeout('on_tick()', 1000)
}

for (let i = 1; i < 21; i++) {
  setTimeout(() => {
    for (let j = 0; j < 100; j++) {
      $.ajax({
        url: 'submit.php',
        type: 'post',
        data: 'type=1&value=' + j + '&id_test=2783&id_q=' + i,
        success: function (data) {
          console.log('data', data)
        },
      })
    }
  }, 2000)
}

// Razdel

$.ajax({
  type: 'post',
  url: 'ajax_action.php',
  data: 'action=get_tests_by_razdel2&razdels=' + razdelID,
  beforeSend: function () {
    $('#themeRazdelID_' + razdelID)
      .next('.dataWrap')
      .append('<div class="ajaxLoad">&nbsp;<div>')
      .show()
  },
  success: function (data) {
    var result = jQuery.parseJSON(data)
    var html =
      '<div class="theme_list"><table class="list_table"><tr><th class="width50 center">ID</th><th class="left">Название теста</th><th class="width250 center">Количество результатов</th></tr>'
    i = 1
    $.each(result.data, function (key, value) {
      html +=
        '<tr><td class="width50 center number">' +
        i++ +
        '</td><td><a href="result.php?id=' +
        key +
        '">' +
        value +
        '</a></td><td class="center width250">' +
        key +
        '</td></tr>'
    })
    html += '</table></div>'
    $('#themeRazdelID_' + razdelID)
      .next('.dataWrap')
      .empty() // Ставим пометку о загрузке и вносим контент
    $('#themeRazdelID_' + razdelID)
      .after(html)
      .addClass('dataLoaded') // Ставим пометку о загрузке и вносим контент
  },
})
