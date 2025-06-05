import React, { useState } from 'react'

export default function Insights() {
  const [searchTerm, setSearchTerm] = useState('')

  const pdfs = [
    { title: "React Basics", link: "#" },
    { title: "Node.js Guide", link: "#" },
    { title: "MongoDB Tips", link: "#" },
    { title: "JavaScript Mastery", link: "#" },
    { title: "UI/UX Design", link: "#" },
    { title: "TypeScript Handbook", link: "#" },
  ]

  const filteredPdfs = pdfs.filter(pdf =>
    pdf.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className='w-full px-28 pt-[6rem] min-h-screen mt-16 bg-blue-200 p-6 rounded-[4rem]'>

    <h1 className="text-2xl  font-semibold  text-blue-800">Insights (PDFs)</h1>
      {/* <p className='text-1xl uppercase ' >Note on the way  ____________________</p> */}

<p className='text-5xl font-bold py-2.5  uppercase leading-11' >Discover your pdf </p>

<h6 className='pb-6 text-2xl  w-3xl'>RBU Note is a free web application that provides notes of rbu teacher at one place, You can access notes any where without downloading it .</h6>
   
      {/* Search Bar */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search PDFs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg border border-black-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => setSearchTerm('')}
          className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
        >
          Clear Filter
        </button>
      </div>

      {/* PDF Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredPdfs.map((pdf, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">
            <h3 className="text-lg font-medium text-gray-800 mb-2">{pdf.title}</h3>
            <a
              href={pdf.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View PDF
            </a>
          </div>
        ))}
        {filteredPdfs.length === 0 && (
          <p className="col-span-full text-center text-gray-600">No PDFs found.</p>
        )}
      </div>
    </div>
  )
}
