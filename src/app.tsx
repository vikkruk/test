import {
  Box, Container, IconButton, Typography,
} from '@mui/material';
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type TouristAttractionProps = {
  id: string,
  title: string,
  photo: string,
  description: string,
  location: string,
};

const meatPlaces: TouristAttractionProps[] = [
  {
    id: '1',
    title: 'Restaurant Lokys',
    photo: 'https://www.tourtravelhotels.com/wp-content/uploads/2021/05/Restaurant-Lokys.jpg',
    description: 'Lithuanian restaurant in Vilnius Old Town is a second-generation family restaurant, which specializes in historical traditional Lithuanian cuisine. Our menu narrates olden stories of Lithuanian noblemen, who feasted on forest foods like berries, mushrooms, nuts, and game.',
    location: 'Stikliu str. 8, Vilnius',
  },
  {
    id: '2',
    title: 'Bistro 18',
    photo: 'https://media-cdn.tripadvisor.com/media/photo-s/01/ed/ea/00/bistro-18.jpg',
    description: 'At bistro 18 we have a passion for and commitment to food. Our driving force is a need to provide the very best dishes with the best of care and the least intrusion to the products themselves. We pride ourselves on making everything in house, something which requires more time and patience but from which the end result sings.',
    location: 'Stiklių str. 18',
  },
  {
    id: '3',
    title: 'Meat Lovers Pub',
    photo: 'https://media-cdn.tripadvisor.com/media/photo-s/02/c5/3a/88/meat-lovers-pub.jpg',
    description: '#6 of 44 steak restaurants in Vilnius #41 of 146 BBQs in Vilnius Add a photo 20 photos Besides Statue of Laurynas Gucevicius, visit Meat Lovers in the vicinity. At this restaurant, visitors may have good medium steaks, hamburgers and pork ribs. You will enjoy its food, particularly tasty chocolate cakes, cheesecakes and crème brûlée.',
    location: 'A. Šv.Ignoto g. 14',
  },

];

const enlarge = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  const element = (e.target as HTMLButtonElement).parentElement;
  if (element === null) throw new Error('Error');
  else {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      if (card.id === element.id) {
        card.classList.toggle('enlarge');
      } else {
        card.classList.toggle('hide');
      }
    });
  }

  // const element = (e.target as HTMLButtonElement).parentElement;
  // if (element === null) throw new Error('Error');
  // element.classList.toggle('enlarge');
};

const TouristAttraction: React.FC<TouristAttractionProps> = ({
  title, photo, description, location, id,
}) => (
  <Box
    id={id}
    className="card"
    sx={{
      display: 'flex',
      height: 200,
      overflow: 'hidden',
      border: '1px solid black',
      borderRadius: '15px',
      userSelect: 'none',
      position: 'relative',
      transition: 'height 0.5s linear 0.4s, position 0.5s linear 0.4s, opacity 0.2s linear 0.2s, transform 0.3s linear 0.2s',

      '&.enlarge': {
        height: 600,
        justifySelf: 'center',
        position: 'absolute',
        top: 100,

        '& h3': {
          visibility: 'visible',
        },
      },

      '&.hide': {
        opacity: 0,
        transform: 'translateY(320px)',
      },
    }}
  >
    <IconButton
      sx={{
        position: 'absolute',
        top: 0,
        right: 0,
      }}
      onClick={(e) => enlarge(e)}
    >
      <KeyboardArrowDownIcon
        sx={{

          fontSize: 50,
          transition: 'transform 0.3s',
          zIndex: -1,
          '&:hover': {
            transform: 'scale(1.3)',
          },
        }}

      />
    </IconButton>
    <Box
      component="img"
      src={photo}
      sx={{
        objectFit: 'cover',
        width: 300,
      }}
    />
    <Box sx={{
      p: 2,
    }}
    >
      <Typography component="h2" variant="h3">{title}</Typography>
      <Typography component="h4" variant="h6">{location}</Typography>
      <Typography component="h3" variant="h5" sx={{ visibility: 'hidden', transition: 'visibility 0.5s ease-in 0.5s' }}>{description}</Typography>
    </Box>
  </Box>
);

const App: React.FC = () => (
  <Container sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 3,
    p: 2,
    height: '100vh',
    position: 'relative',
    overflow: 'hidden',
  }}
  >
    {meatPlaces.map((meatPlace) => (<TouristAttraction id={meatPlace.id} key={meatPlace.title} photo={meatPlace.photo} title={meatPlace.title} description={meatPlace.description} location={meatPlace.location} />))}
  </Container>
);

export default App;
