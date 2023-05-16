import styled from 'styled-components'
import { media } from '../../../mediaQuries'

export const MapContainer = styled.div`
    height: calc(100vh - 193px);
    height: ${props => props.fullHeight ? props.fullHeight : 'calc(100vh - 193px)'};
    width: 100%;
    box-shadow: 0px 0px 21px rgba(0, 0, 0, 0.1);
    border-radius: 7px;
    position: relative;
    ${media.lgDesktop} {
        height: 100vh;
    }
`
export const MapHolder = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 7px;
`
export const SideBarIcon = styled.img`
    width: 80px;
    cursor: pointer;
    position: absolute;
    height: 80px;
    left: 20px;
    top: 15px;
    ${media.lgDesktop} { 
        display: none;
    }
`
export const ViewContainer = styled.span`
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 35px;
    ${media.lgDesktop} {
        top:70px ;
    }
`

export const LeftViewOption = styled.span`
    height: 60px;
    padding: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    border-radius: 10px 0px 0px 10px;
    ${media.lgDesktop} {
        height: 40px;
        font-size: 12px;
        padding: 14px;
    }

    ${({ active }) => active
    ? `
        background: #000000;
        color: #FFFFFF;
    `
    : `
        background: #FFFFFF;
        color: #000000;
    `}
    
`

export const RightViewOption = styled.span`
    height: 60px;
    padding: 20px;
    border-radius: 0px 10px 10px 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    ${media.lgDesktop} {
        height: 40px;
        font-size: 12px;
        padding: 14px;
    }

    ${({ active }) => active
    ? `
        background: #000000;
        color: #FFFFFF;
    `
    : `
        background: #FFFFFF;
        color: #000000;
    `}

`
