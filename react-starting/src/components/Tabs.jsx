export default function Tabs({buttons, children, ButtonElement='menu'}){
    // const ButtonElement = buttonElement;
    return (
        <>
            <ButtonElement>
                    {buttons}
            </ButtonElement>
        {children}
        </>


    );
}