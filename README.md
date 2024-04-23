## Front-end Developer test — Nutrition Calendar

### Features

Upon opening the application, a card displaying today's meal quality options is shown. Users can select one of the three options describing the quality of their meals for the day.

Clicking on the date at the top opens a calendar where users can select any other date and navigate to its corresponding meal quality card.

If a meal quality is selected, a colored bar representing the corresponding quality will be displayed in the calendar beneath the date. If not selected, a simple gray translucent bar will be shown.

The mobile-first technique was used during development. The desktop version was made without media queries, using responsive technology.

### Requirements to this project

+ Minimal dependencies — only React and [classnames](https://www.npmjs.com/package/classnames)
+ The calendar is implemented in pure JS, without the use of third-party libraries.
+ All application state is managed within the components.

### Development

The application is created using [Create React App](https://create-react-app.dev/), so it can be run locally with. To do this, follow these steps
1. Clone project
2. `npm ci` — installing deps
3. `npm start` — start project in dev mode
4. Go to http://localhost:3000

There is also a Makefile with all the development commands: 
1. cloning project
2. `make install` (install deps)
3. `make start` (run in dev mode)
4. Go to http://localhost:3000
