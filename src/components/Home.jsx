import { Box,Chip , IconButton, Typography } from '@mui/material'
import CalendarViewMonthOutlinedIcon from '@mui/icons-material/CalendarViewMonthOutlined';
import { React,useMemo, useState, useEffect } from 'react'
import AxiosInstance from './Axios';
import { use } from 'react';
import {MaterialReactTable} from 'material-react-table'
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router';
import DeleteIcon from '@mui/icons-material/Delete';

const Home = () => {

    const [myData, setMyData] = useState([])

    const Getdata = () => {
        AxiosInstance.get('cricketteam/').then((res) => {
            setMyData(res.data)
        })
    }

    useEffect(() => {
        Getdata()
    }, [])

    console.log(myData);

    const columns = useMemo(
        ()=>[
            {
                accessorKey:'name',
                header :'Name',
            },
            {
                accessorKey:'city_details.name',
                header:'City',
            },
            {
                accessorKey:'league_details.name',
                header:'League',
            },
            {
                accessorKey:'area',
                header:'Area',
            },
            {
                accessorKey:'ground',
                header:'Home Ground',
            },
            {
                accessorKey:'characteristics_name',
                header:'characteristics',
                Cell:({cell})=>(
                    <div style={{
                        display:'flex',
                        gap:'8px',
                        flexWrap:'wrap'
                    }}>
                        {
                            cell.getValue()?.map((char,index)=>(
                                <Chip key={index} label={char}/>
                            ))
                        }
                    </div>
                )
            },
            // {
            //     accessorKey:'description',
            //     header:'Description',
            // },
        ],
        []
    )

    return (
        <>
            <Box className={'Topbar'}>
                <CalendarViewMonthOutlinedIcon/>
                <Typography className='MuiListSubheader-root' sx={{ marginLeft: '15px', fontWeight: 'bold', variant: 'subtitle2' }}>
                    View all team!
                </Typography>
            </Box>
            <MaterialReactTable
            columns = {columns}
            data = {myData}
            enableRowActions
            renderRowActions={({row})=>(
                <Box sx={{display:'flex',flexWrap:'noWrap',gap:'8px'}}>
                    <IconButton color='primary' component={Link} to={`edit/${row.original.id}`}>
                        <EditIcon/>
                    </IconButton>
                    <IconButton color='error' component={Link} to={`delete/${row.original.id}`}>
                        <DeleteIcon/>
                    </IconButton>
                </Box>
            )}
            />
        </>
    );
}

export default Home;