import styled from 'styled-components'
import { media } from '../../../mediaQuries'

export const WebGLContainerWrapper = styled.div`
    height: 100%;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.24);
    box-sizing: border-box;
    border-radius: 8px;
    width: 341px;
    margin-left: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    ${media.lgDesktop} {
        width: 100%;
        margin-left: 0px;
        border: none;
    }
`
export const Wrapper = styled.span`
    margin-left: ${props => props.isDesktop ? '2px' : '12px'}; 
    margin-right: 1px;
    margin-top: ${props => props.isDesktop ? '3px' : '40px'};
    margin-bottom: 13px;
    display: flex;
    align-items: center;
`

export const RadioMark = styled.span`
    display: inline-block;
    position: relative;
    border: ${props => props.isActive ? '2px solid rgba(0, 0, 0, 0.0)' : '2px solid rgba(0, 0, 0, 0.3)'};
    width: 18px;
    background-color: ${props => props.isActive && '#0172B6'};
    height: 18px;
    left: 0;
    border-radius: 50%;
    margin-right: 10px;
    vertical-align: middle;
`

export const RadioInput = styled.input`
    position: absolute;
    visibility: hidden;
    display: none;
    &:checked + ${RadioMark} {
        &::after {
            content: '';
            display: block;
            width: 9px;
            height: 9px;
            border-radius: 50%;
            top: 16%;
            left: 15%;
            background-color: #FFF;
            position: absolute;
        }
    }
`
export const RadioLabel = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    margin-right: -10px;
    line-height: 10px;
    color: #0172B6;
`

export const CheckBoxWrapper = styled.div`
    display: flex;
    margin-top: 12px;
    margin-left: 13px;
    justify-content: space-around;
`
export const ZoomContainer = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    position: absolute;
    width: 40px;
    height: 87px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    bottom: 20px;
    right: 10px;
    span {
        font-size: 30px;
    }
`

export const HRLine = styled.span`
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
    width: 100%;
`
export const ShareIcon = styled.img`
    height: 80px;
    width: 80px;
    position: absolute;
    bottom: 0px;
    left: 10px;
    cursor: pointer;
`
export const DemoImage = styled.img`
   width: 297px;
    height: calc(100vh - 250px);
`
