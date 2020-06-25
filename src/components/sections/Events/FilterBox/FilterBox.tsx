import React from 'react';

interface Props {
    eventTypes: { name: string, id: string }[],
    filters: string[],
    setFilters: React.Dispatch<React.SetStateAction<string[]>>,
}

const FilterBox: React.FC<Props> = ({
    eventTypes,
    filters,
    setFilters
}) => (
    <div className="w-full px-12 py-8 mx-40 bg-gray-200 max-w-content text-primary">
        <label className="ml-3 smallcaps">filters</label>
        <div className="flex flex-row">
            {eventTypes.map(eT => (
            <div className="filterChip">
                <input type="checkbox" id={eT.id} onChange={e => e.target.checked? setFilters(filters.concat(eT.id)): setFilters(filters.filter(f => f !== eT.id))} />
                <label htmlFor={eT.id}>{eT.name}</label>
            </div>
            ))}
        </div>
    </div>
)

export default FilterBox;