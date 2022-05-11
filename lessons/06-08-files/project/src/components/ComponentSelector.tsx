import { AppContentType } from "../model/AppContentType";

export function ComponentSelector({selectedType, setSelectedType}: {selectedType: AppContentType, setSelectedType: (type: AppContentType) => void}) {  
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedType(event.target.value as AppContentType)
    }
  
    return (
      <form>
        <select value={selectedType} onChange={handleChange}>
            {Object.values(AppContentType).map((type: AppContentType) => {
                return (
                    <option value={type}>{type}</option>
                )
            })}
        </select>
      </form>
    )
  }