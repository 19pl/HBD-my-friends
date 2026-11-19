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

  // Messages when lighting the candle
  const lightMessages = [
    "จุดเทียนแล้ว! หลับตาแล้วอธิษฐานในใจได้เลยนะ 🕯️🌟",
    "จุดเทียนเรียบร้อย! พร้อมเป่าเค้กหรือยังเอ่ย? 🎂💖",
    "เทียนสว่างไสวแล้ว! ขอพรวันเกิดได้เลยนะ ✨💕",
    "Thank you for celebrating with us! พร้อมเป่าเทียนแล้ว 🎉🕯️"
  ];

  // Messages when blowing out the candle
  const blowMessages = [
    "🎂 ฟู่ววว~ อธิษฐานเรียบร้อยแล้ว ขอให้ทุกความปรารถนาเป็นจริงนะ! ✨💖",
    "🎉 เย้! เป่าเค้กแล้ว ขอให้มีความสุขมากๆ สุขภาพแข็งแรงตลอดปีนะ! 💕🌷",
    "🌟 Make a wish! ขอให้ปีนี้เป็นปีที่ยอดเยี่ยมและสดใสที่สุด! 🌈🎂",
    "🍰 เป่าเทียนสำเร็จ! ขอให้มีแต่รอยยิ้มและสิ่งดีๆ เข้ามาในชีวิตนะ! 🎈✨",
    "💖 Happy Birthday! ขอให้ความฝันทุกข้อกลายเป็นจริงในเร็ววันนะ! 🥳🎉"
  ];

  // When clicking "จุดเทียน"
  $('#lightCandleButton').click(function() {
    // Reset any previous smoke animation
    $('.smoke').removeClass('active');
    
    // Light up the flame
    $('.flame').addClass('lit');

    // Display random lighting message
    const msg = lightMessages[Math.floor(Math.random() * lightMessages.length)];
    $('#thankYouMessage').text(msg).addClass('show');
  });

  // When clicking "เป่าเค้ก"
  $('#blowCandleButton').click(function() {
    if ($('.flame').hasClass('lit')) {
      // Extinguish the flame
      $('.flame').removeClass('lit');

      // Trigger smoke puff effect
      const smokeEl = $('.smoke');
      smokeEl.removeClass('active');
      void smokeEl[0].offsetWidth; // trigger reflow to restart animation
      smokeEl.addClass('active');

      // Display random birthday wish
      const wish = blowMessages[Math.floor(Math.random() * blowMessages.length)];
      $('#thankYouMessage').text(wish).addClass('show');
    } else {
      // If candle is not lit yet
      $('#thankYouMessage').text("เทียนยังไม่ได้จุดเลยน้า! กดปุ่ม 'จุดเทียน 🕯️' ก่อนนะ ✨").addClass('show');
    }
  });

  // Safe handler for celebrateBtn if present
  const celebrateBtn = document.getElementById('celebrateBtn');
  if (celebrateBtn) {
    celebrateBtn.addEventListener('click', () => {
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
      celebrateBtn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        celebrateBtn.style.transform = 'scale(1)';
      }, 100);
    });
  }
});
