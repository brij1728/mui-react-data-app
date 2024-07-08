import { Container, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';

import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
}

export const DataPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [pageSize, setPageSize] = useState<number>(5);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'body', headerName: 'Body', width: 150 },
  ];

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>Data</Typography>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid 
          rows={posts} 
          columns={columns} 
          pageSizeOptions={[5, 10, 20]} 
          pagination 
          paginationModel={{ pageSize, page: 0 }} 
          onPaginationModelChange={(model) => setPageSize(model.pageSize)}
        />
      </div>
    </Container>
  );
};
