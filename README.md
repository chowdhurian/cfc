# Code for Canada 🇨🇦

## Objectives
[x] Find the number of violations in each category
[x] Find the earliest and latest violation date for each category

## Data structure
The data is a comma-delimited csv made up of 400+ entries like 
the following:

```
{ 
  violation_id: '204851',
  inspection_id: '261019',
  violation_category: 'Garbage and Refuse',
  violation_date: '2012-01-03 0:00',
  violation_date_closed: '2012-02-02 0:00',
  violation_type: 'Refuse Accumulation'
}
```

## To run the program

1. Name a csv the same as the one given originally 😅
2. Put the csv in the same directory as index.js
3. Run:

`node index.js`

## Possible upgrades
[ ] Make it take a command line argument so the filename doesn't have to
be hardcoded