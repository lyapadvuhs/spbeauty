import Clickable from "./Clickable";
import styled from "styled-components";



function PrimaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '216px' : props.minWidth; 
    const Button = styled.div`
        background: white;
        border-radius: 24px;
        border: 1px solid #64748B;
        min-width: ${minWidth};
        color: #64748B;
        &:hover {
            opacity: 80%;
            border: 1px solid #ffffff;
        }
        &:active {
            opacity: 60%;
            border: 1px solid #ffffff;
        }
    `;
    return (
        <Clickable>
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default PrimaryButton;