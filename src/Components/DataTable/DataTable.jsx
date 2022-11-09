import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllUser } from '../../Api/UserRequest';

const columns = [
  {
    headerName: 'Sl.NO',
    type: 'number', width: 90
  },
  { field: 'firstName', headerName: 'First Name', width: 150 },
  { field: 'lastName', headerName: 'Last Name', width: 130 },
  { field: 'username', headerName: 'User Name', width: 180 },
  {
    field: 'number',
    headerName: 'Contact',
    width: 150,
  },
  {
    field: 'followers',
    headerName: 'Followers',
    type: 'number',
    width: 120,
  },
  {
    field: 'following',
    headerName: 'Following',
    type: 'number',
    width: 120,
  },
  { field: 'worksAt', headerName: 'worksAt', width: 150 },
  { field: 'livesin', headerName: 'livesin', width: 150 },
  { field: 'Country', headerName: 'Country', width: 150 },
  
];



export default function DataTable() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await getAllUser();
      setUser(data);
    };
    fetchUsers();
  }, []);


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={user}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(user) => user._id}
      />
    </div>
  );
}
