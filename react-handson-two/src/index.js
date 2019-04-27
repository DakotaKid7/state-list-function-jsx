import React from 'react';
import ReactDOM from 'react-dom';

const States = (
    State,
    Idaho,Tennessee,Maine,Wisconsin
    Population,
    1.683 million, 6.651 million,1.331 million,5.779 million
    Capital,
    Boise,Nashville,Agusta,Madison
) => {
  return (
    <thead>
      <tr>
        <th>{State}</th>
        <th>{Population}</th>
        <th>{Capital}</th>
       </tr>
     </thead>
     <tbody>
         <tr>
             <td>{Idaho}</td>
             <td>{1.683 million}</td>
             <td>{Boise}</td>
         </tr>
         <tr>
             <td>{Tennessee}</td>
             <td>{6.651 million}</td>
             <td>{Nashville}</td>
         </tr>
         <tr>
             <td>{Maine}</td>
             <td>{1.331 million}</td>
             <td>{Agusta}</td>
         </tr>
         <tr>
             <td>{Wisconsin}</td>
             <td>{5.779 million}</td>
             <td>{Madison}</td>
         </tr>
        </tbody>

  );
};

ReactDOM.render(
  States(
    'State',
    'Idaho','Tennessee','Maine','Wisconsin'
    'Population',
    '1.683 million','6.651 million','1.331 million','5.779 million'
    'Capital',
    'Boise','Nashville','Agusta','Madison',
  ),
  document.getElementById('root')
);