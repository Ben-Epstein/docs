import React from 'react';

export default function ImageImport({ src, alt }) {
	const cloudinaryURL = `https://res.cloudinary.com/dhopxs1y3/image/upload/${src}`;

	return <img src={cloudinaryURL} alt={alt} />;
}