

const Hero=()=>{
    return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-extrabold text-blue-600 tracking-tight">Hello!</h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 mt-6 mb-10 font-light">React Developer</h2>
        <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-1">
        Contact Me
        </button>
    </section>
    )
}
 
export default Hero;