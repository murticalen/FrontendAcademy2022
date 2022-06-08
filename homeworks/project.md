# SofaScore Frontend Academy 2022 - Project

The final academy project will be a smaller SofaScore application. We will utilize some of the SofaScore API routes to create the desired application.

Further in this document:

- [Project checkpoints](#checkpoints)
- [Basic domain introduction](#domain)
- [User stories](#user-stories)
- [Project technologies](#technologies)
- [Project structure tips](#project-structure)
- [API description](#api)
- [Deployment instructions](#deployment)

## Checkpoints

**You will present your project sometime mid-June, the date will be arranged later.**

There will be one mandatory checkpoint on May 31st, June 1st or between June 6th and 8th. We will arrange a Slack call and discuss your project status. You can also visit SofaScore office for the checkpoint if I am present.

Feel free to contact me on Slack when you've added something new, have a question and we can discuss it on a call or live.

Use checkpoints to get feedback, ask about difficulties with the domain, API, design, or development. Checkpoint calls could save you a lot of time.

## Domain

The main domain of an application will be sports. Since SofaScore routes are used, the domain model will mimic the one used at SofaScore.
In this chapter, I will first describe the basic entities used and their connection.

Basic entities are:

- **Unique Tournament** - Entity describing single competition (can be league, cup, ...). Examples of an unique tournaments: English Premier League (ID = 17), Uefa Champions League (ID = 7), Roland Garros (ID = 2480), ...
- **Tournament** - Entity describing a part of the competition, such as a group or a phase. Examples: Champions League Group A, NBA Regular Season, World Cup Knockout phase. Each event (match) is linked to a tournament, which is then **optionally** linked to a unique tournament. I.e. it may be linked, but it may not.
- **Category** - Parent entity for unique tournament(s). The category will be a common separator for tournaments. Examples of a category: English, Europe, ATP, Croatia, World, ...
- **Event** - Event is an entity representing a single match. Events are usually displayed as a part of event lists from where users can choose a single event and get its details. Examples of an event: Real Madrid - Barcelona, Dinamo - Hajduk, ...
- **Team** - Competitor in an event, i.e. a club, national team or a tennis player.

IMPORTANT NOTICE (once again): NOT EVERY TOURNAMENT HAS AN UNIQUE TOURNAMENT. Make sure you handle it, such bugs are often first presented during project demonstration. :(
Two handling options: You can skip those events in your app or show non-clickable tournament name instead of unique tournament.

If You find the domain confusing, feel free to contact me, and I will explain it more further.

## User stories

General story representing user flow:
The user comes to the application and sees the list of categories fetched. Users can then navigate to the category page of the desired category. On the category page, users can see events available for the selected category. Users can refresh the browser and the same category page should be displayed (category page has a separate route describing specific category). From the category page, users can navigate to the specific event details page. On the event, details page the user can find detailed data associated with the event.

User stories are sentences from the user's perspective. They can be pictured as user's requirements because they don't specify the technical side of the project. The technical side is left to the developers (this includes design too).

User stories are bellow: Stories in the **bold** are required, stories in the _italic_ are a further improvement, developers will decide if any of them should be implemented. You can also add extra stories which you think are fitting.

### Stories:

#### General UI

- **User should be able to use the app on the mobile device**
- **User should be able to use the app on the computer screen**
- _User can change application visual theme (dark / light)_

#### Sport page (Category List Page)

- **User can see all football categories for today (time zone UTC+2 - 7200s offset)**
- **User can click on the category and open/close category accordion to see/hide category events**
  - **User can click on the event and navigate to event page**
- _User can click on category name to open category page_
- _User can add/remove event(s) to Tracked events_
- _User can change the date for the category list (e.g. yesterday, today, tomorrow)_
- _User can change the sport of the page (e.g. tennis, ice-hockey or basketball)_

Technical note: you can implement sport page using either a) sport scheduled events route and grouping data on the frontend or b) category list and category events route. Pick the option which works the best for your layout and features.

#### _Category Page_

- _User can see all unique tournaments and events from the selected category on that date_
- _User can click on the event and navigate to event page_
- _User can add/remove event(s) to Tracked events_

#### Event Page

- **User can see teams playing in the event, score (if exists), date and time**
- _User can see event statistics_
- _User can see event extra information (e.g. venue info, referee, ...)_
- _User can add/remove event(s) to Tracked events_
- _User can see extra information about the event's unique tournament_

#### _Tracked Events Page_

- _User can see all tracked events_
- _User can remove event(s) from Tracked events_

#### _General features_

- _User can always see score and teams participating in the last 5 tracked events (e.g. at the bottom of the screen, on all pages)_

## Technologies

Technologies used in project:

- [React.js](https://reactjs.org/) and [Next.js](https://nextjs.org/docs/getting-started) - main
- [Styled components](https://styled-components.com) or **any other CSS in JS** technology
- [SWR](https://swr.vercel.app/) - for client side fetching and refreshing

There are constraints regarding UI libraries and frameworks. This project is a great opportunity to learn foundational CSS and HTML. Those skills will come in handy throughout your career, **so usage of Bootstrap, Foundation, or any other 3rd party framework or library is forbidden**.

## Project Structure

This chapter is informational and opinionated, so as such can be taken as advice.

In my experience structure with `components`, `modules`, `api` and `utils` have proven to be superior as application parts can be separated by usage and specificity.

Folders are placed in the `src` folder.

Definitions:

- `components` - Components that are domain agnostic and could exist in any application regardless of its domain (e.g. Button, Checkbox, ...). Those components are basic building blocks of application and more complex modules.
- `modules` - Modules are domain-bound units that serve a specific purpose (e.g. LoginForm, UserProfile). Modules usually produce side effects and are responsible for the logic and presentation part of an application
- `api` - Api folder contains route definitions and API methods (e.g. `postLogin`, `getUser`, ...). The api also includes utilities specific to API (e.g. `getJson`, `postJson`, `parseResponse`, ...)
- `utils` - Utilities are common helpers, types, test boilerplate (e.g. `numberSort`, ...)

## API

Applications will use SofaScore API, available on the route base: `https://academy.dev.sofascore.com/api/v1`.

When demonstrating your project, or to try it out from time to time, use can use production API route base: `https://api.sofascore.com/api/v1`. Do not use it all the time, because that endpoint has anti-scrapping logic and over-use will get you banned by our CDN.

NOTE: `https://academy.dev` endpoint might not have all data up to date. That's fine, but the structure is the same as the one from production API.

All other routes are generated by appending a suffix to the base written before.

| Path                                                                      | Response                                 | Example route                                                                       |
|:--------------------------------------------------------------------------|:-----------------------------------------|:------------------------------------------------------------------------------------|
| [/sport/{sport}/{date}/{offset}/categories](#Category-List)               | `{ categories: CategoryInfo[] }`         | https://academy.dev.sofascore.com/api/v1/sport/football/2021-05-07/7200/categories  |
| [/category/{categoryID}/scheduled-events/{date}](#Category-Events)        | `{ events: Event[] }`                    | https://academy.dev.sofascore.com/api/v1/category/1/scheduled-events/2021-05-07     |
| [/sport/{sport}/scheduled-events/{date}](#Sport-Scheduled-Events)         | `{ events: Event[] }`                    | https://academy.dev.sofascore.com/api/v1/sport/football/scheduled-events/2021-05-07 |
| [/event/{eventID}](#Event-Details)                                        | `{ event: Event }`                       | https://academy.dev.sofascore.com/api/v1/event/8897123                              |
| [/event/{eventID}/statistics](#Event-Statistics)                          | `{ statistics: PeriodStatistics[] }`     | https://academy.dev.sofascore.com/api/v1/event/8897123/statistics                   |
| [/team/{teamID}/image](#Team-Image)                                       | Team logo PNG image                      | https://academy.dev.sofascore.com/api/v1/team/31/image                              |
| [/unique-tournament/{uniqueTournamentID}](#Unique-Tournament)             | `{ uniqueTournament: UniqueTournament }` | https://academy.dev.sofascore.com/api/v1/unique-tournament/17                       |
| [/unique-tournament/{uniqueTournamentID}/image](#Unique-Tournament-Image) | Unique Tournament logo PNG image         | https://academy.dev.sofascore.com/api/v1/unique-tournament/17/image                 |

### Category List

`/sport/{sport}/{date}/{offset}/categories`

The route will return the list of categories for provided URL parameters. The most important response fields in the category are:

- category -> name, ID and priority of a category (priority is used to sort categories by popularity, e.g. England before Poland, etc.)
- uniqueTournamentIds -> list of ID-s of unique tournaments with events in this category (use those ID-s to render images with category)

Route takes 3 required URL parameters:

- sport -> categories for provided sport name are returned (e.g. `football`, `basketball`, `tennis`)
- date -> categories with event(s) for provided date are returned, date is passed in `YYYY-MM-DD` format (e.g. `2020-05-07`, `2020-11-13`)
- offset -> offset in seconds from UTC, can be negative and positive (e.g. `7200` for UTC+2 - Croatia , `-3600` for UTC-1 - Portugal)

### Category Events

`/category/{categoryID}/scheduled-events/{date}`

Route will return the list of events for provided URL parameters. The most important fields in the event entity are:

- tournament -> has unique-tournament entity which could be used to show image and competition name
- status -> has event status data (e.g. `notstarted`, `inprogress`, `finished`)
- winnerCode -> marks event winner (0 -> no info, 1 -> home team won, 2 -> away team won, 3 -> draw)
- homeScore (awayScore) -> score for event (can have multiple keys, use 'display')
- homeTeam (awayTeam) -> details about participating teams (name, ID can be used to get team logo, ...)
- startTimestamp -> event start time in UTC

The route takes 2 required URL parameters:

- categoryID -> events for the provided category are returned (each category is connected with sport, so England football and England basketball categories have separate ID-s)
- date -> events for the provided date are returned (note that there is no offset parameter because the route will return all events for provided date, for any time zone so from the current time zone some events can be yesterday and some tomorrow). Date formatting is the same as described above (`YYYY-MM-DD` format)

NOTE: This route will return the events for all timezones on that date, you should show those only valid for your timezone.

### Sport Scheduled Events

`/sport/{sport}/scheduled-events/{date}`

Analogous with category scheduled events is the sport scheduled events route. It takes 2 parameters: sport slug and date in the same format as above. It returns all the events for the given sport and date, not just those filtered by category.

### Event Details

`/event/{eventID}`

Returns detailed information about the single event. Adds an extra layer of details on the previously explained event entity. Extra information includes for example venue, referee, or attendance date if available.

The route takes 1 required URL parameter - event id for which you want to fetch event details.

### Event Statistics

`/event/{eventID}/statistics`

Returns statistics for the event, grouped by period. Period value: `ALL` represents total statistics, other periods are halfs (football, rugby), quarters (basketball, american football, ...) or something else (e.g. thirds in ice-hockey).

Note: This task is not required, but it's a cheap way to add a cool feature. :)

The route takes 1 required URL parameter - event id for which you want to fetch event statistics.

### Team Image

`/team/{teamID}/image`

Returns PNG image of a team logo.

### Unique Tournament

`/unique-tournament/{uniqueTournamentID}`

Returns detailed information about the unique tournament.

### Unique Tournament Image

`/unique-tournament/{uniqueTournamentID}/image`

Returns PNG image of a unique tournament logo.

## Deployment

**Deployment is optional.**

When the application gets to the final stage, it would be great to think about the deployment possibility. Deploying the application will allow users to access it via an Internet connection on some URL.

Suggested free deployment providers are:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Heroku](https://heroku.com)

If you are deploying your app to a service, make sure the URL has the word "sofa" in it. E.g. If deployed to vercel, a possible valid URL would be "murticalen-sofa-project.vercel.app".