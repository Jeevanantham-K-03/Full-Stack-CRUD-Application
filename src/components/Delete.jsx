import { Box, Typography, Button } from '@mui/material'
import CalendarViewMonthOutlinedIcon from '@mui/icons-material/CalendarViewMonthOutlined';
import { React, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router';
import AxiosInstance from './Axios';
import MyMessage from './form/Message';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

const Delete = () => {
    const MyParameters = useParams()
    const MyId = MyParameters.id
    const [message, setMessage] = useState([])
    const [myData, setMyData] = useState({
        name: "",
        description: "",
        city: "",
        league: "",
        ground: "",
        area: "",
        characteristics: [],
    })
    const navigate = useNavigate()
    console.log('My data', myData)
    const Getdata = () => {
        AxiosInstance.get(`cricketteam/${MyId}/`).then((res) => {
            setMyData(res.data)
        })
    }

    useEffect(() => {
        Getdata()
    }, [])

    const DeleteRecord = (event) => {
        event.preventDefault()
        AxiosInstance.delete(`cricketteam/${MyId}/`)
            .then(() => {
                setMessage(
                    <MyMessage
                        addIcon={<CheckCircleOutlinedIcon sx={{ color: 'white' }} />}
                        messageColor={'green'}
                        messageText={'Cricket team has been deleted successfully!'}
                    />
                )
                setTimeout(() => {
                    navigate('/')
                }, 1500)
            })
    }
    return (
        <>
            <form onSubmit={DeleteRecord}>
                <Box>
                    {message}
                </Box>
                <Box className={'Topbar'}>
                    <CalendarViewMonthOutlinedIcon />
                    <Typography className='MuiListSubheader-root' sx={{ marginLeft: '15px', fontWeight: 'bold', variant: 'subtitle2' }}>
                        Are you sure that you want to delete this Team!
                    </Typography>
                </Box>

                <Box className='Textbox'>
                    <Typography >
                        You will be deleting the team <strong>{myData?.name}</strong> from <strong>{myData.
                            city_details?.name}</strong>
                    </Typography>
                </Box>
                <Box sx={{ marginTop: '20px' }}>
                    <Button className='MuiListSubheader-root' type='submit' variant="contained" fullWidth sx={{ fontSize: 'medium' }}>Delete the Team</Button>
                </Box>
            </form>
        </>
    );
}

export default Delete;