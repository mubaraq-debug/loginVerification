import styled from 'styled-components';
import { size } from './breakpoints';


export const Flex = styled.div`
    display: flex;
    gap: 10%;
    color: gray;
    @media screen and (max-width: ${size.mobileL}){
        .right {
            display: none;
        }
    }

    &> .leftScreen {
        margin-left: 15rem;
        margin-top: 3rem;


    @media screen and (max-width: ${size.mobileL}) {
        margin-left: 4rem;
        margin-top: 3rem;
    }
    @media screen and (max-width: ${size.mobileM}) {
        margin-left: 1.7rem;
        margin-top: 1.5rem;
    }
    @media screen and (max-width: ${size.tablet}) {
        gap: 30px;
    }
    }
`
export const FormPart = styled.div`
    
    .email {
        display: flex;

        .personIcon {
            height: 40px;
            width: 40px;
            border: 1px solid gray; 
            outline: none;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            cursor: pointer;

            #icon {
                padding-top: 10px;
                padding-left: 10px;
                font-size: 1.3rem;
                cursor: pointer;
            }
        }

        input {
            height: 38px;
            width: 220px;
            border: 1px solid gray;
            margin-left: -2px;
            outline: none;
            padding-left: 15px;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            font-size: 14px;
            font-weight: 550;
        }
    }

    .password {
        display: flex;
        padding-top: 2rem;

        .passwordIcon {
            height: 40px;
            width: 40px;
            border: 1px solid gray; 
            outline: none;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            cursor: pointer;

            #icon {
                padding-top: 10px;
                padding-left: 10px;
                font-size: 1.3rem;
                cursor: pointer;
            }
        }

        input {
            height: 38px;
            width: 220px;
            border: 1px solid gray;
            margin-left: -2px;
            outline: none;
            padding-left: 15px;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            font-size: 14px;
            font-weight: 550;
        }

        .visibility {
            position: relative;
            right: 35px;
            top: 7px;
            font-size: 1.3rem;
            cursor: pointer;
        }
    }
`

export const MiddleLayer = styled.div`
    padding-top: 1.5rem;

    &> .rem {
        display: flex;

        #rem_me {
            height: 18px;
            width: 18px;
        }
        label {
            padding-left: 5px;
            font-size: 14px;
        }
        button {
            height: 50px;
            width: 70px;
            text-align: center;
            margin-left: 74px;
            margin-top: -10px;
            outline: none;
            border: 1px;
            border-radius: 5px;
            font-size: 1rem;
            cursor: pointer;
            background-color: rgb(48, 114, 238);
            color: #fff;
            font-weight: 600;
        }
    }

    &> .regFor {
        display: flex;
        width: 280px;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;

        p {
            cursor: pointer;
            font-weight: 500;
        }
    }

    &> .linethr {
        display: flex;
        align-items: center;
        margin-top: 1.5rem;

        #lefthr {
            width: 100px;
            height: 0.09px;
            position: relative;
            right: 10px;
        }
        #righthr {
            width: 100px;
            height: 0.09px;
            margin-right: 20px;
        }
        p {
            margin-right: 10px;
        }
    }

`
export const MediaLogin = styled.div`
    margin-top: 2rem;
    &> .mediabox {
        display: flex;
        padding-bottom: 1.5rem;
        color: #fff;

        .icon {
            // padding-top: 5px;
            padding-left: 15px;
            font-size: 1.3rem;
            height: 38px;
            width: 40px;
            border: 1px solid gray;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            cursor: pointer;
        }

        .text {
            height: 35px;
            width: 220px;
            border: 1px solid gray;
            margin-left: -2px;
            outline: none;
            padding-left: 15px;
            // padding-top: 5px;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            font-size: 14px;
            font-weight: 500;
            text-align: center;
            cursor: pointer;
        }
    }

    }
`
