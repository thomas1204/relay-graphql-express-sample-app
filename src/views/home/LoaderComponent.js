import React from 'react';


const LoaderComponent = () => {
	return (
		<div className="col-12">
			<div className="p-3 text-center">
				<div className="spinner-grow text-dark" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		</div>
	)
};

export default LoaderComponent;


