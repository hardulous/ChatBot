import React, { useEffect, useState } from 'react';

// This dog is a widget so it will render only when botMessage with widget is created and from then will render everytime the user enter the input

const Dog = () => {

  console.log("Dog")  

  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message);
      });
  }, []);

  return (
    <div>
      <img src={imageUrl} alt='a dog' />
    </div>
  );
};

export default Dog;