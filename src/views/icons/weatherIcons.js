import ICONS_DATA from './weatherIconsData'

const weatherIcons = (valueIcon) => {
  return ICONS_DATA.find(icon => {
    if (icon.min >= valueIcon && icon.max <= valueIcon) {
      return icon
    }
    return null
  })
}

export default weatherIcons
