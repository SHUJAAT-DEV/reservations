# Project Reservations

# Folder Stucture

```
    ├── Yassir Reservations
    │   ├── public
    │   │   ├── index.html
    │   │   ├── favicon.png
    │   │   ├── minifest.json
    │   │   └── robots.txt
    │   ├── src
    │   │   ├── components
    │   │   │   ├── atoms
    |   |   │   │   ├── Input.tsx
    |   |   │   │   └── Select.tsx
    │   │   │   ├── fundations
    |   |   │   │   ├── FilterDrawer.tsx
    |   |   │   │   ├── Search.tsx
    |   |   │   │   └── Table.tsx
    │   │   │   └── pages
    |   |   │   │   ├── Reservations.tsx
    │   │   ├── mockupdata
    │   │   │   ├── serverResponse.json
    │   │   ├── modal
    │   │   │   ├── Reservations.ts
    │   │   ├── App.js
    │   │   └── index.js
    |   |   └── index.css
    │   ├── package.json
    │   ├── tsconfig.json
    │   ├── tailwind.config.js
    │   ├── README.md
```

## Requirements

1. Scenario: Display the reservations as a list
   `Given User is in the reservation list section`
   `Then List of reservations for upcoming days is displayed`

2. Scenario: Filter reservations
   `Given User is in the reservation list section `
   `When User filters by date / status / shift / area`
   `Then List of reservations is updated based on the filters selected`
3. Scenario: Sort reservations
   `Given User is in the reservation list section`
   `When User clicks on a field to sort`
   `Then List of reservations is updated based on the sorting applied`

## Solution / Implementation steps

1.  step-1:
    `Selected and Installed the libraries, like tailwindcss and react-table`

2.  step-2:
    `Break down the required page into reusable components. Table, Drawer, Search   component, etc `

3.  step-3:
    `To achieve the first scenario display reservations as a list, I fetched the given mock data and created columns according to the data. After creating the Data and Columns I created the Table Component and passed the Data and Columns for rendering`

4.  step-4:
    `For Scenario: Sort reservations, I used the react-table sort hook -> useSortBy. This react-table library will help to accomplish all the new requirements e.g., user wants to sort data only specific columns, then we can easily accomplish this just by adding the attribute in Columns disableSortBy: true`
5.  step-2:
    `For Filter reservations, I assumed that we need a global filter from where we can filter through status, area, shift, and date. For this reason, I (made a decision) have created a drawer component for filter requirements, when the user clicks on the filter icon it will open the drawer component and the user can easily filter their required data. `

## Assumptions

1.  I assumed that we don't need an option on the column for the filter, e.g status column we can add a select variant to the filter, etc.

2.  I also assumed that we need a date range filter not the dividual filter for the date.

## Improvement /optimization

1. We can use a state management library to maintain the global filters.
2. For the large size of the tailwindcss class we can use twin. macro to minimize/clean the code.

Note:
Please consider the css missing things , I have done in very short time .
Date range filter is not fully implemented due short time.
I don't used any component based libraries (Material Ui, antD, Chakra Ui etc) to acheive the requirement.Through this libraries we can easily acheived the given requirment.
