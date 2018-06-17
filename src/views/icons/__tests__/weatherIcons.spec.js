import weatherIcons from '../weatherIcons'

describe('WeatherIcons test', () => {

  test('Get the object one', () => {
    const icon = weatherIcons(230)
    expect(icon).toMatchSnapshot()
  })

  test('No icon found', () => {
    const icon = weatherIcons(900)
    expect(icon).toBeFalsy()
  })
})
