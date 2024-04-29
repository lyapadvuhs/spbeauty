import XButton from "../../../../Components/XButton";
import SecondaryButton from "../../../../Components/SecondaryButton";
function Heading() {
    return (
        <div className='d-flex flex-row justify-content-between m-5'>
            <h1 className='large-title'>Данные о компании</h1>
            <XButton>Закрыть запись</XButton>
        </div>
    );
}

export default Heading;