import React from 'react'

export default function Detail() {
    return (
        <div className="container mx-auto grid grid-cols-2 gap-10">

            <div>
                <img src="./img/applephone.jpg" alt="" />
            </div>



            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Màn hình
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>

                        </tr>

                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Hệ điều hành
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>

                        </tr>

                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               Camera trước
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>

                        </tr>

                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Camera sau
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>

                        </tr>

                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Ram
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>

                        </tr>

                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                rom
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>

                        </tr>

                    

                    </tbody>
                </table>
            </div>




        </div>
    )
}
