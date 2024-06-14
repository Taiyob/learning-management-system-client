const Feedback = () => {
    return (
        <div className="bg-[#f5f7fa] p-20">
            <article className="max-w-4xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50">
                <div className="w-full mx-auto space-y-4 text-center">
                    <h1 className="text-4xl font-bold leadi md:text-5xl">Feedback</h1>
                    <div className="w-1/4 border-b-8 border-blue-600 ml-80"></div>
                    <p className="w-full text-2xl text-gray-400">Stop guessing what to learn next and start making progress faster based on your current skill level and experience.</p>
                </div>
            </article>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container px-6 py-12 mx-auto">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="p-6 bg-white rounded shadow-md">
                            <p>An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota aliquip democritum pro in, nec democritum intellegam ne. Propriae volutpat dissentiet ea sit, nec at lorem inani tritani, an ius populo perfecto vituperatoribus. Eu cum case modus salutandi, ut eum vocent sensibus reprehendunt.</p>
                            <div className="flex items-center mt-4 space-x-4">
                                <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                <div>
                                    <p className="text-lg font-semibold">Leroy Jenkins</p>
                                    <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 bg-white rounded shadow-md">
                            <p>An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota aliquip democritum pro in, nec democritum intellegam ne. Propriae volutpat dissentiet ea sit, nec at lorem inani tritani, an ius populo perfecto vituperatoribus. Eu cum case modus salutandi, ut eum vocent sensibus reprehendunt.</p>
                            <div className="flex items-center mt-4 space-x-4">
                                <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                <div>
                                    <p className="text-lg font-semibold">Leroy Jenkins</p>
                                    <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Feedback;