import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${input}`);
    }
    return (
        <>
            <div className="nav">
                <div className="left" >
                    <div className="pot-head">
                    <Link to='/' className='link'>
                        <h2>pott's kitchin</h2>
                       
                    </Link>
                    </div>
                    <div><img className="logo" alt="nav-icon" src="https://t3.ftcdn.net/jpg/03/30/47/70/360_F_330477017_3VTSdHYUNJR8mNbPgkaaiDqnhuqJOrfH.jpg" /></div>
                </div>
                <div className="search">
                    <form className="inputform" onSubmit={handleSubmit}>
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            type="text" placeholder='search your recipe'
                        />
                    </form>
                </div>
                <div className="right">
                    <Link to={`/category/indian`} className="link">
                        <div>Indian</div>
                    </Link>
                    <Link to={`/category/american`} className="link">
                        <div>American</div>
                    </Link>
                    <Link to={`/category/british`} className="link" >
                        <div>British</div>
                    </Link>
                    <Link to={`/category/chinese`} className="link">
                        <div>Chinese</div>
                    </Link>
                    <Link to={`/category/thai`} className="link">
                        <div>Thai</div>
                    </Link>


                </div>
                
            </div>
        </>
    )
}

export default Navbar