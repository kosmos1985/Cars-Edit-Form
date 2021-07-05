# Installation:

1.  Install Node.js depending on the operating system that you use.
2.  Download the repository from https://gitlab.b-mind.pl/recruitment-task

* go to the repository folder and install dependencies `npm install` (terminal).

3.  Go to /api folder and install json-server data base*.

* install `json-server` using `npm install -g json-server` (terminal).

# Running scripts:

front-end (recruitment-task folder) - run `npm start` (terminal)
back-end (api folder) - run `json-server db.json --routes routes.json` (terminal)

Description:
Tha main page displays cars as a JSON data. Cars are being downloaded from the back-end using method `getCars`, which is defined in the `api.service.ts` file.

# Tasks:

## Basic:

1.  Create a component `CarComponent`.
2.  Use a created component to display cars.
3.  Use input decorator to transmit car data.
4.  Display the car information (id, make, model) and create some CSS styles.
5.  Handle car selection (click event) by using output decorator. 
    Do not forget to apply style-distinction to selected Car ( so you know which one is being currently selected ).
6.  Create Description interface with fields id, body and carId.
7.  When a user selects a car, download the description associated with it from the backend ('/api/descriptions?carId=x', where 'x' is car id).
8.  Create a component `DescriptionComponent` .
9.  Use a created component to display descriptions under the car they belong to.

## Advanced:

1.  Create a new form component you will use for creating/editing cars.
2.  Create a new route to modify existing cars and create new cars, use already created form component to modify car information.
3.  Add buttons for routes redirect for Car Creation and Car Edit.
4.  Add form validation - car make should be required and not be longer than 15 characters ( please display separate validation error when Required & max-length).
5.  Add API function for Car Creation / Car Edit in the `ApiService`.
6.  Create unit tests for a form component.

## Optional:

1. Make it possible to delete Cars.
2. Make it possible to add/edit Car Descriptions.
3. Breadcrumbs

## More advanced & optional - CarComponent && DescriptionComponent modification:

1. Create resolver for edited Car.
2. Create `CarExtended` class that extends Car class with descriptions and combine two "API gets" in one resolver:
   a) Car data
   b) Car descriptions for the given Car

3. Modify `CarComponent` to display `CarExtended` (with car descriptions).
4. Modify form component to write/edit car as well as car descriptions.


## Additional

1. Add NgRx to the project and make use of it.
