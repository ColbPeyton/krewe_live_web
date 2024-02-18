


const Footer = () => {

    return(
        <div className="bg-neutral-900 text-white flex flex-col fixed left-0 bottom-0 w-full text-center p-4">
            <div className="flex flex-col justify-center content-center text-center rounded-md px-3 py-3 text-sm text-xl text-yellow-400">
                <h1>"It all begins right here"</h1>
            </div>
            <div className="flex flex-col space-y-2">
                <div className="flex-1">
                    <p>Office: <a href="tel:5043741401" className="hover:text-yellow-400">(504)-374-1401</a></p>
                </div>
                <div className="flex-1">
                    <p>Mobile: <a href="tel:5049133702" className="hover:text-yellow-400">(504)-913-3702</a></p>
                </div>
                <div className="flex-1">
                    <p>Email: <a href="mailto:info@krewelive.com" className="hover:text-yellow-400">info@krewelive.com</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer