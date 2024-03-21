import CareerPath from "./Career"
const careerPaths =
[
  {
    "title": "Software Engineer",
    "description": "Lorem ipsum dolor sit amet consectetur."
  },
  {
    "title": "Network Administrator",
    "description": "Lorem ipsum dolor sit amet consectetur."
  },
  {
    "title": "Security Analyst",
    "description": "Lorem ipsum dolor sit amet consectetur."
  },
  {
    "title": "Digital Forensic Analyst",
    "description": "Lorem ipsum dolor sit amet consectetur."
  }
]


const Info = () => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl font-bold sm:text-4xl">Find your career path</h2>

            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero aliquid sint distinctio
              iure ipsum cupiditate? Quis, odit assumenda? Deleniti quasi inventore, libero reiciendis
              minima aliquid tempora. Obcaecati, autem.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {careerPaths.map((path, index) => (
              <CareerPath key={index} title={path.title} description={path.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
