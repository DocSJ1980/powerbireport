import React from 'react'

const PowerbiReport = () => {
    return (
        <div className='h-screen w-screen overflow-hidden flex justify-center items-center'>
            <iframe
                title="Report Section"
                width="100%"
                height="100%"
                src="https://app.powerbi.com/view?r=eyJrIjoiZjMzZDQwOWMtMDc5NS00NDdhLWFmMGUtMDU5YjkxYWVkZmYyIiwidCI6IjQ1N2Y4MWU0LWMzODAtNDViNC05ZDU1LTczYWVmNTc2ZmQ2NCIsImMiOjl9"
                frameBorder="0"
                allowFullScreen="true"
            />
        </div>
    )
}

export default PowerbiReport
