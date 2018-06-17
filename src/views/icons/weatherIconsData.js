import ThunderStormIcon from './weather/stormy.svg'
import RainIcon from './weather/rainy.svg'
import SnowIcon from './weather/snowy.svg'
import ClearIcon from './weather/sunny.svg'
import CloudsIcon from './weather/cloudy.svg'

const ICONS_DATA = [
  {
    min: null,
    max: 232,
    iconObject: ThunderStormIcon
  },
  {
    min: 300,
    max: 531,
    iconObject: RainIcon
  },
  {
    min: 600,
    max: 622,
    iconObject: SnowIcon
  },
  {
    min: 800,
    max: 800,
    iconObject: ClearIcon
  },
  {
    min: 801,
    max: 804,
    iconObject: CloudsIcon
  }
]

export default ICONS_DATA
