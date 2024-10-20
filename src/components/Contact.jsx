const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-b from-slate-100 to-slate-200 p-4 pt-32"
    >
      <div className="flex flex-col p-4 pr-8 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-600">
            Contact
          </p>
          <p className="py-6 text-gray-500">
            You can contact me through my mail id{" "}
            <a
              href="mailto:mandalpramit30@gmail.com"
              className="font-bold inline border-b-2 border-gray-600"
            >
              mandalpramit30@gmail.com
            </a>
          </p>
          <p>------- OR --------</p>
          <p className="py-4 text-gray-500">
            Submit the below form to get in touch with me
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/bdryvrrb"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 border-2 rounded-md "
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 border-2 rounded-md"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 border-2 rounded-md"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's connect
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
