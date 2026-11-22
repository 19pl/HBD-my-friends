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

  // Helper functions for dynamic personalized messages
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

  // Dynamic Name & Title Management
  function updateTitle(name, prefix) {
    var p = prefix || 'HAPPY DAY TO';
    var trimmed = (name || '').trim();
    if (trimmed) {
      $('.title-text').text(p + ' ' + trimmed);
      document.title = p + ' ' + trimmed + '! 🎂';
    } else {
      $('.title-text').text('Happy Birthday!');
      document.title = 'Happy Birthday! 🎂';
    }
  }

  function buildShareUrl(name, prefix) {
    var url;
    try {
      url = new URL(window.location.href);
    } catch (e) {
      url = {
        origin: window.location.origin || '',
        pathname: window.location.pathname || '',
        searchParams: new URLSearchParams()
      };
    }

    if (url.searchParams) {
      if (name && name.trim()) {
        url.searchParams.set('name', name.trim());
      } else {
        url.searchParams.delete('name');
      }

      if (prefix && prefix !== 'HAPPY DAY TO') {
        url.searchParams.set('prefix', prefix);
      } else {
        url.searchParams.delete('prefix');
      }
      return url.toString();
    }

    var base = (window.location.origin || '') + (window.location.pathname || '');
    var params = [];
    if (name && name.trim()) params.push('name=' + encodeURIComponent(name.trim()));
    if (prefix && prefix !== 'HAPPY DAY TO') params.push('prefix=' + encodeURIComponent(prefix));
    return params.length ? base + '?' + params.join('&') : base;
  }

  function syncUrlAddressBar(name, prefix) {
    if (window.history && window.history.replaceState) {
      try {
        var newUrl = buildShareUrl(name, prefix);
        window.history.replaceState({}, '', newUrl);
      } catch (err) {
        // Ignored on file:// or restrictive contexts
      }
    }
  }

  function getUrlParams() {
    var name = '';
    var prefix = 'HAPPY DAY TO';
    try {
      var searchParams = new URLSearchParams(window.location.search);
      if (searchParams.has('name')) {
        name = searchParams.get('name') || '';
      }
      if (searchParams.has('prefix')) {
        prefix = searchParams.get('prefix') || 'HAPPY DAY TO';
      }
    } catch (e) {}

    // Hash fallback: e.g. #name=...
    if (!name && window.location.hash) {
      var hashMatch = window.location.hash.match(/name=([^&]+)/);
      if (hashMatch) {
        try {
          name = decodeURIComponent(hashMatch[1]);
        } catch (e) {
          name = hashMatch[1];
        }
      }
    }
    return { name: name, prefix: prefix };
  }

  // Toast notification helper
  function showToast(text) {
    var toast = $('#copyToast');
    toast.text(text).addClass('show');
    clearTimeout(toast.data('timer'));
    var timer = setTimeout(function() {
      toast.removeClass('show');
    }, 2800);
    toast.data('timer', timer);
  }

  // Clipboard copy helper with fallback
  function copyTextToClipboard(text, onSuccess, onError) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(onSuccess).catch(function() {
        fallbackCopy(text, onSuccess, onError);
      });
    } else {
      fallbackCopy(text, onSuccess, onError);
    }
  }

  function fallbackCopy(text, onSuccess, onError) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.top = "-9999px";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      var successful = document.execCommand('copy');
      if (successful && onSuccess) onSuccess();
      else if (!successful && onError) onError();
    } catch (err) {
      if (onError) onError(err);
    }
    document.body.removeChild(textArea);
  }

  // Initialize from URL parameters
  var initialData = getUrlParams();
  if (initialData.prefix) {
    $('#prefixSelect').val(initialData.prefix);
  }
  if (initialData.name) {
    $('#nameInput').val(initialData.name);
    $('#clearNameBtn').show();
  }
  updateTitle(initialData.name, $('#prefixSelect').val());

  // Input event: live title update as you type
  $('#nameInput').on('input', function() {
    var name = $(this).val();
    var prefix = $('#prefixSelect').val();
    $('#clearNameBtn').toggle(Boolean(name.trim()));
    updateTitle(name, prefix);
    syncUrlAddressBar(name, prefix);
  });

  // Prefix select change
  $('#prefixSelect').on('change', function() {
    var name = $('#nameInput').val();
    var prefix = $(this).val();
    updateTitle(name, prefix);
    syncUrlAddressBar(name, prefix);
  });

  // Clear name button
  $('#clearNameBtn').on('click', function() {
    $('#nameInput').val('').focus();
    $(this).hide();
    var prefix = $('#prefixSelect').val();
    updateTitle('', prefix);
    syncUrlAddressBar('', prefix);
  });

  // Share / Copy link button
  $('#shareLinkBtn').on('click', function() {
    var name = $('#nameInput').val().trim();
    var prefix = $('#prefixSelect').val();
    var shareUrl = buildShareUrl(name, prefix);

    copyTextToClipboard(shareUrl, function() {
      if (name) {
        showToast('คัดลอกลิงก์สำหรับ ' + name + ' แล้ว! 💌');
      } else {
        showToast('คัดลอกลิงก์เรียบร้อยแล้ว! 💌');
      }
    }, function() {
      showToast('กรุณาคัดลอกลิงก์จากแถบ URL ด้านบนนะ 🔗');
    });
  });

  // When clicking "จุดเทียน"
  $('#lightCandleButton').click(function() {
    // Reset any previous smoke animation
    $('.smoke').removeClass('active');
    
    // Light up the flame
    $('.flame').addClass('lit');

    // Display personalized random lighting message
    var currentName = $('#nameInput').val();
    var messages = getLightMessages(currentName);
    var msg = messages[Math.floor(Math.random() * messages.length)];
    $('#thankYouMessage').text(msg).addClass('show');
  });

  // When clicking "เป่าเค้ก"
  $('#blowCandleButton').click(function() {
    var currentName = ($('#nameInput').val() || '').trim();
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

  // Safe handler for celebrateBtn if present
  var celebrateBtn = document.getElementById('celebrateBtn');
  if (celebrateBtn) {
    celebrateBtn.addEventListener('click', function() {
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
      celebrateBtn.style.transform = 'scale(0.95)';
      setTimeout(function() {
        celebrateBtn.style.transform = 'scale(1)';
      }, 100);
    });
  }
});
