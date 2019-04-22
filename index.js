import React from 'react';
import ReactDOM from 'react-dom';

import TableRow from './TableRow';

const mockDatabase = [
  { _id: '123', name: 'Class 1', published: true },
  { _id: '583', name: 'Class 2', published: true },
  { _id: '954', name: 'Class 3', published: false },
  { _id: '384', name: 'Class 4', published: false },
  { _id: '183', name: 'Class 5', published: true },
  { _id: '007', name: 'Class 6', published: false },
  { _id: '304', name: 'Class 7', published: true },
  { _id: '729', name: 'Class 8', published: false },
  { _id: '734', name: 'Class 9', published: true },
];

const App = () => {
  const rows = mockDatabase.map((row, index) => {
    return <TableRow key={index} index={index} name={row.name} rowId={row._id} published={row.published.toString()} />
  })

  return (
    <div className="container">
      <table className="table">
        <thead>
        <tr>
          <th scope="col">&nbsp;</th>
          <th scope="col">Name</th>
          <th scope="col">Article ID</th>
          <th scope="col">Published</th>
        </tr>
        </thead>
        <tbody>
          { rows }
        </tbody>
      </table>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
