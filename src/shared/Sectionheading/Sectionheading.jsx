import React from 'react';

const Sectionheading = ({heading}) => {
    return (
        <div>
            <h3 className='text-3xl font-bold text-center py-5'>
                {heading}
            </h3>
            
        </div>
    );
};

export default Sectionheading;