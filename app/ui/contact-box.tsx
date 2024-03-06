import Link from "next/link";

const ContactBox = () =>(
    <div className="shadow-2xl w-80 my-2 bg-neutral-900 rounded-md">
        <div className="flex flex-col items-center justify-center text-center p-3">
            <h4 className="mb-3 font-light text-white">"Your Stage, Our Expertise: Contact Us for Seamless Productions!"</h4>
            <Link type="button" href='/contact' className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white p-2 w-50 rounded-md">
                Let's Talk
            </Link>
        </div>
    </div>
)

export default ContactBox;