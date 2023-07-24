import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


export default function TransitionsModal({ data, id }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const filterdata = data.filter((data) => {
        return data._id === id
    })
    const navigate = useNavigate()
    const handelClick = () => {
        setTimeout(() => {
            setOpen(false)
            navigate('/')
        }, 1000);

        toast('Apply Sucessfully!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    }

    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>Apply Now</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            <h1>Please Check This Form</h1>
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }} className='apply-modal'>




                            <Card>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="https://images.pexels.com/photos/7070/space-desk-workspace-coworking.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Company Name : {filterdata[0].companiname}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <h2>Company Location : {filterdata[0].companilocation}</h2>
                                        <h2>Company Posation : {filterdata[0].companiposation}</h2>
                                        <h2>Country Name : {filterdata[0].companicountry}</h2>
                                        <h2>Job Type : {filterdata[0].jobtype}</h2>
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <button className='see-button' onClick={() => handelClick()}>Submit</button>
                                </CardActions>
                            </Card>
                            <ToastContainer />
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}