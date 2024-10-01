import * as React from 'react';
import './Slider.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function Products() {
  return (
    <ImageList sx={{ width: 1400, height: 600, margin: 2, padding: 5 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{padding: 5}}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://happydiyhome.com/wp-content/uploads/2020/04/4-Green-Pepper-Plant.jpg',
    title: 'Green Pepper',
    author: 'Mano-Agro Enterprises',
    id: 'pdt',
  },
  {
    img: 'https://th.bing.com/th/id/R.17fb8fb375f823d73e3377ad5f36aa09?rik=svqC64bVC%2bL3mw&riu=http%3a%2f%2fbyecco.com%2fwp-content%2fuploads%2f2017%2f08%2fbioestimulantes.jpg&ehk=t8R9joVS8aMH14uy4wd53sJ5p4EqdZwKyet6fBr%2bI%2bs%3d&risl=&pid=ImgRaw&r=0',
    title: 'Red Pepper',
    author: 'Mano-Agro Enterprises',
    id: 'pdt',
  },
  {
    img: 'https://thumbs.dreamstime.com/b/close-up-head-white-cabbage-growing-vegetable-garden-farm-field-red-plant-184723441.jpg',
    title: 'Cabbage',
    author: 'Mano-Agro Enterprises',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.LdTOhxYqrtJbGYJahleLygHaFZ?w=755&h=550&rs=1&pid=ImgDetMain',
    title: 'Maize Plantation',
    author: 'Mano-Agro Enterprises',
  },
  {
    img: 'https://ifp-bucket.s3.amazonaws.com/feature_image/Coffee_Cultivation_in_the_Northeast_A_Re-appraisalCoffee_Cultivation_in_th_4SBn6xc.jpg',
    title: 'Coffee',
    author: 'Mano-Agro Enterprises',
  },
  {
    img: 'https://www.myown.ng/wp-content/uploads/2019/05/Hello-Tractor.png',
    title: 'Ploughing machine',
    author: 'Mano-Agro Enterprises',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.VoeamiUfQlXyuUO70IjPcgHaHa?w=750&h=750&rs=1&pid=ImgDetMain',
    title: 'BPloughing Machine',
    author: 'Mano-Agro Enterprises',
  },
  {
    img: 'https://ae01.alicdn.com/kf/S8f07db54e44b4eaba69acc754a611a85Y/Walking-Tractor-15HP-Farm-Tractor-Agricultural-Machinery-Cultivator-Rotary-Cultivator.jpg',
    title: 'Cereal Harvester',
    author: 'Mano-Agro Enterprises',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.up-YuljaMpmk_D0EVE9c1gHaE8?w=1024&h=683&rs=1&pid=ImgDetMain',
    title: 'Sukuma',
    author: 'Mano-Agro Enterprises',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.ppME80L80D-D518N7gP7LAHaE7?w=1000&h=665&rs=1&pid=ImgDetMain',
    title: 'Coffee Seedlings',
    author: 'Mano-Agro Enterprises',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.L3Iwwc1TIPkMOafEpKt7vQHaE8?w=800&h=534&rs=1&pid=ImgDetMain',
    title: 'Tomato Plantation',
    author: 'Mano-Agro Enterprises',
  },
  {
    img: 'https://thumbs.dreamstime.com/z/coffee-beans-2069134.jpg',
    title: 'Roasrted Coffee',
    author: 'Mano-Agro Enterprises',
  },
];
