import React from 'react'
import Navbar from '../../../components/nav/Navbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import './new.scss'
const New = () => {
    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>Add new User</h1>
                </div>
                <div className="center">
                    <div className="left">
                        <img src="https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-20.jpg" alt="sdklsk" />
                    </div>

                    <div className="right">
                        <form action="">
                            <div className="formInput">
                                <label htmlFor='img'>Image: <DriveFolderUploadIcon className='icon' /></label>
                                <input type="file" id='img' style={{ display: "none" }} />
                            </div>
                            <div className="formInput">
                                <label >UserName</label>
                                <input type="text" placeholder='js_dev' />
                            </div>
                            <div className="formInput">
                                <label >Name And SirName</label>
                                <input type="text" placeholder='Adeel Nasir' />
                            </div>
                            <div className="formInput">
                                <label >Eamil</label>
                                <input type="email" placeholder='adnas2gmail.com' />
                            </div>
                            <div className="formInput">
                                <label >Phone</label>
                                <input type="text" placeholder='Your Contact Number' />
                            </div>
                            <div className="formInput">
                                <label >Password</label>
                                <input type="password" placeholder='password' />
                            </div>
                            <div className="formInput">
                                <label >Adress</label>
                                <input type="text" placeholder='Address' />
                            </div>
                            <div className="formInput">
                                <label >Country</label>
                                <input type="text" placeholder='Country' />
                            </div>
                            <div className="formInput">
                                <button>Add</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New