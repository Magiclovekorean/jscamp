import { useId, useState, useRef } from "react"

const useSearchForm = ({ idTechnology, idLocation, idExperienceLevel, idText, onSearch, onTextFilter }) => {
  const timeoutId = useRef(null)
  const [searchText, setSearchText] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget.form || event.currentTarget
    const formData = new FormData(form)

    const filters = {
      technology: formData.get(idTechnology),
      location: formData.get(idLocation),
      experienceLevel: formData.get(idExperienceLevel)
    }

    onSearch(filters)
  }

  const handleTextChange = (event) => {
    const text = event.target.value
    setSearchText(text)

    if (timeoutId.current) {
      clearTimeout(timeoutId.current)
    }

    timeoutId.current = setTimeout(() => {
      onTextFilter(text)
    }, 500)
  }

  // 👇 aquest return ha d’estar dins de la funció
  return {
    searchText,
    handleSubmit,
    handleTextChange
  }
}

export function SearchFormSection({ onTextFilter, onSearch, initialText, onResetFilters, filters }) {
  const idText = useId()
  const idTechnology = useId()
  const idLocation = useId()
  const idExperienceLevel = useId()

  const inputRef = useRef()

  const { handleSubmit, handleTextChange } = useSearchForm({
    idTechnology, idLocation, idExperienceLevel, idText, onSearch, onTextFilter
  })

  const handleClearInput = (event) => {
    event.preventDefault()
    inputRef.current.value = ""
    onTextFilter("")
  }

  return (
    <section className="jobs-search">
      <h1>Encuentra tu próximo trabajo</h1>
      <p>Explora miles de oportunidades en el sector tecnológico.</p>

      <form onChange={handleSubmit} id="empleos-search-form" role="search">
        <div className="search-bar">
          <input
            className="noBorder"
            ref={inputRef}
            name={idText}
            id="empleos-search-input"
            type="text"
            placeholder="Buscar trabajos, empresas o habilidades"
            onChange={handleTextChange}
            defaultValue={initialText}
          />
          <button onClick={handleClearInput}>✖︎</button>
        </div>

        <div className="search-filters">
          <select name={idTechnology} onChange={handleSubmit} value={filters.technology} id="filter-technology">
            <option value="">Tecnología</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="react">React</option>
            <option value="nodejs">Node.js</option>
            <option value="java">Java</option>
            <option value="csharp">C#</option>
            <option value="c">C</option>
            <option value="c++">C++</option>
            <option value="ruby">Ruby</option>
            <option value="php">PHP</option>
          </select>

          <select name={idLocation} value={filters.location} onChange={handleSubmit} id="filter-location">
            <option value="">Ubicación</option>
            <option value="remoto">Remoto</option>
            <option value="cdmx">Ciudad de México</option>
            <option value="guadalajara">Guadalajara</option>
            <option value="monterrey">Monterrey</option>
            <option value="barcelona">Barcelona</option>
          </select>

          <select name={idExperienceLevel} onChange={handleSubmit} value={filters.experienceLevel} id="filter-experience-level">
            <option value="">Nivel de experiencia</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid-level</option>
            <option value="senior">Senior</option>
            <option value="lead">Lead</option>
          </select>

          <button onClick={onResetFilters}>Resetar filtros</button>
        </div>
      </form>
    </section>
  )
}
import { JobListings } from "../components/JobListings.jsx"