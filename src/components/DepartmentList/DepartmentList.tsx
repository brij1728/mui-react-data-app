import { Collapse, List, ListItem, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

import React from 'react';

const departmentData = [
  {
    name: 'Department 1',
    subDepartments: ['Sub 1', 'Sub 2', 'Sub 3'],
  },
  {
    name: 'Department 2',
    subDepartments: ['Sub A', 'Sub B', 'Sub C'],
  },
];

export const DepartmentList: React.FC = () => {
  const [open, setOpen] = React.useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <List>
      {departmentData.map((department, index) => (
        <div key={index}>
          <ListItem  onClick={() => handleClick(index)}>
            <ListItemText primary={department.name} />
            {open === index ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open === index} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {department.subDepartments.map((sub, idx) => (
                <ListItem key={idx} sx={{ pl: 4 }}>
                  <ListItemText primary={sub} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};

