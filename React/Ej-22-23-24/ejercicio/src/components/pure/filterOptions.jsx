import React from 'react';

import FilterContainer from '../container/filterContainer';

const Filteroptions = () => {

    return (
        <div className='filters'>
            {/* Filter Containers */}
            <FilterContainer filter='SHOW_ALL'>
                ALL
            </FilterContainer>
            <FilterContainer filter='SHOW_ACTIVE'>
                ACTIVE
            </FilterContainer>
            <FilterContainer filter='SHOW_COMPLETED'>
                COMPLETED
            </FilterContainer>
        </div>
    );
};


export default Filteroptions;
