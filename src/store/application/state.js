export default function () {
  return {
    maximized: false,
    config_dice: {
      defaults: [4, 6, 8, 10, 12, 20, 30, 100],
      customDefault: 13
    },
    config_key: {
      fields: {
        lowercase: false,
        uppercase: false,
        digits: false,
        specialChars: false
      },
      amount: 0,
      specialCharset: '#&*-+='
    },
    config_word: {},
    config_dice_settings: {
      defaults: [4, 6, 8, 10, 12, 20, 30, 100],
      customDefault: 13
    },
    config_key_settings: {
      fields: {
        lowercase: false,
        uppercase: false,
        digits: false,
        specialChars: false
      },
      amount: 0,
      specialCharset: '#&*-+='
    },
    config_word_settings: {}
  }
}
