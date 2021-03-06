# dashboard

---

Deployment at http://dashboard-wonaval.herokuapp.com/

---


## OVERVIEW
<p>Personal dashboard that aggregates all the information you need for the day. Contains weather (api), upcoming events/to-do-list, notes section</p>

---

## WIREFRAME
![Wireframe 1 of 4](./assets/WF1.jpg)
![Wireframe 2 of 4](./assets/WF2.jpg)
![Wireframe 3 of 4](./assets/WF3.jpg)
![Wireframe 4 of 4](./assets/WF4.jpg)


---

## USER STORIES
- When I first visit, I am shown a homepage with site description.
- When I click on signup/login, I am taken to the login page to login
- When I click on the "Get Started" button or the "Don't have an account?" link? on the login page, I am taken to the signup page to enter my information
- After logging in, I am taken to the dashboard which shows my name, current date, an inspiration quote, weather, notes, and a calendar/task list
- When click on any of the cogs for the header, I am able to edit the name in the header
- When I click on any of the reload buttons for quote section, I will be able to see a new quote
- When I click on the reload for the weather section, I am able to get updated weather information
- When I expand the weather section, I am shown more weather detail
- When I expand the notes section, I will be able to add or delete notes
- When I expand the calendar/task list section, I am able to add, delete, or mark an event/task as completed
- When I click on the account link, I am taken to my account information and am able to delete my account
- When I click on the logout link, I am logged out and taken to the home page

---

## ROUTE INVENTORY


### /user Routes
| Route  | Path      | Description      |
| :---:  | :---      | :---             |
| POST   | /user     | Create new user  |
| PUT    | /user/:id | Update user info |
| GET    | /user     | Get user info    |
| DELETE | /user     | Delete user      |

### /config Routes

| Route  | Path      | Description      |
| :---:  | :---      | :---             |
| PUT    | /config   | Update location  |
| GET    | /config   | Get location     |
| DELETE | /config   | Delete location  |

### /event Routes

| Route  | Path      | Description      |
| :---:  | :---      | :---             |
| POST   | /event    | Create event     |
| GET    | /event    | Get all events   |
| DELETE | /event    | Delete event     |

### /note Routes (Stretch Goal)

| Route  | Path      | Description      |
| :---:  | :---      | :---             |
| POST   | /note     | Create note      |
| GET    | /note     | Get all notes    |
| DELETE | /note     | Delete notes     |
---

## DATABASE ERD
![ERD](./assets/P3-ERD.png)

---

## COMPONENT TREE
![Component Tree](./assets/P3-Comp-Tree.jpg)

---

## MVP CHECKLIST
- [x] Create user
- [x] Login/logout user
- [x] Update account information
- [x] Pull, display, and reload weather from API
- [x] Add, show, delete events

---

## STRETCH GOALS
- [ ] Add, show, delete notes
- [ ] Editable notes and events
- [ ] Pull, display, and reload quote from API
- [ ] Configurable sections based upon setting choices by user
- [ ] Password hashing and account information encryption
- [ ] Dark mode/Light mode
