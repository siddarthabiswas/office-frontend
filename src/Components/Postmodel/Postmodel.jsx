import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


// form

import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [companiname, setCompaniName] = React.useState('')
    const [companilocation, setCompaniLocation] = React.useState('')
    const [companiposation, setCompaniPosation] = React.useState('')
    const [companicountry, setCompaniCountry] = React.useState('')
    const [jobtype, setJobType] = React.useState('')

    const navigate = useNavigate()
    const handelClick = async (e) => {
        const data = { companiname, companilocation, companiposation, companicountry, jobtype }
        const res = await axios.post('https://jobsarver.onrender.com/post', data)
        if (res.data) {
            navigate('/')
            setOpen(false)
        }
    }



    return (
        <div>
            <Button onClick={handleOpen}>Post Job</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className='modal-input'>
                            <TextField id="standard-basic" label="Company Name" onChange={(e) => setCompaniName(e.target.value)} />
                            <TextField id="standard-basic" label="Job Location" onChange={(e) => setCompaniLocation(e.target.value)} />
                            <TextField id="standard-basic" label="Position Name" onChange={(e) => setCompaniPosation(e.target.value)} />
                            <TextField id="standard-basic" label="Country Name" onChange={(e) => setCompaniCountry(e.target.value)} />

                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-standard-label">Types of Jobs</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={jobtype}
                                    onChange={(e) => setJobType(e.target.value)}
                                    label="Age"
                                >
                                    <MenuItem value={'Full Time'}>Full-Time Job</MenuItem>
                                    <MenuItem value={'Part-Time'}>Part-Time Job</MenuItem>
                                    <MenuItem value={'Seasonal Job'}>Seasonal Job</MenuItem>
                                    <MenuItem value={'Contract Job'}>Contract Job</MenuItem>
                                    <MenuItem value={'Temporary Job'}>Temporary Job</MenuItem>
                                </Select>
                            </FormControl> <br />
                            <button onClick={() => handelClick()}>Submit Now</button>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}