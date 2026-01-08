const monoInputElem = document.getElementById('monogram');
let monoHeight = monoInputElem.scrollHeight;
const monoSelect = monoInputElem
  .closest('.custom-option')
  .querySelector('select');
const monoText = document.querySelector('.monogram-text');
const monoOverlay = document.getElementById('mono-overlay');
const monoCheckbox = document.querySelector('.mono-checkbox');
const selectOptions = monoInputElem
  .closest('.option-selector')
  .querySelector('ul')
  .querySelectorAll('li');
const buyButton = document.getElementById('bybutton');
const orderItemNote = document.getElementById('mono-tag');

let monoOpen = false;
let monoBoxChecked = false;

// Set height variable for transitions
document
  .querySelector(':root')
  .style.setProperty('--mono-height', `${monoHeight}px`);

const showTextArea = () => {
  monoInputElem.classList.add('show-mono');
  monoInputElem.classList.remove('hide-mono');
};

const hideTextArea = () => {
  monoInputElem.classList.remove('show-mono');
  monoInputElem.classList.add('hide-mono');
};

const clearTextArea = () => {
  monoText.value = '';
  monoOverlay.innerText = 'TKE';
};

const toggleMonoCheckbox = checked => {
  if (checked) {
    monoCheckbox.setAttribute('checked', '');
    monoBoxChecked = true;
  } else {
    monoCheckbox.removeAttribute('checked', '');
    monoBoxChecked = false;
  }
};

const toggleBuyButton = checked => {
  if (checked) {
    orderItemNote.removeAttribute('disabled');
    buyButton.removeAttribute('disabled');
    buyButton.style.display = 'block';
  } else {
    orderItemNote.setAttribute('disabled', '');
    buyButton.setAttribute('disabled', '');
    buyButton.style.display = 'block';
  }
};

const monoHasInput = () => {
  if (monoText.value.length < 1) {
    return false;
  } else {
    return true;
  }
};

// Using max-height
monoSelect.onchange = e => {
  const selectedValue = e.target.value;
  console.log('Selected value: ', selectedValue);
  if (selectedValue.includes('none')) {
    toggleBuyButton(true);
    hideTextArea();
    clearTextArea();
    buyButton.style.display = 'block';
    // toggleMonoCheckbox(false);
    monoOpen = false;
  } else {
    showTextArea();
    monoOpen = true;
    buyButton.style.display = 'block';
    if (monoHasInput()) {
      toggleBuyButton(true);
    } else {
      toggleBuyButton(false);
    }
  }

  selectOptions.forEach(sb => {
    // console.log('Select box to select: ', sb);
    if (sb.dataset.value == selectedValue) {
      sb.setAttribute('aria-selected', 'true');
    } else {
      sb.setAttribute('aria-selected', 'false');
    }
  });
};

monoText.addEventListener('input', e => {
  monoText.value = monoText.value.toUpperCase();
  if (monoHasInput()) {
    orderItemNote.value = 'Monogram - ' + monoText.value;
    toggleBuyButton(true);
  } else {
    toggleBuyButton(false);
  }
  monoOverlay.innerText = monoText.value;
});

monoCheckbox.onchange = e => {
  // let checked = monoCheckbox.hasAttribute('checked');
  // if (checked) {
  //   monoCheckbox.removeAttribute('checked');
  //   monoBoxChecked = false;
  // } else {
  monoCheckbox.setAttribute('checked', '');
  monoBoxChecked = true;
  // }

  if (monoBoxChecked && monoHasInput()) {
    toggleBuyButton(true);
  } else {
    toggleBuyButton(false);
  }
};

// buyButton.addEventListener('click', e => {
//   if (!buyButton.hasAttribute('disabled')) {
//     monoText.setAttribute('disabled', '');
//   }
// });
// Open-close height transition
