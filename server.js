const express = require('express');
const app = express();


const port = 5000;
app.listen(port, () => console.log(`server started on port ${port}.`));


app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'not', lastName: 'arealperson'},
    {id: 2, firstName: 'another', lastName: 'name'},
    {id: 3, firstName: 'fake', lastName: 'person'}
  ];
  res.json(customers);
});