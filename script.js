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

  // Array of thank you messages
  const messages = [
    "Thank you for celebrating with us! 💖🎉",
    "Thanks for being awesome! 🌸✨",
    "You are the best! Thanks for coming! 💕🙌",
    "Thank you, you're a star! 🌟💖",
    "I'm so grateful to have you here with me today! 🎀🎂",
    "Your presence made this day even more special! 🍰✨",
    "Thanks for making this celebration unforgettable! 🎊💗",
    "You've truly made today memorable, thank you! 🥳💖",
    "You're amazing—thank you for being part of this day! 🌷🌈"
  ];

  // When the button is clicked
  $('#lightCandleButton').click(function() {
    // Light up the candle flame
    $('.flame').addClass('lit');

    // Display a random thank you message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    $('#thankYouMessage').text(randomMessage).addClass('show');
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
