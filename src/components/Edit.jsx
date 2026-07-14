import { React, useState, useEffect } from 'react'
import AxiosInstance from './Axios';
import { Box, Typography } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import TextForm from './form/TextForm';
import SelectForm from './form/SelectForm';
import MultipleSelecter from './form/MultiSelecter';
import DescriptionForm from './form/DescriptionForm';
import Button from '@mui/material/Button';
import { useFormik, yupToFormErrors } from 'formik'
import * as yup from 'yup';
import MyMessage from './form/Message';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { useNavigate, useParams } from 'react-router';

const Edit = () => {
    const MyParameters = useParams()
    const MyId = MyParameters.id

    const [city, setCity] = useState([])
    const [league, setLeague] = useState([])
    const [characteristics, setCharacteristic] = useState([])
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
    console.log('My data', myData)
    const navigate = useNavigate()

    console.log('city', city)
    console.log('league', league)
    console.log('characteristic', characteristics)

    const Getdata = () => {
        AxiosInstance.get('city/').then((res) => {
            setCity(res.data)
        })
        AxiosInstance.get('league/').then((res) => {
            setLeague(res.data)
        })
        AxiosInstance.get('characteristic/').then((res) => {
            setCharacteristic(res.data)
        })
        AxiosInstance.get(`cricketteam/${MyId}/`).then((res) => {
            setMyData(res.data)
        })

    }

    useEffect(() => {
        Getdata()
    }, [])

    const validationSchema = yup.object({
        name: yup
            .string("The name must be Text")
            .required('name is required'),
        ground: yup
            .string("The ground must be Text")
            .required(),
        area: yup
            .string("The area must be Text")
            .required(),
        characteristics: yup
            .array()
            .min(1, 'select at least one option'),
    })

    const formik = useFormik({
        initialValues: {
            name: myData.name,
            description: myData.description,
            city: myData.city,
            league: myData.league,
            ground: myData.ground,
            area: myData.area,
            characteristics: myData.characteristics,
        },
        enableReinitialize: true,
        validationSchema: validationSchema,

        onSubmit: ((values) => {
            AxiosInstance.put(`cricketteam/${MyId}/`, values)
                .then(() => {
                    console.log('Success full Submission')
                    setMessage(
                        <MyMessage
                            addIcon={<CheckCircleOutlinedIcon sx={{ color: 'white' }} />}
                            messageColor={'green'}
                            messageText={'Cricket team has been updated successfully!'}
                        />
                    )
                    setTimeout(() => {
                        navigate('/')
                    }, 1500)
                })
        })
    })

    console.log('Form values', formik.values)

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Box className={'Topbar'}>
                    <AddBoxIcon />
                    <Typography className='MuiListSubheader-root' sx={{ marginLeft: '15px', fontWeight: 'bold', variant: 'subtitle2' }}>
                        Edit a cricket team!
                    </Typography>
                </Box>
                <Box>
                    {message}
                </Box>
                <Box className={'FormArea'}>
                    <Box className={'FormField'}>
                        <TextForm
                            label={'Name'}
                            name='name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                        <Box sx={{ marginTop: '30px' }}>
                            <SelectForm
                                label={'City'}
                                options={city}
                                name='city'
                                value={formik.values.city}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.city && Boolean(formik.errors.city)}
                                helperText={formik.touched.city && formik.errors.city}
                            />
                        </Box>
                        <Box sx={{ marginTop: '30px' }}>
                            <TextForm
                                label={'Area'}
                                name='area'
                                value={formik.values.area}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.area && Boolean(formik.errors.area)}
                                helperText={formik.touched.area && formik.errors.area}
                            />
                        </Box>
                    </Box>
                    <Box className={'FormField'}>
                        <SelectForm
                            label={'League'}
                            options={league}
                            name='league'
                            value={formik.values.league}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.league && Boolean(formik.errors.league)}
                            helperText={formik.touched.league && formik.errors.league}
                        />
                        <Box sx={{ marginTop: '30px' }}>
                            <TextForm
                                label={'Home Ground'}
                                name='ground'
                                value={formik.values.ground}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.ground && Boolean(formik.errors.ground)}
                                helperText={formik.touched.ground && formik.errors.ground}
                            />
                        </Box>
                        <Box sx={{ marginTop: '30px' }}>
                            <MultipleSelecter
                                label={'Characteristic'}
                                options={characteristics}
                                name='characteristics'
                                value={formik.values.characteristics}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.characteristics && Boolean(formik.errors.characteristics)}
                                helperText={formik.touched.characteristics && formik.errors.characteristics}
                            />
                        </Box>
                        <Box sx={{ marginTop: '40px' }}>
                            <Button className='MuiListSubheader-root' type='submit' variant="contained" fullWidth sx={{ fontSize: 'large' }}>Submit </Button>
                        </Box>
                    </Box>
                    <Box className={'FormField'}>
                        <DescriptionForm
                            label={'Description'}
                            row={8}
                            name='description'
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
                        />
                    </Box>
                </Box>
            </form>
        </>
    );
}

export default Edit;