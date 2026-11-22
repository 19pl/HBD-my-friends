jQuery(document).ready(function($) {
  // Generate sweet pink theme confetti
  var flakes = '';
  var pinkShades = [
    '#ff4d6d', '#ff758f', '#ff8fa3', '#ffb3c1', '#ffd6e0',
    '#f72585', '#b5179e', '#f48fb1', '#ffffff', '#ffe4e6', 
    '#fbc2eb', '#ff007f', '#ffccd5'
  ];

  for (var i = 0, len = 260; i < len; i++) {
    var randomColor = pinkShades[Math.floor(Math.random() * pinkShades.length)];
    var size = Math.floor(Math.random() * 8 + 8); // 8px to 15px
    var duration = (Math.random() * 7 + 4).toFixed(2);
    var delay = (Math.random() * 4).toFixed(2);

    flakes += '<div class="ball" style="background: ' + randomColor + 
              '; width: ' + size + 'px; height: ' + size + 'px;' +
              '; animation-duration: ' + duration + 's; animation-delay: ' + delay + 's;"></div>';
  }

  var confettiContainer = document.getElementById('confetti');
  if (confettiContainer) {
    confettiContainer.innerHTML = flakes;
  }

  // Personalized lighting & blowing messages
  function getLightMessages(name) {
    var trimmed = (name || '').trim();
    if (trimmed) {
      return [
        'จุดเทียนแล้ว! ' + trimmed + ' หลับตาแล้วอธิษฐานในใจได้เลยนะ 🕯️🌟',
        'จุดเทียนเรียบร้อย! ' + trimmed + ' พร้อมเป่าเค้กหรือยังเอ่ย? 🎂💖',
        'เทียนสว่างไสวแล้ว! ขอให้ ' + trimmed + ' มีความสุขมากๆ พร้อมขอพรวันเกิดเลย ✨💕',
        'HAPPY DAY TO ' + trimmed + '! พร้อมเป่าเทียนฉลองแล้ว 🎉🕯️'
      ];
    }
    return [
      "จุดเทียนแล้ว! หลับตาแล้วอธิษฐานในใจได้เลยนะ 🕯️🌟",
      "จุดเทียนเรียบร้อย! พร้อมเป่าเค้กหรือยังเอ่ย? 🎂💖",
      "เทียนสว่างไสวแล้ว! ขอพรวันเกิดได้เลยนะ ✨💕",
      "Thank you for celebrating with us! พร้อมเป่าเทียนแล้ว 🎉🕯️"
    ];
  }

  function getBlowMessages(name) {
    var trimmed = (name || '').trim();
    if (trimmed) {
      return [
        '🎂 ฟู่ววว~ อธิษฐานเรียบร้อยแล้ว ขอให้ ' + trimmed + ' สมหวังทุกความปรารถนานะ! ✨💖',
        '🎉 เย้! เป่าเค้กแล้ว ขอให้ ' + trimmed + ' มีความสุขมากๆ สุขภาพแข็งแรงตลอดปีนะ! 💕🌷',
        '🌟 Make a wish! ขอให้ปีนี้เป็นปีที่ยอดเยี่ยมและสดใสที่สุดสำหรับ ' + trimmed + '! 🌈🎂',
        '🍰 เป่าเทียนสำเร็จ! ขอให้ ' + trimmed + ' มีแต่รอยยิ้มและสิ่งดีๆ เข้ามาในชีวิตนะ! 🎈✨',
        '💖 Happy Birthday ' + trimmed + '! ขอให้ความฝันทุกข้อกลายเป็นจริงในเร็ววันนะ! 🥳🎉'
      ];
    }
    return [
      "🎂 ฟู่ววว~ อธิษฐานเรียบร้อยแล้ว ขอให้ทุกความปรารถนาเป็นจริงนะ! ✨💖",
      "🎉 เย้! เป่าเค้กแล้ว ขอให้มีความสุขมากๆ สุขภาพแข็งแรงตลอดปีนะ! 💕🌷",
      "🌟 Make a wish! ขอให้ปีนี้เป็นปีที่ยอดเยี่ยมและสดใสที่สุด! 🌈🎂",
      "🍰 เป่าเทียนสำเร็จ! ขอให้มีแต่รอยยิ้มและสิ่งดีๆ เข้ามาในชีวิตนะ! 🎈✨",
      "💖 Happy Birthday! ขอให้ความฝันทุกข้อกลายเป็นจริงในเร็ววันนะ! 🥳🎉"
    ];
  }

  // Get name from URL if present
  function getUrlName() {
    try {
      var searchParams = new URLSearchParams(window.location.search);
      if (searchParams.has('name') && searchParams.get('name').trim()) {
        return searchParams.get('name').trim();
      }
    } catch (e) {}

    if (window.location.hash) {
      var hashMatch = window.location.hash.match(/name=([^&]+)/);
      if (hashMatch) {
        try {
          return decodeURIComponent(hashMatch[1]).trim();
        } catch (e) {
          return hashMatch[1].trim();
        }
      }
    }
    return '';
  }

  // Update browser URL query
  function syncUrl(name) {
    if (window.history && window.history.replaceState) {
      try {
        var url = new URL(window.location.href);
        if (name) {
          url.searchParams.set('name', name);
        } else {
          url.searchParams.delete('name');
        }
        window.history.replaceState({}, '', url.toString());
      } catch (e) {}
    }
  }

  var currentName = '';

  // Show birthday celebration screen
  function showCelebration(name) {
    currentName = (name || '').trim();
    if (!currentName) return;

    // Update title text: HAPPY DAY TO [Name]
    $('.title-text').text('HAPPY DAY TO ' + currentName);
    document.title = 'HAPPY DAY TO ' + currentName + '! 🎂';

    // Transition from Step 1 to Step 2
    var nameScreen = $('#nameScreen');
    var birthdayScreen = $('#birthdayScreen');

    nameScreen.addClass('fade-out');
    setTimeout(function() {
      nameScreen.hide();
      birthdayScreen.css('display', 'flex').addClass('fade-in');
      syncUrl(currentName);
    }, 400);
  }

  // Go back to Step 1 (change name)
  function showNamePrompt() {
    var nameScreen = $('#nameScreen');
    var birthdayScreen = $('#birthdayScreen');

    birthdayScreen.hide().removeClass('fade-in');
    nameScreen.show().removeClass('fade-out');
    $('#nameInput').val(currentName).focus().select();
  }

  // Submit name action
  function handleNameSubmit() {
    var val = $('#nameInput').val().trim();
    if (!val) {
      $('#inputError').addClass('show');
      $('.name-card').removeClass('shake');
      void $('.name-card')[0].offsetWidth; // trigger reflow
      $('.name-card').addClass('shake');
      $('#nameInput').focus();
      return;
    }
    $('#inputError').removeClass('show');
    showCelebration(val);
  }

  // Event handlers for name submission
  $('#submitNameBtn').on('click', handleNameSubmit);

  $('#nameInput').on('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleNameSubmit();
    }
  });

  $('#nameInput').on('input', function() {
    if ($(this).val().trim()) {
      $('#inputError').removeClass('show');
    }
  });

  // Change name button
  $('#changeNameBtn').on('click', showNamePrompt);

  // Initial check: if name is passed in URL, prefill it
  var initialName = getUrlName();
  if (initialName) {
    $('#nameInput').val(initialName);
  }

  // When clicking "จุดเทียน"
  $('#lightCandleButton').click(function() {
    // Reset any previous smoke animation
    $('.smoke').removeClass('active');
    
    // Light up the flame
    $('.flame').addClass('lit');

    // Display personalized lighting message
    var messages = getLightMessages(currentName);
    var msg = messages[Math.floor(Math.random() * messages.length)];
    $('#thankYouMessage').text(msg).addClass('show');
  });

  // When clicking "เป่าเค้ก"
  $('#blowCandleButton').click(function() {
    if ($('.flame').hasClass('lit')) {
      // Extinguish the flame
      $('.flame').removeClass('lit');

      // Trigger smoke puff effect
      var smokeEl = $('.smoke');
      smokeEl.removeClass('active');
      void smokeEl[0].offsetWidth; // trigger reflow to restart animation
      smokeEl.addClass('active');

      // Display personalized random birthday wish
      var wishes = getBlowMessages(currentName);
      var wish = wishes[Math.floor(Math.random() * wishes.length)];
      $('#thankYouMessage').text(wish).addClass('show');
    } else {
      // If candle is not lit yet
      var hint = currentName 
        ? 'เทียนยังไม่ได้จุดเลยน้าคุณ ' + currentName + '! กดปุ่ม "จุดเทียน 🕯️" ก่อนนะ ✨'
        : "เทียนยังไม่ได้จุดเลยน้า! กดปุ่ม 'จุดเทียน 🕯️' ก่อนนะ ✨";
      $('#thankYouMessage').text(hint).addClass('show');
    }
  });
});
