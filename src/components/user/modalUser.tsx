import React from "react";
import {  A, StyledButtonUser, StyledContainerUser, StyledHeaderUser } from "./styled.user";
import styled from "styled-components";




const ModalUser = ({showModal, setShowModal}:any) => {
    

    return(
        <div>
            {showModal ? (
                <div>
                    <StyledContainerUser>      
                        <StyledHeaderUser>Header</StyledHeaderUser>
                        <img src="https://img.favpng.com/15/13/21/computer-icons-user-login-desktop-wallpaper-png-favpng-50cVSt0m1jw7SRtPEv8KvVUvF.jpg" 
                        style={{width: "80px", height: "55px"}} />

                        <div style={{ margin:"10px",fontFamily:"sans-serif",fontSize:"16px"}}>
                            Nombre Usuario 
                        </ div>
                        <StyledButtonUser><A href="http://localhost:3000/profile_user">Ver perfil</A>
                            
                        </StyledButtonUser>
                    </StyledContainerUser>
                </div>
            ) : null }
        </div>
    );
}

export default ModalUser;