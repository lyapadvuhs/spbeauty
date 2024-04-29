import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';

const Option = styled.div`
    outline: none;
    border-radius: 0px;
    padding-right: 240px;
    color: #0F172A;
`;
const ButtonLeftWrapper = styled.div`
    &:hover {
        opacity: 80%;
    }
`;
const ButtonRightWrapper = styled.div`
    padding-left: 4px;
    &:hover {
        opacity: 80%;
    }
`;

function ListElement(props) {
    return (
        <div className='d-flex flex-row align-items-center align-self-stretch gap-2'>
            <Option className='flex-grow-1 py-3'>{props.children}</Option>
            <ButtonLeftWrapper>
                <IconOnlyButton icon={<EditIcon/>}/>
            </ButtonLeftWrapper>
            <ButtonRightWrapper>
               <IconOnlyButton icon={<RemoveIcon/>}/>
            </ButtonRightWrapper>
        </div>
    );
}

export default ListElement;