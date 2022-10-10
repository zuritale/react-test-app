import { defineMessages } from 'react-intl';

export const messages = defineMessages({
  london: {
    id: 'app.cities.london',
    description: 'City name for london',
    defaultMessage: 'London, UK'
  },
  cairo: {
    id: 'app.cities.cairo',
    description: 'City name for cairo',
    defaultMessage: 'Cairo, Egypt'
  },
  vancouver: {
    id: 'app.cities.vancouver',
    description: 'City name for vancouver',
    defaultMessage: 'Vancouver, Canada'
  },
  title: {
    id: 'app.home.headerTitle',
    description: 'Title of the navbar section of the page',
    defaultMessage: 'Weather Report',
  },
  citySelect: {
    id: 'app.home.citySelect',
    description: 'Title of the label for the cities selection',
    defaultMessage: 'Select a city'
  },
  citySelectPlaceholder: {
    id: "app.home.citySelectPlaceholder",
    description: 'Placeholder for the cities input select',
    defaultMessage: "Select to continue"
  },
  getReport: {
    id: 'app.home.formButton',
    description: 'Button to get the weather and forecasts data',
    defaultMessage: 'Get Report'
  },
  reset: {
    id: 'app.home.reset',
    description: 'reset label',
    defaultMessage: 'Reset'
  },
  max: {
    id: 'app.weather.max',
    description: 'Label of current weather max temperature',
    defaultMessage: 'Maximum Temperature'
  },
  min: {
    id: 'app.weather.min',
    description: 'Label of current weather min temperature',
    defaultMessage: 'Minimum Temperature'
  },
  wind: {
    id: 'app.weather.wind',
    description: 'Label of current weather wind',
    defaultMessage: 'Wind'
  },
  humidity: {
    id: 'app.weather.humidity',
    description: 'Label of current weather humidity',
    defaultMessage: 'Humidity'
  },
  emptyTitle: {
    id: 'app.empty.title',
    description: 'Empty card title label',
    defaultMessage: 'Select a city first',
  },
  emptySubtitle: {
    id: 'app.empty.subtitle',
    description: 'Empty card paragraph label',
    defaultMessage: 'Select the city you want to get the report for',
  },
  forecasts: {
    id: "app.home.forecasts",
    description: 'Title of the forecasts section',
    defaultMessage: "Forecasts of the day"
  },
  requestError: {
    id: 'app.errors.request',
    description: 'Error message when a request fails',
    defaultMessage: 'Connection Error'
  },
  englishSelectLabel: {
    id: 'app.lang.en',
    description: 'Title of the label for the english option for multi language select',
    defaultMessage: 'English',
  },
  spanishSelectLabel: {
    id: 'app.lang.es',
    description: 'Title of the label for the spanish option for multi language select',
    defaultMessage: 'Spanish',
  },
  tutorialInfo: {
    id: "app.tutorial.info",
    description: "Tutorial text",
    defaultMessage: "To see this tutorial again, you can click on the white info button placed on the upper right corner, next to the selected language icon",
  },
  tutorialLang: {
    id: "app.tutorial.lang",
    description: "Tutorial text",
    defaultMessage: "To change the language you can click on the flag icon on the right side, where you will see the available languages in this app to change it anytime",
  },
  tutorialCitySelect: {
    id: "app.tutorial.city.select",
    description: "Tutorial text",
    defaultMessage: "To get the weather and forecasts from a city, select one in the selector shown above, once selected, please press the blue button \"Get Report\"",
  },
  tutorialReset: {
    id: "app.tutorial.reset",
    description: "Tutorial text",
    defaultMessage: "If you want to reset the data and the selected city, press the red button \"Reset\"",
  },
  tutorialWeatherCard: {
    id: "app.tutorial.weather.card",
    description: "Tutorial text",
    defaultMessage: "In this card you can see the weather data from the city selected previusly, the weather results shown are for the current day",
  },
  tutorialForecasts: {
    id: "app.tutorial.forecasts",
    description: "Tutorial text",
    defaultMessage: "In this section you will see the forecasts corresponding each day of the next 5 ones, here the climatic forecasts are shown in intervals of 3 hours"
  },
  tutorialTitle: {
    id: "app.tutorial.title",
    description: 'Title for tutorial modal',
    defaultMessage: "Step by step guide"
  },
  close: {
    id: "app.utilities.close",
    description: 'Close label',
    defaultMessage: "Close"
  },
  next: {
    id: "app.utilities.next",
    description: 'Next label',
    defaultMessage: "Next"
  },
  done: {
    id: "app.utilities.done",
    description: 'Done label',
    defaultMessage: "Done"
  },
});

export default messages;
