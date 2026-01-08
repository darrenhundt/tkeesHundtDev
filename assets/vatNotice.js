document.addEventListener('DOMContentLoaded', function () {
  let attempts = 0;
  const maxAttempts = 10;
  const attemptInterval = 500; // 500ms between attempts
  const initialDelay = 5000; // 5 second initial delay

  console.log('Adding VAT notice to cart');

  function addVatNotice() {
    const slidecart = document.querySelector('#slidecarthq');
    if (!slidecart) {
      if (attempts < maxAttempts) {
        attempts++;
        setTimeout(addVatNotice, attemptInterval);
      } else {
        console.log('Slidecart not found after 10 attempts');
      }
      return;
    }

    // Find the cart subtotal element
    const cartSubtotal = document
      .querySelector('.slidecart-subtotal')
      .closest('.footer-row');

    if (cartSubtotal) {
      // Create new div element for VAT notice
      const vatNotice = document.createElement('div');
      vatNotice.className = 'vat-notice';
      vatNotice.textContent = 'Price includes VAT';

      // Insert the new notice inside the cart subtotal
      cartSubtotal.appendChild(vatNotice);
      console.log(`VAT notice added after ${attempts} attempts`);
    }
  }

  // Start the first attempt after initial delay
  setTimeout(addVatNotice, initialDelay);
});
