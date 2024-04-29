import YButton from "../../../../../Components/YButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='d-inline-flex flex-column gap-2'>
            <span class="border">
            <div className='title m-3'>Адреса заведений</div>
            <div className='d-inline-flex flex-column gap-3 m-3'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                <YButton>Добавить филиал</YButton>
            </div>
            </span>
        </div>
    );
}

export default Addresses;